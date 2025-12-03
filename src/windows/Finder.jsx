import React from "react";
import { Search } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useLocationStore from "#store/location.js";
import clsx from "clsx";
import { locations } from "../constants/index.js";
const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const renderList = (name, items = []) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favourites", Object.values(locations ?? {}))}

          {renderList("Work", locations?.work?.children ?? [])}
        </div>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
