import { transcode } from "buffer";
import React, { useState } from "react";

export const InteractivePoster = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null,
  );

  return (
    <img
      src="/posters/6.webp"
      onMouseMove={(e) => {
        // @ts-ignore
        const box: ClientRect = e.target.getBoundingClientRect();
        let constrain = 20;
        let calcX = -(e.clientY - box.y - box.height / 2) / constrain;
        let calcY = (e.clientX - box.x - box.width / 2) / constrain;
        setMousePos({ x: calcX, y: calcY });
      }}
      style={{
        transform: mousePos
          ? `perspective(2400px) rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg)`
          : undefined,
        maxHeight: "calc(100vh - 144px)",
        position: "sticky",
        top: "72px",
      }}
    />
  );
};
