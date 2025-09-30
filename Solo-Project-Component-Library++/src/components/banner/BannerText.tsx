import React from "react";

type BannerTextProps = {
  children: React.ReactNode;
};
export default function BannerText({ children }: BannerTextProps) {
  return <div className="text">{children}</div>;
}
