import "../styles/Footer.css";
import React from "react";
import { IconGroup } from "./IconGroup";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="parallax footer">
      <h1 className="footer__title">Thanks your watching !</h1>
      <IconGroup top={"36%"} />
    </div>
  );
};
