import "../styles/IconGroup.css";
import React from "react";

interface IconGroupProps {
  top: string;
}

export const IconGroup: React.FC<IconGroupProps> = ({ top }) => {
  return (
    <div className="icon__group" style={{ top }}>
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
  );
};
