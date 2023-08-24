"use client";

import React, { useState } from "react";
import styles from "./home.module.scss";

import { useNavigate } from "react-router-dom";
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
      <div className={styles["container"]}>
        {!isShow && !userId ? (
          <>
            <div className={styles["header"]}>
              <span className={styles["logo"]}>ChatGPT</span>
              <span className={styles["sign"]}>Log In </span>
            </div>
            <div className={styles["body"]}>
              <button onClick={handleClick}>Get Started ChatGPT</button>
              <div className={styles["body-01"]}>
                <span className={styles["text-@1"]}>
                  {" "}
                  Custom ChatGPT for your data
                </span>
                <span className={styles["text-02"]}>
                  Just connect your data sources and get a ChatGPT-like chatbot
                  for your data. Then add it as a widget to your website or chat
                  with it through our integrations or API.
                </span>
              </div>
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
