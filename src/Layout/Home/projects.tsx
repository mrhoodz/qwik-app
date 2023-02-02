import {
  component$,
  useClientEffect$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
// import ProjectCard from "~/components/project-card/project-card";
import styles from "./styles/_projects.scss?inline";
import { DragContainer } from "./dragContainerMotion";
import { console$ } from "~/components/header/header";

export default component$(function projects() {
  useStyles$(styles);

  const leftConstraint = useSignal(0);
  const rightConstraint = useSignal(0);
  const windowWidth = useSignal(0);

  useClientEffect$(() => {
    windowWidth.value = document.documentElement.clientWidth;
    // console$.log(windowWidth);
    onresize = () => {
      windowWidth.value = document.documentElement.clientWidth;
      console$.log(windowWidth.value);
    };

    if (windowWidth.value > 700) {
      leftConstraint.value =
        (document.documentElement.clientWidth / 1903) * -380;
      rightConstraint.value =
        (document.documentElement.clientWidth / 1903) * 320;
    } else {
      leftConstraint.value = -420;
      rightConstraint.value = 390;
    }
  });

  return (
    <>
      <article id="Projects">
        <section class="featured">
          <h2 class="heading">
            {" "}
            <span class="html-only">My work is </span> featured on{" "}
          </h2>

          <div class="logos">
            <img
              class="socials"
              src="/svg/dribbble.svg"
              alt="feature on logos"
            />
            <img
              class="socials"
              src="/svg/instagram.svg"
              alt="feature on logos"
            />
            <img
              class="socials"
              src="/svg/behance.svg"
              alt="feature on logos"
            />
          </div>
        </section>

        <h3 class="h2">Projects</h3>

        <DragContainer
          leftConstraint={leftConstraint}
          rightConstraint={rightConstraint}
          client:visible
        />
      </article>
    </>
  );
});
