import { LOGIN_ROLE } from "@/config/constant";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

const Menu: React.FC = () => {
  const [loginRole, setLoginRole] = useState<string>('')

  useEffect(() => {
    const role = getCookie(LOGIN_ROLE) as string
    setLoginRole(role)
  }, [])

  return (
    <ul className="header-nav d-flex flex-row">
      {/* <li className="nav-item">
        <Link href="/taskflow/your-work" className="nav-link">Your Work</Link>
      </li> */}
      {/* <li className="nav-item">
        <Link href="/taskflow/projects" className="nav-link">Projects</Link>
      </li>
      {loginRole !== "Team Member" && (
        <li className="nav-item">
          <Link href="/taskflow/boards" className="nav-link">Boards</Link>
        </li>
      )} */}

      {/* <li className="nav-item">
        <Link href="/taskflow/dashboards" className="nav-link">Dashboards</Link>
      </li>
      <li className="nav-item">
        <Link href="/taskflow/teams" className="nav-link">Teams</Link>
      </li> */}
    </ul>
  );
};

export default Menu;
