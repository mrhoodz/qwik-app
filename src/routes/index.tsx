import {
  $,
  PropFunction,
  component$,
  useStore,
  useClientEffect$,
  createContext,
  useContextProvider,
  useContext,
  Resource,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useContent,
  useEndpoint,
} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Motion } from "~/integrations/react/motion";
import { Test } from "~/integrations/react/test";
import { Try } from "./try";
import { Graph } from "./graph";
import { GraphQLClient, gql } from "graphql-request";
import axios from "axios";
import { QwikHead } from "~/components/qwiks-comps/header";
import { QrCode } from "~/integrations/react/qrCode";

interface ProductData {
  skuId: string;
  price: number;
  description: string;
}

// export const onGet: RequestHandler<any> = async ({ params }) => {
//   const endpoint = "https://sea-lion-app-ggqop.ondigitalocean.app/graphql";

//   // qwikGraphQLWithFetch();

//   const x = await qwikGraphQLWithFetch();

//   // $booter(great());
//   // $booter(x);

//   // const infomation = qwikGraphQLWithFetch();

//   return {
//     x,
//   };
// };

export const MyContext = createContext("my-context");

export default component$(() => {
  const productData = useEndpoint<any>();
  // grab()

  const bear = useStore({ value: 12 });

  useContextProvider(MyContext, bear);

  // x()

  // this task will be called exactly once, either on the server or on the browser
  // useTask$(({ track }) => {
  //   track(() => bear.value);
  //   // will run when the component mounts and every time "store.count" changes
  // });

  return (
    <>
      <h2> hey there</h2>
      <Child />

      <button
        onClick$={() => {
          bear.value++;
        }}
      >
        click me
      </button>
    </>
  );
});

// export const logger = (data: any) => {
//   console.log("data", data.info.data);
// };

export const Child = component$(() => {
  const state: any = useContext(MyContext);

  return <>lm the child and the context is {state.value} </>;
});

export const $booter = (response: any) => {
  console.log("booting", response);
};

// export const x =   ()  => {

//   useTask$(() => {
//     console.log('component mounted');
//   })

// } ;
// export const qwikGraphQLWithFetch = async () => {
//   //sealion endpoint

//   const endpoint = "https://sea-lion-app-ggqop.ondigitalocean.app/graphql";
//   const headers = {
//     "content-type": "application/json",
//     // "Authorization": "<token>"
//   };
//   const graphqlQuery = {
//     query: `query {
//         services {
//           data {
//             attributes {
//              slug
//               Name
//               Task{
//                   Task
//               }
//             }
//           }
//         }
//       }
//       `,
//     // "variables": {}  !!! if any
//   };

//   const options = {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(graphqlQuery),
//   };

//   const response = await fetch(endpoint, options);
//   const data = await response.json();

//   const graphData = data.data;

//   console.log(data.data);
//   console.log(data.errors);

//   return graphData;
// };

export const great = async () => {
  return "hey there";
};

export const head: DocumentHead<any> = ({ data }) => {
  const title = "data";

  return {
    title: "zita",
  };
};

{
  /* <Resource
        value={productData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(product) => {
          // const x  =

          logger(product);
          const all = product.info.data;

          return (
            <>
              {all.map((item: any) => {
                // logger(item)

                const all = item.id.attributes;

                return (
                  <>
                    <h1>Product: {item.attributes.Name}</h1>
                  </>
                );
              })}

              <Graph info={product} />
            </>
          );
        }}
      /> */
}
