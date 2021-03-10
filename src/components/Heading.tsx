import "../styles/Heading.css";
import React from "react";

interface HeadingProps {}

export const Heading: React.FC<HeadingProps> = ({}) => {
  return (
    <div className="parallax heading">
      <h1 className="heading__title">
        Hi ! I'm Tim Chen. <br/>
        A lover of codes, coffee, and staying up all night.
      </h1>
      <div className="icon__group">
        <a
          className="cakeresume__icon"
          aria-label="CakeResume"
          href="https://www.cakeresume.com/studentt369"
        >
          <img src="https://media.cakeresume.com/image/upload/s--_IPa2iFh--/c_pad,fl_png8,h_400,w_400/v1566814358/b4rcthbvywpj2caswc6v.png" />
        </a>
        <a
          className="github__icon"
          aria-label="GitHub"
          href="https://github.com/timchen10001"
        >
          <img src="https://image.flaticon.com/icons/png/512/25/25231.png" />
        </a>
      </div>
    </div>
  );
};
