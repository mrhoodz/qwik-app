import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.scss?inline";
import "./styles/style.scss";
import { QwikPartytown } from "./components/partytown/partytown";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const googleScript = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZCKLLTQKKE'); `;

  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        {/* <!-- Google tag (gtag.js) --> */}

        <QwikPartytown forward={["dataLayer.push"]} />

        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCKLLTQKKE"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={googleScript}
        ></script>

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCKLLTQKKE"></script> */}

        {/* 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
        rel="preconnect"
        <link rel="manifest" href="/manifest.json" />
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        /> */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        /> */}

        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
