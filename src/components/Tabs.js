import { useState } from "react";
import "../styles/tabs.css";

const tabs = [
  { key: "tab1", label: "For you" },
  { key: "tab2", label: "Following" },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          key={tab.key}
          className={`tab ${activeTab === tab.key ? "active" : ""}`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};
