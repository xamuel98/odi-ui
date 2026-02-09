import React from "react";
import type { SkeletonThumbnailProps } from "./SkeletonThumbnail.type.js";
import { skeletonThumbnailVariants } from "./SkeletonThumbnail.variants.js";
import "./SkeletonThumbnail.css";

export const SkeletonThumbnail = ({
  size = "medium",
}: SkeletonThumbnailProps) => {
  return <div className={skeletonThumbnailVariants({ size })} />;
};
