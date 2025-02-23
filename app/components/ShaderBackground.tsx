import { Shader } from "react-shaders";

// iTime iReso
const shader = `
float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}
    
void mainImage(out vec4 O,in vec2 I) {
  I=.5-(I/iResolution.xy);
  vec2 uv = I;
  vec3 col=.5+vec3(I,.5*sin(iTime));
  I*=vec2(1.,iResolution.y/iResolution.x);
  float z=.5*sin((dot(I,I)+iTime*5e-2)/.01);
  float s = smoothstep(${0.5 + (Math.random() - 0.5) * 0.25}, ${Math.random()}, mod((uv.y + iTime * ${(Math.random() - 0.5) * 0.2}) * ${10 + (Math.random() - 0.5) * 0.4}, 1.));
  s *= smoothstep(${0.5 + (Math.random() - 0.5) * 0.25}, 0.58, mod((uv.x + -iTime * ${Math.random()} * uv.y * 0.3) * 5000., 1.));
  s += 0.03125;
  O=vec4(vec3(s * vec3(0.5 * uv.x * ${Math.random() * 0.3}, ${0.2 + Math.random() * 0.5}, 0.2 +  ${0.4 + Math.random() * 0.8} * uv.y)), 1.0);
}
`;

export const ShaderBackground = () => {
  return (
    <div className="w-screen h-screen fixed">
      <Shader fs={shader} />
    </div>
  );
};
