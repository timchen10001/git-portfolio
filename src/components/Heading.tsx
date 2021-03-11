import "../styles/Heading.css";
import React from "react";
import { IconGroup } from "./IconGroup";

interface HeadingProps {}

export const Heading: React.FC<HeadingProps> = () => {
  return (
    <div className="parallax heading">
      <h1 className="heading__title">
        Hi ! I'm Tim Chen. <br/>
        A lover of codes, coffee, and staying up all night.
      </h1>
      <IconGroup top={"32%"}/>
    </div>
  );
};
