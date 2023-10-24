import React from "react";

export default function ModalActions(props) {
  if (props.open) {
    return (
      <>
        <h1>Modal produtos</h1>
        <button onClick={()=>props.setOpen(false)}>Close - Modal</button>
      </>
    );
  }
}
