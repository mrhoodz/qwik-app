/** @jsxImportSource react */

// import { component$ } from "@builder.io/qwik";
// import styles from "./styles/_projects.scss?inline";
import { qwikify$ } from "@builder.io/qwik-react";
// import { randomUUID } from "crypto";
import { motion } from "framer-motion";
import ProjectCard from "~/components/project-card/project-card";
import { ProjectCardProps } from "~/types/types";

export const DragContainer = qwikify$(
  ({ leftConstraint, rightConstraint }: any) => {
    // console$.log(leftConstraint.value);

    // description: "Zongetsu is a Japanese word that means 'moonlight'. This is a personal project that I created to practice my skills in Adobe Illustrator. I wanted to create a logo that was simple and clean, but also had a bit of a mysterious feel to it. I also wanted to create a logo that could be used for a variety of different purposes, such as a clothing brand, a restaurant, or a music group. I also wanted to create a logo that could be used for a variety of different purposes, such as a clothing brand, a restaurant, or a music group.", }

    const projectInfo: ProjectCardProps[] = [
      { img: "zongestu (Large).jpg", title: "Zongetsu", year: "2021" },
      { img: "FYR (Large).jpg", title: "FYR Fashion 🔥", year: "2022" },
      { img: "5star (Large).jpg", title: "5 star engineering", year: "2023" },
    ];

    return (
      <>
        <div className="scroll-container">
          <motion.div
            drag="x"
            dragConstraints={{
              left: leftConstraint.value,
              right: rightConstraint.value,
            }}
            className="drag-container"
          >
            {projectInfo.map((item: any) => (
              <ProjectCard
                key={Math.random()}
                img={item.img}
                title={item.title}
                year={item.year}
              />
            ))}

            {/* {projectInfo.map(() => (  <h2>dsadasd</h2>  )  )    } */}
          </motion.div>
        </div>
      </>
    );
  }
);
