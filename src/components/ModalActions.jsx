import React from "react";
import styles from "../Css/ModalActions.module.css";


export default function ModalActions(props) {
  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>Modal produtos</h1>
        <button onClick={()=>props.setOpen(false)}>Close - Modal</button>
      </div>
    );
  }
}
