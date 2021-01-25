import { createCanvas, registerFont } from "canvas";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const ticker = req.query.ticker as string;

  if (!ticker) {
    res.status(404).json({ error: "Not found" });
  }

  registerFont(path.join(process.cwd(), "./fonts/SFNSRounded.ttf"), {
    family: "SFNSRounded",
  });

  const width = 1200;
  const height = 600;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#3b82f6");
  gradient.addColorStop(0.5, "#6366f1");
  gradient.addColorStop(1, "#7c3aed");

  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  const formattedTicker = ticker.toUpperCase();

  context.font = "40pt bold SFNSRounded";
  context.textAlign = "center";
  context.fillStyle = "#fff";

  if (ticker === "undefined" || ticker === "ipobrief") {
    context.fillText("How much is $1000", 600, 300);
    context.fillText("of an IPO worth today?", 600, 370);
  } else {
    context.fillText("How much is $1000 in", 600, 300);
    context.fillText(`${formattedTicker}'s IPO worth today?`, 600, 370);
  }

  context.fillStyle = "#fff";
  context.font = "18pt bold SFNSRounded";
  context.fillText("Created by the ipobrief.email", 600, 550);

  const buffer = canvas.toBuffer("image/png");

  res.writeHead(200, [["Content-Type", "image/png"]]);
  res.end(buffer);
};
