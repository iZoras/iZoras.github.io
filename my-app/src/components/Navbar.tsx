import * as React from "react";
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Catalog</Link>
        </li>       
        <li>
          <Link to="/product-card">Products</Link>
        </li>
      </ul>
    </nav> 
  );
}

export default Navbar;
