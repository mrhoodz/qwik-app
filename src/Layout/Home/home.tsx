import {
  component$,
  // useOnDocument,
  // createContext,
  // useClientEffect$,
  // useContext,
  // useContextProvider,
  // useSignal,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./styles/_home.scss?inline";
// import { useTextStore } from "./textStore";

// export const CTX = createContext("CTX");

export default component$(function Home() {
  // const userData = {
  //   count: 5,
  // };

  // const sig = useSignal("23");

  // sig.value = "yoo";

  // useClientEffect$(() => {
  //   useTextStore.subscribe(() => {
  //     sig.value = useTextStore.getState().active;
  //   });
  // });

  // useContextProvider(CTX, sig);
  // const position = useR

  useStyles$(styles);
  return (
    <article id="Home">
      <aside>
        {/* <motion$.h3 data={"it works woooow"} color={"aqua"} Ocolor={"pink"} /> */}

        {/* <h3>hey hey hey {sig.value} </h3>

        <H3 /> */}

        <h1
        // onClick$={() => {
        //   clickHandler();
        // }}
        >
          My name is Tino<span class="html-only">tenda Muringami</span> and l
          <span class="html-only"> am a web</span> design
          <span class="html-only">er</span>
        </h1>

        <p
          onClick$={() => {
            window.scrollTo(0, 1098);
            // console.log(document.getElementById("Home"));
          }}
          window:onLoad$={() => {
            // document.getElementById("#Home")

            console.log(document.getElementById("Home")?.offsetTop);
          }}
          // window:onScroll$={() => {
          //   console.log(document.documentElement.clientWidth);
          // }}
        >
          <span class="html-only">I design</span>
          Amazing websites, branding and neo-digital marketing projects for
          start ups and legacy businesses.
        </p>

        <div class="subtitle">
          <span class="html-only">Realwebsdigital is</span> Based in South
          Africa, available worldwide
        </div>

        <section class="CV desktop">
          <a
            // href="resume.pdf"
            download
          >
            <div class="img-area">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/projects/sub image.avif"
                  media="(min-width: 800px)"
                />

                <img src="/projects/sub image.png" alt="cv-cover image" />
              </picture>

              {/* <picture>
                <source
                  srcSet="/projects/sub image.png"
                  media="(orientation: portrait)"
                />
                <img src="/media/cc0-images/painted-hand-298-332.jpg" alt="" />
              </picture> */}

              <span id="dowload-CV"> </span>
            </div>

            <span id="resume-text"> Download Resume here </span>
          </a>
        </section>

        <div class="scroll">
          <span>SCROLL</span>

          <img src="/svg/scroll icon.svg" alt="scroll icon" />
        </div>
      </aside>

      <span>
        <section class="heroImg-area desktop">
          <span class="shell">
            <img class="twink-left" src="/svg/twink left.svg" alt="" />
            <img class="twink-right" src="/svg/twink right.svg" alt="" />
          </span>
          {/* 
          <img
            // loading="lazy"
            class="hero-img"
            src="/tinotenda muringami.avif"
            alt="hero-img"
          /> */}

          <img
            // loading="lazy"
            class="hero-img"
            src="/Tinotenda Muringami.jpg"
            alt="hero-img"
          />
        </section>
      </span>
    </article>
  );
});

// export const motion$ = {
//   h3: component$(({ data, color }: any) => {
//     const Xcolor = useSignal(color);
//     const animationName = useSignal("animate");

//     const ref = useSignal();
//     return (
//       <>
//         {/* <h3
//           draggable={false}
//           onMouseOver$={() => {
//             Xcolor.value = "red";
//             // animationName.value = "clickAnimate";
//           }}
//           style={{
//             "--color": Xcolor.value,
//             // animationName: animationName.value,
//           }}
//           class="comp"
//         >
//           kkkkk + {data}
//         </h3> */}
//       </>
//     );
//   }),

//   h4: component$(() => {
//     return (
//       <>
//         <h3>kkkkk</h3>
//       </>
//     );
//   }),
// };

//

// export const clickHandler = () => {
//   console.log("l got it");
//   useTextStore.setState({ active: "blaaah blah blah" });
// };

// export const H3 = component$(() => {
//   const sig: any = useContext(CTX);

//   // console.log("lm h3");

//   return (
//     <>
//       {" "}
//       <h3
//         onClick$={() => {
//           console.log("loco");
//           sig.value = 3;
//         }}
//         style={{ color: "lime" }}
//       >
//         this is h4 + {sig.value}{" "}
//       </h3>{" "}
//     </>
//   );
// });
