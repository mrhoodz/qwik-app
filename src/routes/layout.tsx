import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  // $booter( window.screen.width  )

  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
    </>
  );
});

export const $booter = (response: any) => {
  console.log("booting", response);
};
