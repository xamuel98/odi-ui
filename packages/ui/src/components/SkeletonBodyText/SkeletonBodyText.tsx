import React from "react";
import type { SkeletonBodyTextProps } from "./SkeletonBodyText.type.js";
import {
  skeletonBodyTextVariants,
  skeletonBodyTextLineVariants,
} from "./SkeletonBodyText.variants.js";
import "./SkeletonBodyText.css";

export const SkeletonBodyText = ({ lines = 3 }: SkeletonBodyTextProps) => {
  const lineArray = Array.from({ length: lines }, (_, i) => i);

  return (
    <div className={skeletonBodyTextVariants()}>
      {lineArray.map((key) => (
        <div key={key} className={skeletonBodyTextLineVariants()} />
      ))}
    </div>
  );
};
