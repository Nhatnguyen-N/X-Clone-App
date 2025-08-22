import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import { ENV } from "./env.js";

// initialize Arcjet with security rules"
export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // shield protects your from attacks e.g. SQL injection, XSS, CSRF attacks
    shield({ mode: "LIVE" }),

    // bot detection - block all bots except search engines
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        // allow legitmate search engine bots
        // see full list at https://arcjet.com/bot-list
      ],
    }),
    // rate limiting with token bucket alogrithm
    tokenBucket({
      mode: "LIVE",
      refillRate: 10,
      interval: 10,
      capacity: 15,
    }),
  ],
});
