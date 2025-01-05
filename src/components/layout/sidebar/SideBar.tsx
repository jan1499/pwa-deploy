"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  showBar: boolean;
  handleLinkClick?: () => void;
};

const Sidebar: React.FC<Props> = ({ showBar, handleLinkClick }) => {
  const pathname = usePathname();

  const links = [
    { label: "PLANNING", isDisabled: true },
    { href: "/timeline", label: "Timeline" },
    { href: "/backlog", label: "Backlog" },
    { href: "/active-sprints", label: "Active Sprints" },
    { href: "/reports", label: "Reports" },
    { label: "DEVELOPMENT", isDisabled: true },
    { href: "/pages?t=all&p=1", label: "pages" },
    { href: "/notices?t=all", label: "notices" },
  ];

  const isActive = (pathname: any, link: string | any[]) => pathname === link || link.includes(pathname);

  return (
    <div className={`sidebar-default mini-scrollbar shadow-sm ${showBar ? "open" : "closed"}`}>
      <div className="switch-container d-flex align-items-center p-1 px-3 w-100">
        <div className="switch-ratio d-flex justify-content-center align-items-center rounded font-semibold">S</div>
        <div className="px-2 font-110 font-bold text-truncate switch-providers">Storyfeed</div>
      </div>
      <ul className="navbar-nav overflow-auto">
        {links.map((link, index) => {
          if (link.isDisabled) {
            return (
              <div key={index} className="disabled py-1 lh-lg pt-4 mx-2 px-3 rounded grey-1 font-80 font-normal">
                {link.label}
              </div>
            );
          }
          return (
            <Link key={index} href={link.href || ''} className="text-decoration-none text-dark lh-lg font-normal" onClick={handleLinkClick}>
              <li className={`py-1 lh-lg mx-2 px-3 rounded ${isActive(pathname, link.href || '') ? "font-bold" : "link"}`}>
                {link.label}
              </li>
            </Link>
          );
        })}
        
      </ul>
      <div className="position-absolute bottom-0 logo-container d-flex border-top d-flex align-items-center w-100">
        <div className="align-items-center d-flex justify-content-between px-3 w-100">
          <div className="align-items-center d-flex">
            You are in a company-managed project
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
