import React from "react";
import type { SkeletonTabsProps } from "./SkeletonTabs.type.js";
import {
  skeletonTabsVariants,
  skeletonTabsItemVariants,
} from "./SkeletonTabs.variants.js";
import "./SkeletonTabs.css";

export const SkeletonTabs = ({
  count = 2,
  fitted = false,
}: SkeletonTabsProps) => {
  const tabs = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={skeletonTabsVariants({ fitted })}>
      {tabs.map((key) => (
        <div key={key} className={skeletonTabsItemVariants({ fitted })} />
      ))}
    </div>
  );
};
