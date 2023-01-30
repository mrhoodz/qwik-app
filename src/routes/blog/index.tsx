import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import MorePosts from "~/Layout/Blog/MorePosts";
import Home from "~/Layout/Blog/home";
// import Timeline from "~/Layout/Blog/timeline";

export default component$(function index() {
  return (
    <>
      <Home />

      <MorePosts />

      {/* <Timeline /> */}
    </>
  );
});

export const $booter = (response?: any) => {
  console.log("booting", response);
};

export const head: DocumentHead = {
  title: "Projects",
};
