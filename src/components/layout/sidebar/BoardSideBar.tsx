"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Icon from "@/others/Icon";
import { Menu } from "./SideBarMenu";
import { getCookie } from "cookies-next";
import { LOGIN_ROLE } from "@/config/constant";

type Props = {
  showBar: boolean;
  handleLinkClick?: () => void;
};

const BoardSideBar: React.FC<Props> = ({ showBar, handleLinkClick }) => {
  const [loginRole, setLoginRole] = useState<string>('')
  const pathname = usePathname();
  const projectId = pathname.split("/")[3]; 
  
  const filteredMenu = Menu.filter((menu) => {
    if (
      (menu.name === "Reports" || menu.name === "Settings") &&
      loginRole === "Team Member"
    ) {
      return false;
    }
    return true;
  });

  const updatedMenu = filteredMenu.map((menu) => ({
    ...menu,
    href: menu.href.replace("{id}", projectId),
  }));

   useEffect(() => {
      const role = getCookie(LOGIN_ROLE) as string
      setLoginRole(role)
    }, [])
  
  return (
    <div className={`sidebar-board shadow p-2 mini-scrollbar ${showBar ? "open" : "closed"}`}>
      <ul className="navbar-nav overflow-auto mt-3">
        {updatedMenu.map((menu, index) => (
          <SidebarLinkGroup activeCondition={pathname === menu.href} key={index}>
            {(handleClick, open) => (
              <>
                <Link
                  href={menu.href}
                  className={`d-flex align-items-center gap-2 my-1 px-3 py-2 rounded text-decoration-none ${
                    pathname === menu.href ? "active bg-light text-dark" : "text-white"
                  }`}
                  onClick={(e) => {
                    showBar ? handleClick() : handleLinkClick?.();
                  }}
                >
                  <Icon name={menu.icon} />
                  {menu.name}
                  {menu.subMenu && (
                    <Icon name="chevron-down" className={`ms-auto ${open ? "rotate-180" : ""}`} />
                  )}
                </Link>
                {menu.subMenu && (
                  <div className={`overflow-hidden ${!open && "d-none"}`}>
                    <ul className="mb-4 mt-2 ps-4">
                      {menu.subMenu.map((subMenuItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subMenuItem.href.replace("{id}", projectId)} 
                            className={`d-flex align-items-center gap-2 px-3 py-1 text-dark rounded ${
                              pathname === subMenuItem.href ? "bg-secondary text-white" : "hover:bg-light"
                            }`}
                          >
                            <Icon name={subMenuItem?.icon} />
                            {subMenuItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </SidebarLinkGroup>
        ))}
      </ul>
    </div>
  );
};

export default BoardSideBar;