import type { SVGProps } from "react";

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.78 5.47001C11.9205 5.61064 11.9994 5.80126 11.9994 6.00001C11.9994 6.19876 11.9205 6.38939 11.78 6.53001L8.31001 10L11.78 13.47C11.9206 13.6106 11.9995 13.8012 11.9995 14C11.9995 14.1988 11.9206 14.3894 11.78 14.53C11.6394 14.6706 11.4488 14.7495 11.25 14.7495C11.0512 14.7495 10.8606 14.6706 10.72 14.53L6.72001 10.53C6.57956 10.3894 6.50067 10.1988 6.50067 10C6.50067 9.80126 6.57956 9.61064 6.72001 9.47001L10.72 5.47001C10.8606 5.32956 11.0513 5.25067 11.25 5.25067C11.4488 5.25067 11.6394 5.32956 11.78 5.47001Z"
        fill={props.fill || "#4A4A4A"}
      />
    </svg>
  );
}
