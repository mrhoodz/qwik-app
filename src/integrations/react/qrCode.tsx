/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useQRCode } from "next-qrcode";
import React from "react";

export const QrCode = qwikify$(({ data }: any) => {
  const { Canvas } = useQRCode();
  let info = "12";

  return (
    <>
      <h1>Qr code for :  {data} </h1>

      <Canvas
        text={`${data}`}
        options={{
          level: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#010599FF",
            light: "#FFBF60FF",
          },
        }}
      />
    </>
  );
});
