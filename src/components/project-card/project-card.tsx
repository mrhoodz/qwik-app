/** @jsxImportSource react */

// import { component$, useStyles$ } from "@builder.io/qwik";

import { motion } from "framer-motion";
import "./_project-card.scss";
// import { qwikify$ } from "@builder.io/qwik-react";

export default function projectCard() {
  return (
    <>
      <article className="placeholder">
        <div className="project-card">
          <div className="project-preview">
  {/* <motion.span whileHover={{scale: 2}} > */}

  <img id="project-image"
              width="1920"
              height="3519"
              loading="lazy"
              src="projects/preview.avif"
              alt="project here"
            />

  {/* </motion.span> */}
          </div>

          <div className="project-info">
            <div className="info-details">
              <h2>FashionHub</h2>

              <p>2021</p>
            </div>

            <div className="view-button">View Project</div>
          </div>
        </div>
      </article>
    </>
  );
}
