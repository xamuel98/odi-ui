import React from "react";
import type { SkeletonDisplayTextProps } from "./SkeletonDisplayText.type.js";
import { skeletonDisplayTextVariants } from "./SkeletonDisplayText.variants.js";
import "./SkeletonDisplayText.css";

export const SkeletonDisplayText = ({
  size = "medium",
  maxWidth = "120px",
}: SkeletonDisplayTextProps) => {
  return (
    <div
      className={skeletonDisplayTextVariants({ size })}
      style={{ maxWidth }}
    />
  );
};
