import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

type Props = {};

export const Top: React.VFC<Props> = (props) => {
  return (
    <div className="p-top">
      <h1>TRPG 10th site</h1>
      <Link to="characters">Characters</Link>
    </div>
  );
};
