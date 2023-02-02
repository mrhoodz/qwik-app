import {
  $,
  component$,
  useClientEffect$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./header.scss?inline";
import "../../styles/_displaybreak.scss";
import { Link } from "@builder.io/qwik-city";
// import { Motion } from "~/integrations/react/motion";

export default component$(() => {
  useStylesScoped$(styles);

  // const store: any = useStore({
  //   scroll: 0,
  // });

  const scroll: any = useSignal(0);
  const menuSig: any = useSignal(false);
  const windowWidth: any = useSignal(1920);

  useClientEffect$(() => {
    onresize = $(() => {
      if (document.documentElement.clientWidth > 600) {
        menuSig.value = false;
      }

      windowWidth.value = document.documentElement.clientWidth;
      console$.log(document.documentElement.clientWidth);
    });

    onscroll = $(() => {
      console$.log(scroll.value);
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      scroll.value = window.scrollY / height;
    });
  });

  // create a tenary operator to check if the menu is open or closed
  // if the menu is open, then the menu should be visible
  // if the menu is closed, then the menu should be hidden

  // tenary operator
  // if (menuSig) {
  //   // menu is open
  //   // menu should be visible
  // } else {
  //   // menu is closed
  //   // menu should be hidden
  // }

  return (
    <>
      <header>
        <span
          style={{ transform: `scaleX(${scroll.value})` }}
          id="nav-progress"
        ></span>

        <Link href="/">
          <div class="logoArea ">
            <img id="logoPng" src="logos/logoPng.svg" alt="logoPng" />
            <img
              id="logoText"
              class="desktop"
              src="logos/logoText.svg"
              alt="logoText"
            />
          </div>
        </Link>

        <nav class="navLinks desktop">
          <a href="/" class="link">
            Home
          </a>
          <a href="/#Goals" class="link">
            Goals
          </a>
          <a href="/#Projects" class="link">
            Projects
          </a>
          <a href="/#Focus" class="link">
            FAQ
          </a>
        </nav>

        <span class="switch desktop">
          <a class="switch-A">Portfoilo</a>
          <a class="switch-B"> Blog </a>
        </span>

        <section
          class="side-analysis mobile"
          style={{ display: menuSig.value == false ? "none" : "block" }}
        >
          <div class="top">
            <img id="logoPng" src="/logos/logoPng.svg" alt="logoPng" />

            <div
              class="circle"
              onClick$={() => {
                // menuEvent(menuSig)
                menuSig.value = false;
              }}
            >
              {" "}
              x
            </div>
          </div>
          <nav class="navLinks desktop-only">
            <a href="/" class="link">
              Home
            </a>
            <a href="/#Goals" class="link">
              Goals
            </a>
            <a href="/#Projects" class="link">
              Projects
            </a>
            <a href="/#Focus" class="link">
              Focus
            </a>

            <span class="switch">
              <a class="switch-A">Portfoilo</a>
              <a class="switch-B"> Blog </a>
            </span>
          </nav>
        </section>

        <aside
          class="menu mobile"
          onClick$={() => {
            // menuEvent(menuSig)
            menuSig.value = true;
          }}
        >
          {/* <span style={{ transform: `scaleX(${store.scroll})` }}></span> */}
          <span></span>

          <span></span>
          <span></span>
        </aside>
      </header>
    </>
  );
});

export const menuEvent = (sig: any, win: any) => {
  if (sig.value == false && win > 600) {
    sig.value = true;
  } else {
    sig.value = false;
  }
};

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

export const console$ = {
  log: (data: any) => {
    console.log(data);
  },
};
