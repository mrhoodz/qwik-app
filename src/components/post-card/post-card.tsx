import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./_post-card.scss?inline";
import { postVariants } from "~/types/types";

export default component$(function PostCard({ variant }: postVariants) {
  useStyles$(styles);

  return (
    <>
      {variant === "big" ? <BigPost /> : <SmallPost />}

      {/* <BigPost /> */}

      {/* <SmallPost /> */}
    </>
  );
});

export const BigPost = component$(() => {
  return (
    <>
      <section class="Big-post-card">
        {/* <img class="post-thumbnaill" src="" alt="post thumbnail" /> */}
        <span class="thumbnail-container">
          {/* <img class="post-thumbnaill" src="" alt="post thumbnail" /> */}
          <img
            class="post-thumbnaill"
            src="/post_thumb.jpg"
            alt="post thumbnail"
          />
        </span>

        {/* <img class="post-thumbnaill" src="/post_thumb.jpg" alt="post thumbnail" /> */}

        <aside class="post-menu">
          <div class="post-dots">
            <div class="dot-wrapper">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="post-tag">POPPINS</div>
        </aside>

        <aside class="post-details">
          <h2>
            An Extraordinary WebGL Has Been Released By Great China Scientists
          </h2>

          <p>
            I will partner with you to understand and reveal the problems that
            your business has and create a digitally optimized backboned system
            for you too.
          </p>

          <section class="details">
            <div class="author-details">
              <img src="/head.png" alt="author image" />

              <h3>Tinotenda Muringami</h3>
            </div>

            <span class="date">2 days ago</span>
          </section>
        </aside>
      </section>
    </>
  );
});

export const SmallPost = component$(() => {
  return (
    <>
      <section class="Small-post-card">
        {/* <img class="post-thumbnaill" src="" alt="post thumbnail" /> */}
        <span class="thumbnail-container">
          {/* <img class="post-thumbnaill" src="" alt="post thumbnail" /> */}
          <img class="post-thumbnaill" src="/fall.jpg" alt="post thumbnail" />
        </span>

        {/* <img class="post-thumbnaill" src="/post_thumb.jpg" alt="post thumbnail" /> */}

        <aside class="post-menu">
          <div class="post-dots">
            <div class="dot-wrapper">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="post-tag">POPPINS</div>
        </aside>

        <aside class="post-details">
          <h2>
            An Extraordinary WebGL Has Been Released By Great China Scientists
          </h2>

          <p>
            I will partner with you to understand and reveal the problems that
            your business has and create a digitally optimized backboned system
            for you too.
          </p>

          <section class="details">
            <div class="author-details">
              <img src="/head.png" alt="author image" />

              <h3>Tinotenda Muringami</h3>
            </div>

            <span class="date">2 days ago</span>
          </section>
        </aside>
      </section>
    </>
  );
});
