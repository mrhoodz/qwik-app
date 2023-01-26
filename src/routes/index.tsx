import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Home from "~/Layout/Home/home";
import Focus from "~/Layout/Home/focus";
import Goals from "~/Layout/Home/goals";

interface ProductData {
  skuId: string;
  price: number;
  description: string;
}

export default component$(function Index() {
  // const loc = useLocation();
  // $booter(loc.pathname)

  return (
    <>
      <Home />
      <Focus />
      <Goals />
    </>
  );
});

export const $booter = (response: any) => {
  console.log("booting", response);
};

export const head: DocumentHead = {
  title: "Homepage",
};
