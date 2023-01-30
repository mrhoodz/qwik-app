import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_home.scss?inline";
import PostCard from "~/components/post-card/post-card";

export default component$(function Home() {
  useStyles$(styles);

  return (
    <article id="Home">
      <aside class="content">
        <h2 class="subtitle">Checkout the</h2>

        <h1>Latest Post</h1>

        <PostCard variant="big" />

        {/* <PostCard variant="small" /> */}

        <div class="scroll">
          <span>SCROLL</span>

          <img src="/svg/scroll icon.svg" alt="scroll icon" />
        </div>

        <img class="hero-img desktop" src=" " alt="hero image goes here" />
      </aside>
    </article>
  );
});
