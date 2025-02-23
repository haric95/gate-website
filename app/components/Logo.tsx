import { PropsWithChildren, SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

export const Logo = (props: LogoProps) => {
  return (
    <svg
      style={{ transition: "all 500ms" }}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1154 478"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <polygon
          id="E_2_"
          className="st0"
          points="1148.08,391.28 856.85,371.11 776.37,177.85 1058,262.3 851.9,241.65 1100.44,323.02 
		868.77,299.82 	"
        />
        <polygon
          id="T_2_"
          className="st0"
          points="991.59,58.51 873.01,141.88 754.92,159.34 748.56,466.95 687.8,350.36 732.98,162.6 
		430.39,207.34 742.13,124.69 756.91,63.21 755.74,121.05 	"
        />
        <polygon
          id="A_1_"
          className="st0"
          points="488.22,451.56 587.15,98.5 666.59,376.54 570.58,417.08 546.35,332.57 516.32,439.77 	"
        />
        <polygon
          id="G_2_"
          className="st0"
          points="342.94,297.03 477.96,287 363.46,278.92 	"
        />
        <polygon
          id="G_1_"
          className="st0"
          points="445.36,440.57 441,439.26 9.54,319.12 815.02,9.96 166.88,312.18 380.89,375.32 
		439.98,286.68 	"
        />
      </g>
    </svg>
  );
};
