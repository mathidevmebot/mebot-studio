import React, { useEffect } from "react";
import { eventBus } from "../runner/eventBus";
import TopTabs from "./layout/TopTabs";
import LeftSidebar from "./layout/LeftSidebar";
import RightPanel from "./layout/RightPanel";
import StatusBar from "./layout/StatusBar";
import Stage from "../stage/Stage";
import { WorkspaceProvider, useWorkspace } from "./context/WorkspaceContext";
import "./layout/layout.css";


function AppContent() {
  const { workspace, createWorkspace } = useWorkspace();

  // Create a single shared Blockly workspace once
  useEffect(() => {
    const defaultToolbox = `
      <xml>
        <category name="Motion" colour="#4C97FF">
          <block type="motion_move_steps"></block>
          <block type="turn_left"></block>
          <block type="turn_right"></block>
          <block type="go_to_position"></block>
          <block type="set_speed"></block>
        </category>

        <category name="Looks" colour="#9966FF">
          <block type="looks_show"></block>
          <block type="looks_hide"></block>
        </category>

        <category name="Sound" colour="#CF63CF">
          <block type="play_sound"></block>
          <block type="start_sound"></block>
        </category>

        <category name="Events" colour="#FFBF00">
          <block type="events_when_flag_clicked"></block>
          <block type="events_when_sprite_clicked"></block>
        </category>

        <category name="Control" colour="#FFAB19">
          <block type="controls_repeat_ext"></block>
          <block type="controls_if"></block>
        </category>

        <category name="Sensing" colour="#5CB1D6">
          <block type="ambient_sound"></block>
        </category>

        <category name="Operators" colour="#59C059">
          <block type="operators_add"></block>
          <block type="operators_subtract"></block>
          
        </category>

        <category name="Variables" colour="#FF8C1A">
          <block type="variable"></block>
        </category>
        
        <category name="My Blocks" colour="#FF6680">
          <block type="myblock"></block>
        </category>        
      </xml>
    `;

    createWorkspace(defaultToolbox);
  }, [createWorkspace]);

  // Resize Blockly on window resize
  useEffect(() => {
    const handleResize = () => {
      if (workspace) {
        workspace.resize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [workspace]);

  // Keyboard events
  useEffect(() => {
    const handler = (e) => {
      eventBus.emit(`key_${e.key}`);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="app-container">
      <TopTabs />

      <div className="main-content">
        <LeftSidebar />
       {/*
        <div className="workspace-area">
           
          <div className="blockly-stage-container">
            <div id="blocklyArea"></div>
            <Stage />
          </div>
          

          <div className="blockly-container">
            <div id="blocklyArea"></div>
          </div>

          <div className="stage-container">
            <Stage />
          </div>
        </div>
        <RightPanel />
        */}
          <div className="blockly-column">
            <div id="blocklyArea"></div>
          </div>

          <div className="stage-column">
            <Stage />
          <RightPanel />
  </div>
      </div>

      <StatusBar />
    </div>
  );
}

export default function App() {
  return (
    <WorkspaceProvider>
      <AppContent />
    </WorkspaceProvider>
  );
}
