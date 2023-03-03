import Assignment6 from "./a6";
import {Link}
  from "react-router-dom";

function Labs() {
  return(
      <div>
        <Link to="/">Lab</Link> |
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter">Tuiter</Link>
        <Assignment6/>
      </div>
  );
}
export default Labs;