import { component$, useStyles$ } from "@builder.io/qwik";

// import "./styles/_moreposts.scss";

import styles from "./styles/_moreposts.scss?inline";
import PostCard from "~/components/post-card/post-card";
// import  "../../components/post-card/_post-card.scss";

export default component$(function MorePosts() {
  useStyles$(styles);

  return (
    <article id="Analysis">
      <h3 class="subtitle">Checkout</h3>

      <h2 class="h2">More Posts</h2>

      <PostCard variant="big" />

      <PostCard variant="small" />
      <PostCard variant="small" />
      <PostCard variant="small" />

      <PostCard variant="big" />
    </article>
  );
});
