import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Home from "~/Layout/Home/home";
import Focus from "~/Layout/Home/focus";
import Goals from "~/Layout/Home/goals";
import Projects from "~/Layout/Home/projects";

// interface ProductData {
//   skuId: string;
//   price: number;
//   description: string;
// }

export default component$(function Index() {
  // const loc = useLocation();
  // $booter(loc.pathname)

  return (
    <>
      <Home />
      <Focus />

      <Projects />

      <Goals />
    </>
  );
});

export const $booter = (response: any) => {
  console.log("booting", response);
};

export const head: DocumentHead = {
  title: "Homepage: Based in South Africa available worldwide",
  meta: [
    { name: "description", content: "This is the homepage" },
    { name: "keywords", content: "Web Design, HTML, Javascript " },
    { name: "revised", content: "Sunday, July 18th, 2021, 5:15 pm" },
    { name: "author", content: "Tinotenda Muringami" },
    { name: "theme-color", content: "#000000" },
    { property: "og:image ", content: "/meta-img.jpg " },
  ],
};
