/** @jsxImportSource react */

// import { component$, useStyles$ } from "@builder.io/qwik";

// import { motion } from "framer-motion";
import { ProjectCardProps } from "~/types/types";
import "./_project-card.scss";
import { motion } from "framer-motion";
// import { qwikify$ } from "@builder.io/qwik-react";

export default function projectCard({ img, title, year }: ProjectCardProps) {
  // useEffect(() => {
  //   if (isInView) {
  //     inView + 1;
  //     // console$.log(inView);
  //   } else {
  //     inView - 1;

  //     // console$.log(inView);
  //   }

  //   console.log(
  //     "Element is in view: ",
  //     isInView + "  and the count is " + inView
  //   );
  // }, [isInView]);

  return (
    <>
      <motion.article
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="placeholder"
      >
        <div className="project-card">
          <div className="project-preview">
            {/* <motion.span whileHover={{scale: 2}} > */}

            <img
              id="project-image"
              width="1920"
              height="3519"
              loading="lazy"
              src={"projects/" + img}
              alt={"Realwebsdigital project called" + title}
            />

            {/* </motion.span> */}
          </div>

          <div className="project-info">
            <div className="info-details">
              <h4>{title}</h4>

              <p>{year}</p>
            </div>

            <div className="view-button">View Project</div>
          </div>
        </div>
      </motion.article>
    </>
  );
}
