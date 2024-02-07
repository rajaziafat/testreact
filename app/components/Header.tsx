"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  homeIcon,
  instagramIcon,
  logOutIcon,
  plusIcon,
  userIcon,
  userSolid,
} from "./SVG";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Login from "./Login";
import Modal from "./Modal";
import SignUp from "./SignUp";
import Cookies from "js-cookie";
import useAuth from "@/lib/hooks/useAuth";
import useGA4 from "@/lib/hooks/useGA4";

export default function Header({ isLoggedIn }: { isLoggedIn: boolean}) {
  useGA4();
  const router = useRouter()  
  const [modal, setModal] = useState<string | null>(null);
  const [logged, setLogged] = useState<boolean>(isLoggedIn);
  const [active, setActive] = useState(false);
  const [headerMob, setHeaderMob] = useState(false);
  const wrapper = useRef<any>(null);
  const {logout} = useAuth({setLogged});

  useEffect(() => {
    const windowClick = (e: MouseEvent) => {
      if (!wrapper.current.contains(e.target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  const pathname = usePathname();
  const authCookie = Cookies.get('FASHIONSOCIAL-AUTH');

  useEffect(() => {
    setActive(false);
    if(!authCookie) setLogged(false);
  }, [pathname]);

  useEffect(() => {
    if(!logged) return router.replace("/");
  }, [logged])

  return (
    <>
      <header
        className={"header " + (headerMob ? "active" : "")}
        ref={wrapper}
        id="header"
      >
        <div className="auto__container">
          <div className="header__inner">
            <div className="header__inner-row">
              <Link
                href="/"
                className="header__inner-logo"
                onClick={() => setActive(false)}
              >
                <img src="/images/logo.png" alt="" />
              </Link>
              <Link
                href="/"
                className={
                  "header__inner-link " + (pathname === "/" ? "active" : "")
                }
                onClick={() => setActive(false)}
              >
                {homeIcon}
                Home
              </Link>
              {logged ? (
                ""
              ) : (
                <Link
                  href="/join"
                  className={
                    "header__inner-link pc " +
                    (pathname === "/join" ? "active" : "")
                  }
                  onClick={() => setActive(false)}
                >
                  Join
                </Link>
              )}
              <Link
                target="_blank"
                href="https://www.instagram.com/nicoinblack"
                className="header__inner-link insta  "
                onClick={() => setActive(false)}
              >
                {instagramIcon}
                Give Feedback
              </Link>
              {logged ? (
                <Link
                  href="/profile"
                  className={
                    "header__inner-link mob " +
                    (pathname === "/profile" ? "active" : "")
                  }
                  onClick={() => setActive(false)}
                >
                  {userSolid}
                  Profile
                </Link>
              ) : (
                <button
                  type="button"
                  className="header__inner-link mob "
                  onClick={() => setModal("login")}
                >
                  {userSolid}
                  Profile
                </button>
              )}
            </div>
            <div className="header__inner-row">
              {logged ? (
                <Link
                  href="/addProduct"
                  className="button light"
                  onClick={() => setActive(false)}
                >
                  {plusIcon} <span> Add Product & Person</span>
                </Link>
              ) : (
                <button
                  type="button"
                  className="button light"
                  onClick={() => setModal("login")}
                >
                  {plusIcon} <span> Add Product & Person</span>
                </button>
              )}
              <div className="userPop">
                <div
                  className="userPop__btn"
                  onClick={() => {
                    setActive(!active);
                    if (!logged) {
                      setModal("login");
                    }
                  }}
                >
                  {userIcon}
                </div>
                {logged && (
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0 }}
                        className="userPop__menu"
                      >
                        <Link href="/profile" onClick={() => setActive(false)}>
                          {userIcon} profile{" "}
                        </Link>
                        <hr />

                        <Link
                          target="_blank"
                          href="https://www.instagram.com/nicoinblack"
                          onClick={() => setActive(false)}
                        >
                          {instagramIcon} Follow the Founder{" "}
                        </Link>
                        <hr />
                        <button
                          type="button"
                          onClick={() => {
                            logout();
                            setLogged(!logged);
                          }}
                        >
                          {logOutIcon} Log out{" "}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </div>
            <div className="header__inner-shape">
              <img src="/images/shape.png" alt="shape" />
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {modal === "login" && (
          <Modal modal={modal} setModal={setModal}>
            <Login setLogged={setLogged} modal={modal} setModal={setModal} />
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modal === "signup" && (
          <Modal modal={modal} setModal={setModal}>
            <SignUp setLogged={setLogged} modal={modal} setModal={setModal} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
