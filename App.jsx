import { MenuList } from "./components/MenuList/MenuList";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import s from "./style.module.css";
import { useState } from "react";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h1 className={s.workspace}>Select your difficulty level</h1>
      <div className={s.workspace}>
        <MenuList
          onItemClick={onMenuListItemClick}
          difficulty={currentDifficulty}
        ></MenuList>
        {<DisplayDifficulty difficulty={currentDifficulty}></DisplayDifficulty>}
      </div>
    </div>
  );
}
