
import React, { forwardRef } from "react";
import { LucideProps } from "lucide-react";

export const Discord = forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <path d="M9 12h6" />
      <path d="M6 10.5V9c0-1 .1-2 .5-2.5S8 5 9 5h6c1 0 1.6.2 2 .5s.5 1.5.5 2.5v6c0 1-.1 2-.5 2.5s-1 .5-2 .5H9c-1 0-1.6-.2-2-.5s-.5-1.5-.5-2.5V15" />
      <path d="M9.2 7.2c-1 .2-1.7.2-2.2.7-1.7 1.8-1.7 5.7-1 7.6.7 1.8 2.4 2.5 3 2.5 1 0 2-.8 3-4" />
      <path d="M16 18c.5 0 1.5-.8 2.4-2.5 1-1.8 1-5.7-1-7.5-.6-.7-1.7-.5-2.4-.7" />
    </svg>
  );
});

Discord.displayName = "Discord";

export const Fiverr = forwardRef<SVGSVGElement, LucideProps>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={ref}
      {...props}
    >
      <path d="M16 4H9a6 6 0 1 0 0 12h7v4" />
      <path d="M19 16H5.5" />
      <path d="M19 12h-2" />
      <path d="M13 8H5.5" />
      <circle cx="9" cy="10" r="2" />
    </svg>
  );
});

Fiverr.displayName = "Fiverr";
