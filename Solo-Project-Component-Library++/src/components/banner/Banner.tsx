import React from "react";
import "./Banner.css";
import successIcon from "./icon/success.png";
import warningIcon from "./icon/warning.png";

import errorIcon from "./icon/error.png";
import neutralIcon from "./icon/neutral.png";

type BannerProps = {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error" | "neutral";
};

export default function Banner({ children, variant = "success" }: BannerProps) {
  const icons = {
    error: errorIcon,
    neutral: neutralIcon,
    success: successIcon,
    warning: warningIcon,
  };
  return (
    <div className={`banner ${variant}`}>
      <div>
        <img src={icons[variant]} alt="success" />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
