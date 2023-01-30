import {
  $,
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./header.scss?inline";
import { Link } from "@builder.io/qwik-city";
// import { Motion } from "~/integrations/react/motion";

export default component$(() => {
  useStylesScoped$(styles);

  const store = useStore({
    scroll: 0,
  });

  useClientEffect$(() => {
    // booter("a");

    onscroll = $(() => {
      // console$.log(window.scrollY / height);
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      store.scroll = window.scrollY / height;
    });
  });

  return (
    <>
      <header>
        <div class="logoArea">
          <Link href="/">
            <img id="logoPng" src="/logos/logoPng.svg" alt="logoPng" />
            <img
              id="logoText"
              class="desktop"
              src="/logos/logoText.svg"
              alt="logoText"
            />
          </Link>
        </div>

        <aside class="menu">
          <span style={{ transform: `scaleX(${store.scroll})` }}></span>
          <span></span>
          <span></span>
        </aside>
      </header>
    </>
  );
});

// export const booter = (data?: any) => {
//   const height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;

//   onscroll = () => {
//     const windowPort = document.body.scrollHeight;

//     const x = document.body.scrollHeight.valueOf();

//     let foo = window.scrollY / height;

//     console.log((window.scrollY / height) * 10);
//   };
//   return height;
// };

// export const booter = (data: any) => {
//   const x = window.screen.availWidth;

//   onresize = () => {
//     console.log("window is " + window.screen.availWidth);
//   };

//   onscroll = () => {
//     const windowPort = document.body.scrollHeight;

//     const x = document.body.scrollHeight.valueOf();

//     console.log((window.scrollY / height) * 10);
//   };

//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;

//   return (window.scrollY / height) * 100;
//   //   console.log("window is "  + data);
// };

// export const console$ = {
//   log: (data: any) => {
//     console.log(data);
//   },
// };
