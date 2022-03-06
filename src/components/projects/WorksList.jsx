import React from "react";

export default function WorksList({ id, title, active, setSelected }) {
  return (
    <li
      key={id}
      className={active ? "active" : ""}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
