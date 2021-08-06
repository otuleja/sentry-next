import "../styles/globals.css";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
Sentry.init({
  dsn: process.env.sentry,
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
console.log("here", process.env.sentry);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
