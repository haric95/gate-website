"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Shader } from "react-shaders";
import { useComponentSize } from "../hooks/useComponentSize";
import { useIsMobile } from "../hooks/useIsMobile";
import { Logo } from "./Logo";
const LetterPositioning = dynamic(() => import("./LetterPositioning"), {
  ssr: false,
});

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

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const [logoHovered, setLogoHoverer] = useState(false);

  const { width, height } = useComponentSize(headerRef);

  const pathname = usePathname();

  const { isMobile } = useIsMobile();

  return (
    <header className="h-36 relative w-full bg-black" ref={headerRef}>
      <div>
        <div className="w-full h-full absolute mt-0">
          <Shader fs={shader} />
        </div>
        <svg className="absolute" width="100%" height="100%" fill="transparent">
          <g>
            <path
              d={`M 0 0 L ${width} 80 L ${width} ${height - 10} L 0 ${height} Z`}
            />
            <path
              d={`M ${isMobile ? 20 : 0} 0 L ${width} 0 L ${width} ${isMobile ? 100 : 80} Z`}
              fill="#080808"
            />
            <path
              d={`M 0 ${height} L ${width} ${height - (isMobile ? 10 : 40)} L ${width} ${height} Z`}
              fill="#080808"
            />
          </g>
        </svg>
        <Link
          href="/"
          className="absolute"
          onMouseEnter={() => {
            setLogoHoverer(true);
          }}
          onMouseLeave={() => {
            setLogoHoverer(false);
          }}
        >
          <div className="pointer-events-none">
            <Logo
              className={`md:h-32 h-32 md:pt-6 pt-10 md:pl-4 pl-2`}
              fill="black"
              stroke=""
              strokeWidth={6}
              filter={`drop-shadow(${logoHovered ? 10 : 3}px 5px 2px rgb(${logoHovered ? "20 20 20" : "20 20 20"} / ${logoHovered ? 1 : 0.2}))`}
              style={{
                transition: "all 500ms",
                transform: logoHovered ? "translateX(-2px)" : "",
                transitionDuration: "500ms",
              }}
            />
          </div>
        </Link>
      </div>
      <div className="absolute h-24 text-right text-white w-fit right-0">
        <ul className="flex justify-end text-[24px] md:mt-6 md:mr-4 mt-2 mr-2">
          <li className="mr-4">
            <Link
              href="/"
              className={`block strokeme green ${pathname === "/" && "active"} !bg-transparent`}
            >
              <h1>
                <LetterPositioning>Feed</LetterPositioning>
              </h1>
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className={`block strokeme green ${pathname === "/archive" && "active"} !bg-transparent`}
            >
              <h1>
                <LetterPositioning>Archive</LetterPositioning>
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
