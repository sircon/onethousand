import { mdiLoading, mdiMagnify, mdiMenuDown, mdiMenuUp } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "../hooks/use-debounce";
import { Quote } from "../interfaces/yahoo-finance";
import { SearchPlaceholder } from "./SearchPlaceholder";

export const SearchInput: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const { push } = useRouter();
  const [value, setValue] = useState("");
  const [results, setResults] = useState<Quote[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useSelectOpenState(ref, false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLoading(true);
    setValue(value);
  };

  const debouncedValue = useDebounce(value?.trim(), 600);

  const searchForTickers = async (q: string): Promise<Quote[]> => {
    const { data } = await axios.get<{ results: Quote[] }>("/api/search", {
      params: { q },
    });

    return data.results;
  };

  const selectQuote = (quote: Quote) => {
    setOpen(false);
    setSelectedIndex(-1);
    ref.current?.blur();

    setValue(quote.symbol);

    push(`/${quote.symbol}`);
  };

  useEffect(() => {
    if (debouncedValue) {
      searchForTickers(debouncedValue)
        .then((tickers: Quote[]) => {
          setResults(tickers);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [debouncedValue]);

  const renderResults = () => {
    if (!results.length) {
      if (!debouncedValue?.length) {
        return <SearchPlaceholder>Type to search...</SearchPlaceholder>;
      }

      if (debouncedValue?.length && isLoading) {
        return <SearchPlaceholder>Fetching results...</SearchPlaceholder>;
      }

      if (debouncedValue?.length) {
        return <SearchPlaceholder>No more results</SearchPlaceholder>;
      }
    }

    if (isLoading) {
      return <SearchPlaceholder>Searching...</SearchPlaceholder>;
    }

    return results.map((quote, index) => {
      return (
        <li
          key={quote.symbol}
          onClick={() => selectQuote(quote)}
          className={classNames(
            "flex items-center justify-between p-2 cursor-pointer text-purple-900 hover:bg-purple-100",
            {
              "bg-purple-100": index === selectedIndex,
            }
          )}
        >
          <div className="flex items-baseline flex-shrink-1 w-full overflow-hidden">
            {quote.shortname} ({quote.symbol})
          </div>
        </li>
      );
    });
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Tab":
          if (event.shiftKey) {
            return;
          }

          setOpen(false);
          return;
        case "Enter":
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }
          if (isOpen) {
            const ticker = results[selectedIndex];

            if (ticker) {
              selectQuote(ticker);
            }
            break;
          }
          return;
        case "Escape":
          if (isOpen) setOpen(false);
          break;
        case "ArrowUp":
          if (isOpen) {
            const nextIndex =
              selectedIndex - 1 < 0 ? results.length - 1 : selectedIndex - 1;
            setSelectedIndex(nextIndex);
          }
          break;
        case "ArrowDown":
          if (isOpen) {
            const prevIndex =
              selectedIndex + 1 > results.length - 1 ? 0 : selectedIndex + 1;
            setSelectedIndex(prevIndex);
          }
          break;
        default:
          return;
      }
      event.preventDefault();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, selectedIndex, results, selectQuote, setOpen]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    switch (event.key) {
      case "ArrowUp":
        if (!isOpen) {
          setSelectedIndex(results.length - 1);
          setOpen(true);
        }
        break;
      case "ArrowDown":
        if (!isOpen) {
          setSelectedIndex(0);
          setOpen(true);
        }
        break;
      default:
        if (!isOpen) setOpen(true);

        return;
    }
    event.preventDefault();
  };

  const inputLeftIcon = isOpen && isLoading ? mdiLoading : mdiMagnify;

  const inputRightIcon = isOpen ? mdiMenuUp : mdiMenuDown;

  return (
    <div className="w-full max-w-sm mx-auto lg:mx-0">
      <div ref={ref} className="relative w-full mt-4">
        <input
          type="search"
          className="w-full bg-white rounded border border-purple-300 focus:ring-2 focus:ring-purple-200 focus:bg-white focus:border-purple-500 text-base outline-none text-purple-700 py-1 px-10 leading-8 transition-colors duration-200 ease-in-out relative z-30"
          placeholder="Search for a ticker or a company name"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={() => setOpen(true)}
          ref={input}
        />
        <span className="absolute left-2 top-2 h-7 w-7 z-30">
          <Icon path={inputLeftIcon} spin={isOpen && isLoading} />
        </span>
        <span className="absolute right-1 top-2 h-7 w-7 z-30">
          <Icon path={inputRightIcon} color="black" />
        </span>
        <div
          className={classNames(
            "absolute z-20 bg-white border border-gray-200 block text-black top-1/2 pt-5 rounded-b-sm w-full",
            {
              visible: isOpen,
              invisible: !isOpen,
            }
          )}
        >
          {renderResults()}
        </div>
      </div>
    </div>
  );
};

function useSelectOpenState(
  ref: React.RefObject<HTMLElement>,
  initialState = false
): [boolean, (e: boolean) => void] {
  const [isOpen, setOpen] = useState(initialState);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        setOpen(true);
        return;
      }

      setOpen(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, isOpen]);

  return [isOpen, setOpen];
}
