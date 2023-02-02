import { component$, useStyles$ } from "@builder.io/qwik";
// import ProjectCard from "~/components/project-card/project-card";
import styles from "./styles/_projects.scss?inline";
import { DragContainer } from "./dragContainerMotion";

export default component$(function projects() {
  useStyles$(styles);

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

        <div class="scroll-container">
          <DragContainer client:visible />
        </div>
      </article>
    </>
  );
});
