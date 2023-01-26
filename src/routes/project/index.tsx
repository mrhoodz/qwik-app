import { component$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import React from "react";
import Analysis from "~/Layout/Projects/analysis";
import Home from "~/Layout/Projects/home";
import Timeline from "~/Layout/Projects/timeline";

export default component$(function index({ params }: any) {



  return (
    <>

      <Home />

      <Analysis />

      <Timeline />
    </>
  );
});





export const $booter = (response: any) => {
  console.log("booting", response);
};

export const head: DocumentHead = {
  title: "Projects",
};
