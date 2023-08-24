"use client";

import React from "react";
import styles from "./home.module.scss";

import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <span className={styles["logo"]}>ChatGPT</span>
          <span className={styles["sign"]}>Log In </span>
        </div>
        <div className={styles["body"]}>
          <button>Get Started ChatGPT</button>
          <div className={styles["body-01"]}>
            <span className={styles["text-@1"]}>
              {" "}
              Custom ChatGPT for your data
            </span>
            <span className={styles["text-02"]}>
              Just connect your data sources and get a ChatGPT-like chatbot for
              your data. Then add it as a widget to your website or chat with it
              through our integrations or API.
            </span>
          </div>
          <div className={styles["body-02"]}>
            {" "}
            <img src="./cover.png" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
