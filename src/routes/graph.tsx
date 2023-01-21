import React from "react";
import {
  $,
  PropFunction,
  Resource,
  component$,
  useStore,
} from "@builder.io/qwik";
import {
  RequestHandler,
  useEndpoint,
  useLocation,
} from "@builder.io/qwik-city";



export const Graph = component$(({info}: any) => {

const data = [0,1,2]



const all = info.info.data;
logger(all)




  return (
    <>
      <div>graph</div>

      <br />

      <h3>{data}</h3>

      <br />


{all.map((item: any) => (<h3>{item.attributes.slug}</h3> ) )}





    </>
  );
});

export const logger = (data: any) => {
  console.log("there you go", data);
};

//   https://sea-lion-app-ggqop.ondigitalocean.app/api/services

// export const onGet: RequestHandler<any> = async () => {
//     // put your DB access here, we are hard coding a response for simplicity.
// // use fetch to get data from a database

// const response = await fetch('https://sea-lion-app-ggqop.ondigitalocean.app/api/services')
// const info = await response.json()

// const data = info.data
// console.log(data.data)

//     return {
//       data
//     };
//   };
