"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { Shader } from "react-shaders";
import { GlobalContext } from "../state/GlobalState";

const shader = `
#define PI 3.14159

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

float sameSide(vec3 a, vec3 b, vec3 p1, vec3 p2) {
    vec3 test1 = cross(b - a, p1 - a);
    vec3 test2 = cross(b - a, p2 -a);
    return sign(test1.z * test2.z);
}

bool pointInTriangle(vec2 p1, vec2 p2, vec2 p3, vec2 uv) {
    float a = sameSide(vec3(p1, 0.0), vec3(p2, 0.0), vec3(uv, 0.0), vec3(p3, 0.0));
    float b = sameSide(vec3(p2, 0.0), vec3(p3, 0.0), vec3(uv, 0.0), vec3(p1, 0.0));
    float c = sameSide(vec3(p3, 0.0), vec3(p1, 0.0), vec3(uv, 0.0), vec3(p2, 0.0));
    
    return (a + b + c) == 3.0;
}

float pointOnGrid(vec2 uv) {
  //return 1.0;
  return min(step(mod(uv.x * 66.0 + uv.y * 5.0, 1.0), 0.1) + step(mod(uv.x * 100.0 + -uv.y * 11.3, 1.0), 0.05), 1.0);
}

vec3 pattern(vec2 uv, float time) {
  return vec3(1.0, 0.0, 0.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    
    float x = uv.x;
    
    float y = 2.0 * x;
    
    float strength = float(pointInTriangle(p1, p2, p3, uv));
    strength *= pointOnGrid(uv);
    vec3 pat = pattern(uv, iTime);

    // Output to screen
    fragColor = vec4(pat * strength,1.0);
}
`;

const DEFAULT_TRIANGLE_COORDS = [
  [0, 0],
  [0, 0],
  [0, 0],
];

export default () => {
  const { shaderHighlightedElement } = useContext(GlobalContext);
  const [canvasContainer, setCanvasContainer] = useState<HTMLDivElement | null>(
    null,
  );
  const [triangleCoords, setTriangleCoords] = useState<number[][]>(
    DEFAULT_TRIANGLE_COORDS,
  );

  const getCoords = useCallback(() => {
    if (shaderHighlightedElement && canvasContainer) {
      const canvasRect = canvasContainer.getBoundingClientRect();
      const elemRect = shaderHighlightedElement.getBoundingClientRect();
      console.log(elemRect);

      setTriangleCoords([
        [0, 1 - (elemRect.y - canvasRect.top - 40) / canvasRect.height],
        [
          1,
          1 -
            (elemRect.y - canvasRect.top + elemRect.height / 2) /
              canvasRect.height,
        ],
        [
          0,
          1 -
            (elemRect.y + elemRect.height + 40 - canvasRect.top) /
              canvasRect.height,
        ],
      ]);
    } else {
      setTriangleCoords(DEFAULT_TRIANGLE_COORDS);
    }
  }, [shaderHighlightedElement, canvasContainer]);

  useEffect(() => {
    window.addEventListener("scroll", getCoords);
    getCoords();

    return () => {
      window.removeEventListener("scroll", getCoords);
    };
  }, [getCoords]);

  return (
    <div
      className="w-screen h-screen top-0 left-0 fixed z-[-1]"
      ref={(elem) => setCanvasContainer(elem)}
    >
      <Shader
        fs={shader}
        uniforms={{
          p1: { type: "2f", value: triangleCoords[0] },
          p2: { type: "2f", value: triangleCoords[1] },
          p3: { type: "2f", value: triangleCoords[2] },
        }}
      />
    </div>
  );
};
