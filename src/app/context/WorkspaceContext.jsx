import React, { createContext, useContext, useRef, useState, useCallback } from "react";
import * as Blockly from "blockly";

const WorkspaceContext = createContext();

export function WorkspaceProvider({ children }) {
  const workspaceRef = useRef(null);
  const [activeSpriteId, setActiveSpriteId] = useState(null);
  const [generatedCode, setGeneratedCode] = useState("// Code will appear here");

  const createWorkspace = useCallback((toolboxXml) => {
    if (workspaceRef.current) return; // only once

    const blocklyDiv = document.getElementById("blocklyArea");
    if (!blocklyDiv) return;

    const workspace = Blockly.inject(blocklyDiv, {
      toolbox: toolboxXml,
      trashcan: true,
      scrollbars: true,
    });

    workspaceRef.current = workspace;

    // Ensure proper initial sizing
    setTimeout(() => {
      workspace.resize();
    }, 50);
  }, []);

  const switchWorkspace = useCallback((spriteId) => {
    setActiveSpriteId(spriteId);
    // Single workspace — just track which sprite is active
  }, []);

  const deleteWorkspace = useCallback((_spriteId) => {
    // No per-sprite workspaces anymore; nothing to dispose here
  }, []);

  const generateCode = useCallback(() => {
    const ws = workspaceRef.current;
    if (!ws) return;

    const code = Blockly.JavaScript.workspaceToCode(ws);
    setGeneratedCode(code);
  }, []);

  return (
    <WorkspaceContext.Provider
      value={{
        workspace: workspaceRef.current,
        activeSpriteId,
        generatedCode,
        createWorkspace,
        switchWorkspace,
        deleteWorkspace,
        generateCode,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export const useWorkspace = () => useContext(WorkspaceContext);
