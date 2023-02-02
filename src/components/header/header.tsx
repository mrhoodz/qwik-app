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
  const clientHeight: any = useSignal(0);

  useClientEffect$(
    () => {
      onresize = $(() => {
        if (document.documentElement.clientWidth > 600) {
          menuSig.value = false;
        }

        windowWidth.value = document.documentElement.clientWidth;
        console$.log(document.documentElement.clientWidth);
      });

      onscroll = $(() => {
        // console$.log(scroll.value);
        clientHeight.value =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        scroll.value = window.scrollY / clientHeight.value;
      });
    },
    { eagerness: "load" }
  );

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
                menuSig.value = false;
              }}
            >
              {" "}
              {/* <img class="close-icon" src="svg/Icon ionic-ios-close.svg" alt="close-icon" /> */}
              <svg
                class="close-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22.867"
                height="22.861"
                viewBox="0 0 22.867 22.861"
              >
                <path
                  d="M25.428,22.719,33.6,14.552a1.914,1.914,0,1,0-2.706-2.706l-8.167,8.167-8.167-8.167a1.914,1.914,0,1,0-2.706,2.706l8.167,8.167-8.167,8.167a1.914,1.914,0,1,0,2.706,2.706l8.167-8.167,8.167,8.167A1.914,1.914,0,1,0,33.6,30.887Z"
                  transform="translate(-11.285 -11.289)"
                  fill="#edd8d8"
                />
              </svg>
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
            if (menuSig.value == false) {
              // menuEvent(menuSig)
              menuSig.value = true;
            } else {
              menuSig.value = false;
            }
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
