import React from "react";
import { useWorkspace } from "../context/WorkspaceContext";
import { runCode, runEventScripts } from "../../runner/jsRunner";

export default function RightPanel() {
  const { generatedCode, generateCode, activeSpriteId } = useWorkspace();

  return (
    <div className="right-panel">
      <h3>Generated Code</h3>

      <button className="generate-btn" onClick={generateCode}>
        Generate Code
      </button>

      <button
        className="run-btn"
        onClick={() => runCode(generatedCode, activeSpriteId)}
      >
        Run
      </button>

      <pre className="code-preview">{generatedCode}</pre>

      <h3>Console</h3>
      <div className="console-output">Console ready...</div>
    </div>
  );
}
