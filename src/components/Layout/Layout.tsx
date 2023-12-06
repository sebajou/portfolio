import React, { FC } from 'react';
import { Outlet, Link } from "react-router-dom";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>

  <Outlet />
</>
);

export default Layout;
