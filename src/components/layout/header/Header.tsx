'use client'

import Image from "next/image";
import React from "react";
import bar from '../../../../public/images/bar.svg'
import Menu from "./Menu";

interface Props {
  toggleSideBar: () => void;
}

const Header: React.FC<Props> = ({ toggleSideBar }) => {

  return (
    <nav className="navbar position-sticky top-0 w-100">
      <div className="navbar-container w-100 d-flex align-items-center">
        <div className="mx-1 d-lg-none toggle" onClick={toggleSideBar}><Image src={bar} alt="" /></div>
        <div className="row m-0 align-items-center w-100 px-3">
          <div className="col-6 p-0">
            <Menu />
          </div>
          <div className="col-6 p-0 bg-danger">
            ewhhhwjb
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
