/** @jsxImportSource react */

// import { component$ } from "@builder.io/qwik";
// import styles from "./styles/_projects.scss?inline";
import { qwikify$ } from "@builder.io/qwik-react";
import { motion } from "framer-motion";
import ProjectCard from "~/components/project-card/project-card";

export const DragContainer = qwikify$(() => {
  return (
    <>
      <motion.div drag="x" className="drag-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </motion.div>
    </>
  );
});