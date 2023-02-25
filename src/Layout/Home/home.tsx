import {
  component$,
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
          design
        </h1>

        <p
          window:onScroll$={() => {
            // const {x,y}= e
            console.log(document.documentElement.clientWidth);
          }}
        >
          {" "}
          Amazing websites, branding and neo-digital marketing projects for
          start ups and legacy businesses.
        </p>

        <div class="subtitle">
          <span class="html-only">Im</span> Based in South Africa, available
          worldwide
        </div>

        <section class="CV desktop">
          <div class="img-area">
            <img src="" alt="cv-cover image" />

            <span id="dowload-CV"> </span>
          </div>

          <span id="resume-text">Download My Resume</span>
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

          <img
            // loading="lazy"
            class="hero-img"
            src="/hero-img.avif"
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
