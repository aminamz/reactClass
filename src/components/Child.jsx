import React, { useRef, useState } from "react";

export default function Child({refData}) {
  const newRef = useRef("test");
  const [num, setNum] = useState(0);

  return (
    <div>
      child
      {newRef.current} {"//////"}
      {num}
    </div>
  );
}
