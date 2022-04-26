import { useState } from "react";
import Alltodos from "./alltodos";

export default function Home() {
  const [homeActive, setHomeActive] = useState(true);
  return (
    <div className="container flex justify-start">
      <div>
        <Alltodos homeActive={homeActive} setHomeActive={setHomeActive} />
      </div>
    </div>
  );
}
