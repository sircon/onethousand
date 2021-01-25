export default {
  url: process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000",
  newsletter: {
    hook: process.env.NEXT_PUBLIC_NEWSLETTER_URL ?? "",
  },
  googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? "",
  hotjar: process.env.NEXT_PUBLIC_HOTJAR ?? "",
};
