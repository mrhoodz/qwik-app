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

interface ProductData {
  skuId: string;
  price: number;
  description: string;
}

export const onGet: RequestHandler<any> = async ({ params }) => {
  // put your DB access here (hard coding data for simplicity)

  //use fetch api to get data from sealion api
  const response = await fetch(
    "https://sea-lion-app-ggqop.ondigitalocean.app/api/services"
  );
  const info = await response.json();

  return {
    info,
  };
};

export default component$(() => {
  const productData = useEndpoint<any>();
  return (
    <>
      <Resource
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
      />
      hey bruh
    </>
  );
});

export const logger = (data: any) => {
  console.log("data", data.info.data);
};

export const start = async (data: any) => {
  // console.log("egg man")

  alert("alert says" + data);
  // head.title = "23"
};

export const header = () => {
  // const data = "hey you";

  // const data = useContext(CTX);

  const info = "gave up";

  return info;
};

export const head: DocumentHead<any> = ({ data }) => {
  const title = "data";

  return {
    title: data.info.data[2].attributes.Name,
  };
};
