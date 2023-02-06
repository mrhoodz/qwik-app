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

//primary meta tags

  title: "Homepage | RealWebsdigital",
  meta: [
    { name: "title", content: "Based in South Africa available worldwide" },
    {
      name: "description",
      content:
        "RealWebsdigital is a South African-based design agency that specializes in creating stunning websites, branding and digital marketing solutions for startups and established businesses worldwide.",
    },
    { name: "keywords", content: "Web Design, HTML, Javascript " },
    { name: "revised", content: "Sunday, July 18th, 2021, 5:15 pm" },
    { name: "author", content: "Tinotenda Muringami" },
    { name: "theme-color", content: "#000000" },


    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    {property:"og:url", content:"https://www.realwebsdigital.com/"},
    { name: "og:title", content: "Based in South Africa available worldwide" },

    {
      name: "og:description",
      content:
        "RealWebsdigital is a South African-based design agency that specializes in creating stunning websites, branding and digital marketing solutions for startups and established businesses worldwide.",
    },
    { property: "og:image", content: "meta-img.jpg" },



//twitter meta tags



{ property: "twitter:card", content: "summary_large_image" },
{property:"twitter:url", content:"https://www.realwebsdigital.com/"},
{ name: "twitter:title", content: "Based in South Africa available worldwide" },

{
  name: "twitter:description",
  content:
    "RealWebsdigital is a South African-based design agency that specializes in creating stunning websites, branding and digital marketing solutions for startups and established businesses worldwide.",
},
{ property: "twitter:image", content: "/meta-img.jpg" },

],
};
