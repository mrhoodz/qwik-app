/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useQRCode } from "next-qrcode";

export const QrCode = qwikify$(({ data }: any) => {
  const { Canvas } = useQRCode();
  const info = "12";

  return (
    <>
      <h1>Qr code for : {info} </h1>

      <Canvas
        text={`${info}`}
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
