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
import { usePathname } from "next/navigation";
import Login from "./Login";
import Modal from "./Modal";
import SignUp from "./SignUp";

export default function Header2({modal, setModal}: {
  modal: string | null;
  setModal: any;
}) {
  const [logged, setLogged] = useState<boolean>(true);
  const [active, setActive] = useState(false);
  const [headerMob, setHeaderMob] = useState(false);
  const wrapper = useRef<any>(null);
  
  useEffect(() => {
    const windowClick = (e: MouseEvent) => {
      if (!wrapper.current.contains(e.target)) setActive(false);
    };

    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  const pathname = usePathname();
  useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <>
      <header
        className={"header2 " + (headerMob ? "active" : "")}
        ref={wrapper}
        id="header2"
      >
        <div className="auto__container">
          <div className="header2__inner">
            <div className="header2__inner-row">
              <Link
                href="/"
                className="header2__inner-logo"
                onClick={() => setActive(false)}
              >
                <img src="/images/logo.png" alt="" />
              </Link>
              <Link
                href="/"
                className={
                  "header2__inner-link " + (pathname === "/" ? "active" : "")
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
                    "header2__inner-link pc " +
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
                className="header2__inner-link insta  "
                onClick={() => setActive(false)}
              >
                {instagramIcon}
                Give Feedback
              </Link>
              {logged ? (
                <Link
                  href="/profile"
                  className={
                    "header2__inner-link mob " +
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
                  className="header2__inner-link mob "
                  onClick={() => setModal("login")}
                >
                  {userSolid}
                  Profile
                </button>
              )}
            </div>
            <div className="header2__inner-row">
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
                          onClick={() => setLogged(!logged)}
                        >
                          {logOutIcon} Log out{" "}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </div>
            <div className="header2__inner-shape">
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
