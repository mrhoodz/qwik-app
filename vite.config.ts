import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import webfontDownload from "vite-plugin-webfont-dl";
import { join } from "path";

export default defineConfig(() => {
  return {
    plugins: [
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
      webfontDownload([
        "https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@400;500;600;700&display=swap",
      ]),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikReact(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
