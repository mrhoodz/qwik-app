import { component$, useStyles$ } from "@builder.io/qwik";
// import ProjectCard from "~/components/project-card/project-card";
import styles from "./styles/_projects.scss?inline";
import {DragContainer} from "./dragContainerMotion";

export default component$(function projects() {
  useStyles$(styles);

  return (
    <>
      <article id="projects">
        <h2>Projects</h2>

        <div class="scroll-container">
          <DragContainer client:visible />
        </div>
      </article>
    </>
  );
});
