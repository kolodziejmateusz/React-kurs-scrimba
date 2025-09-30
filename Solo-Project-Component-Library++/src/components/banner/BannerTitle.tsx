import React from "react";

type BannerTitleProps = {
  children: React.ReactNode;
};
export default function BannerTitle({ children }: BannerTitleProps) {
  return <div className="title">{children}</div>;
}
