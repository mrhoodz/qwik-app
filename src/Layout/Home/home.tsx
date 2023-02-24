import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_home.scss?inline";

export default component$(function Home() {
  useStyles$(styles);

  return (
    <article id="Home">
      <aside>
        {/* <motion$.h3 data={"it works woooow"} color={"aqua"} Ocolor={"pink"} /> */}

        <h1>
          My name is Tino <span class="html-only">tenda Muringami</span> and
          design
        </h1>

        <p>
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
