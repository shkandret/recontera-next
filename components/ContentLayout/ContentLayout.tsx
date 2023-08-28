"use client";

import React, { useRef, useEffect, useState } from "react";

interface ContentLayoutProps {
  children: React.ReactNode;
  horizontalSliderData: any;
}

let scrollLeft = 0;
let isStart = false;
let isEnd = false;

const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  horizontalSliderData,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleWheel = (event: WheelEvent): void => {
      if (horizontalSliderData) {
        const deltaY = event.deltaY;
        const scrollAmount = deltaY > 0 ? 600 : -600;
        scrollLeft = Math.max(
          0,
          Math.min(
            horizontalSliderData.current?.scrollWidth -
              horizontalSliderData.current?.clientWidth,
            scrollLeft + scrollAmount
          )
        );
        isStart = scrollLeft === 0;
        isEnd =
          scrollLeft >=
          horizontalSliderData.current?.scrollWidth -
            horizontalSliderData.current?.clientWidth;

        horizontalSliderData.current?.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    };

    containerRef.current?.addEventListener("wheel", handleWheel);

    return () => {
      containerRef.current?.addEventListener("wheel", handleWheel);
    };
  }, [horizontalSliderData]);

  return <div ref={containerRef}>{children}</div>;
};

export default ContentLayout;
