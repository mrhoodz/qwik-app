import { component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  // const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

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

      <link rel="canonical" href={"https://www.realwebsdigital.com/"} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
