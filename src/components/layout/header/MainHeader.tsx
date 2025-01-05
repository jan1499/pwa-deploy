'use client'

import { LOGIN_USER } from "@/config/constant";
import { IUser } from "@/interface/IUser";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import dp2 from '../../../../public/images/dp2.svg';
import logo from '../../../../public/images/logo.svg';


const MainHeader = () => {
  // const dispatch = useAppDispatch();
  const router = useRouter()
  const profileRef = useRef<HTMLDivElement>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [loginUser, setLoginUser] = useState<IUser | null>(null);

  useEffect(() => {
    const userCookie = getCookie(LOGIN_USER);
    if (userCookie) {
      try {
        const user = JSON.parse(userCookie as string);
        setLoginUser(user);
      } catch (error) {
        console.error("Failed to parse user data from cookie", error);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    router.push(`/`)
    // try {
    //   await dispatch(logout())
    // } catch (error) {
    //   console.error("Logout failed:", error);
    // }
  }


  return (
    <nav className="navbar position-sticky top-0 w-100 shadow-sm">
      <div className="navbar-container w-100 d-flex align-items-center px-3">
        <div className="pe-4">
          <Link href="/" className="navbar-brand p-0 m-0 d-flex align-items-center">
            <Image src={logo} alt="" width={40} height={40} className="p-0 m-0" /> TaskFlow
          </Link>
        </div>
        <div className="row m-0 align-items-center w-100">
          <div className="col-8 col-lg-6 p-0">
            {/* <Menu /> */}
          </div>
          <div className="col-4 col-lg-6 p-0 d-flex justify-content-end align-items-center">
            <div className="d-flex justify-content-end align-items-center gap-3">
              <div className="text-end">
                <div className="text-grey fs-13">John Michal Jackson
                </div>
                <div className="text-muted fs-12">johnmichal@gmail.com
                  <span className="text-muted fs-10 ms-1">(Admin)</span>
                </div>
              </div>
              <div className="avatar" ref={profileRef} onClick={() => setIsProfileOpen(prev => !prev)}>
                <Image src={dp2} alt={''} width={30} height={30} className='rounded-circle ' />
              </div>
            </div>
            {isProfileOpen && (
              <div className="profile-menu-dropdown position-absolute shadow">
                <nav className="bg-white">
                  <ul className="list-unstyled m-0 p-3 px-2  text-start">
                    <li className="rounded px-3 py-1 pointer">
                      <div className="text-dark d-block " onClick={handleLogout}>Logout</div>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
