"use client";

import React, { useState } from "react";
import styles from "./landingpage.module.scss";

import { Home } from "./home";

import { useAuth } from "@clerk/nextjs";

export default function LandingPage() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(true);
  };
  return (
    <>
      <div className={styles["background"]}>
        {!isShow && !userId ? (
          <>
            <div className={styles["header"]}>
              <div className={styles["logo"]}>
                <img src="./favicon.ico" />
                <span>&nbsp;&nbsp;&nbsp;ChatGPT Next</span>
              </div>
              <span className={styles["sign"]} onClick={handleClick}>
                Log In →
              </span>
            </div>
            <div className={styles["body"]}>
              <div className={styles["body-01"]}>
                <span className={styles["text-01"]}>
                  {" "}
                  <b>Custom ChatGPT for </b>
                  <a className={styles["text-03"]}>your data</a>
                </span>
                <span className={styles["text-02"]}>
                  Just connect your data sources and get a ChatGPT-like chatbot
                  for your data.
                </span>
              </div>
              <button className={styles["button"]} onClick={handleClick}>
                Get Started
              </button>
              <div className={styles["body-02"]}>
                {" "}
                <img src="./cover.png" />
              </div>
            </div>
            <div></div>
          </>
        ) : (
          <>
            <Home />
          </>
        )}
      </div>
    </>
  );
}
