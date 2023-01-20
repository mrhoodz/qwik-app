import {
  $,
  PropFunction,
  component$,
  useStore,
  useClientEffect$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Motion } from "~/integrations/react/motion";
import { Test } from "~/integrations/react/test";
import { Try } from "./try";

interface CmpButtonProps {
  onClick$?: PropFunction<() => number>;
}

export default component$((props: CmpButtonProps) => {
  const data = useStore({ data: "hello" });

  // let fun = () => {
  //   console.log("faete");
  // };

  const store = useStore({ count: -3 });

  // const fun = useStore({
  //   run: $(() => {
  //     console.log("nice");
  //   }),

  // });

  // $( () => console.log("store", store.count)   )

  // const incrementCount = $(() => store.count);

  const plus = $(() => {
    store.count++;
    // console.log("ok good");
  });

  return (
    <>
      <span onClick$={$(() => high())}>ddd</span>

      <p onClick$={$(() => real())}>try on this one</p>

      {/* <button onClick$={ () => console.log("hey friend")  } >Click Me</button>;   */}

      {/* <div>
        <h1>
          Welcome to Qwik <span class="lightning">⚡️</span>
        </h1>

        <ul>
          <li>
            <Motion data={data} client:visible />
            Check out the <code>src/routes</code> directory to get started.
          </li>
          <li>
            Add integrations with <code>npm run qwik add</code>.
          </li>
          <li>
            More info about development in <code>README.md</code>
          </li>
        </ul>

        <h2>Commands</h2>

        <table class="commands">
          <tr>
            <td>
              <code>npm run dev</code>
            </td>
            <td>Start the dev server and watch for changes.</td>
          </tr>
          <tr>
            <td>
              <code>npm run preview</code>
            </td>
            <td>Production build and start preview server.</td>
          </tr>
          <tr>
            <td>
              <code>npm run build</code>
            </td>
            <td>Production build.</td>
          </tr>
          <tr>
            <td>
              <code>npm run qwik add</code>
            </td>
            <td>Select an integration to add.</td>
          </tr>
        </table>

        <h2>Add Integrations</h2>

        <table class="commands">
          <tr>
            <td>
              <code>npm run qwik add azure-swa</code>
            </td>
            <td>
              <a
                href="https://learn.microsoft.com/azure/static-web-apps/overview"
                target="_blank"
              >
                Azure Static Web Apps
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <code>npm run qwik add cloudflare-pages</code>
            </td>
            <td>
              <a href="https://developers.cloudflare.com/pages" target="_blank">
                Cloudflare Pages Server
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <code>npm run qwik add express</code>
            </td>
            <td>
              <a href="https://expressjs.com/" target="_blank">
                Nodejs Express Server
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <code>npm run qwik add netlify-edge</code>
            </td>
            <td>
              <a href="https://docs.netlify.com/" target="_blank">
                Netlify Edge Functions
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <code>npm run qwik add static</code>
            </td>
            <td>
              <a
                href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
                target="_blank"
              >
                Static Site Generation (SSG)
              </a>
            </td>
          </tr>
        </table>

        <h2>Community</h2>

        <ul>
          <li>
            <span>Questions or just want to say hi? </span>
            <a href="https://qwik.builder.io/chat" target="_blank">
              Chat on discord!
            </a>
          </li>
          <li>
            <span>Follow </span>
            <a href="https://twitter.com/QwikDev" target="_blank">
              @QwikDev
            </a>
            <span> on Twitter</span>
          </li>
          <li>
            <span>Open issues and contribute on </span>
            <a href="https://github.com/BuilderIO/qwik" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <span>Watch </span>
            <a href="https://qwik.builder.io/media/" target="_blank">
              Presentations, Podcasts, Videos, etc.
            </a>
          </li>
        </ul>
        <Link class="mindblow" href="/flower/">
          Blow my mind 🤯
        </Link>
      </div> */}

      <h1 onClick$={$(() => plus())}>hey there</h1>
      <Motion client:load data={store.count} />
      <Try data={store} />
    </>
  );
});

export const high = (event?: any) => {
  console.log("finnaly it works");
  alert("a");
};

export const real = function () {
  console.log("real");
};

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
