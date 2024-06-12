import React from "react";
import styles from "./RightDiv.module.css";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const RightDiv = () => {
  return (
    <div className={styles.rightDiv}>
      <div>
        <div className={styles.iconWrapper}>
          <FaRegHeart className={styles.icon} />
        </div>
        <hr />
        <div className={styles.iconWrapper}>
          <BsHandbag className={styles.icon} />
          <span className={styles.badge}>4</span>
        </div>
        <hr />
      </div>
      <div className={styles.welcome}>
        <span style={{ display: "flex", flexDirection: "column" }}>
          <span className={styles.firstUsername}>Hi, Welcome</span>
          <span className={styles.username}>Albert Edison</span>
        </span>
        <IoIosArrowDown className={styles.dropdownIcon} />
      </div>
    </div>
  );
};

export default RightDiv;
