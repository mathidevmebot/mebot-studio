import React from "react";
import "./layout.css";
import { eventBus } from "../../runner/eventBus";

export default function TopTabs({ activeTab, setActiveTab }) {
  const tabs = ["Code", "Costumes", "Sounds", "Boards"];

  
  return (
    <div className="top-tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
      
      <div>
        <button className="green-flag" onClick={() => eventBus.emit("green_flag")}>
          🟢
        </button> 
      </div>
      
    </div>
  );
}
