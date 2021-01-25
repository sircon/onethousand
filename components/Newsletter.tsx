import React from "react";
import axios from "axios";
import qs from "querystring";
import config from "../utils/config";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (!email) {
      setError("Please fill up a valid email.");
      return;
    }

    setError("");
    setLoading(true);

    const data = {
      embed: 1,
      email,
      tag: "onethousand",
    };

    try {
      await axios.post(config.newsletter.hook, qs.stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      (window as any).location = "https://tally.so/r/PmO7Rm";
    } catch (error) {
      setError("Oops! Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-white body-font mb-12 container p-4 mx-auto lg:w-1/2">
      <div className="px-5 py-8 lg:py-12  bg-gradient-to-br from-green-500 via-green-500 to-green-600 rounded-3xl">
        <div className="flex flex-col text-center w-full mb-6">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Never miss an IPO again
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Subscribe for free now and get first hand insights on companies
            about to go public with our weekly newsletter
          </p>
        </div>
        <form className="email-form" name="top-form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:w-2/3 w-full mx-auto space-y-2">
            <div className="flex w-full sm:flex-row flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-2 px-5 items-end">
              <div className="relative flex-grow w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                className="text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg w-full lg:w-auto"
                type="submit"
                value={loading ? "Subscribing..." : "Subscribe"}
                disabled={loading}
              />
            </div>

            {error && <p className="text-red-700 text-md">{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};
