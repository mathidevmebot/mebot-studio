import { useEffect, useRef, useState } from "react";
import * as Blockly from "blockly";

import mebotToolbox from "./blockly/toolboxes/mebot.xml?raw";

import "./blockly/blocks/mebot/basicBlocks.js";

import pythonGenerator from "./blockly/generators/python.js";
import javascriptGenerator from "./blockly/generators/javascript.js";
// import "./blockly/generators/mebot.js";

import PythonEditor from "./editors/PythonEditor.jsx";
import JSEditor from "./editors/JSEditor.jsx";

function App() {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);

  const [activeTab, setActiveTab] = useState("blocks");
  const [pythonCode, setPythonCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
    const parser = new DOMParser();
    const toolboxDom = parser.parseFromString(mebotToolbox, "text/xml");

    
    const workspace =Blockly.inject(blocklyDiv.current, {
      toolbox: toolboxDom.documentElement,
      scrollbars: true,
      trashcan: true,
    });
    workspaceRef.current = workspace;

    workspaceRef.current.addChangeListener(() => {
      const py = pythonGenerator.workspaceToCode(workspaceRef.current);
      const js = javascriptGenerator.workspaceToCode(workspaceRef.current);

      /* // 23/04/2026 DEBUGGING LOGS - BEGIN
      console.log("workspaceRef:", workspaceRef.current.getAllBlocks(false).length);
      
      console.log("GENERATOR PY:", pythonGenerator);
      console.log("GENERATOR JS:", javascriptGenerator);
      
      console.log("PYTHON:", py);
      console.log("JS:", js);

      const ws = workspaceRef.current;
      if (ws) {
          const blocks = ws.getAllBlocks(false);
          console.log("Actual Block Count:", blocks.length);
          const code = pythonGenerator.workspaceToCode(ws);
          console.log("Generated Code:", code);
      }
      // 23/04/2026DEBUGGING LOGS - END  */

      setPythonCode(py);
      setJsCode(js);
    });

    return () => {
      workspace.dispose();
    };

  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      
      <div style={{ display: "flex", background: "#ddd", padding: "10px" }}>
        <button onClick={() => setActiveTab("blocks")}>Blocks</button>
        <button onClick={() => setActiveTab("python")}>Python</button>
        <button onClick={() => setActiveTab("javascript")}>JavaScript</button>
      </div>

      <div style={{ flex: 1, position: "relative" }}>
        <div
          ref={blocklyDiv}
          style={{
            position: "absolute",
            inset: 0,
            display: activeTab === "blocks" ? "block" : "none",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: activeTab === "python" ? "block" : "none",
          }}
        >
          <PythonEditor code={pythonCode} active={activeTab === "python"} />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: activeTab === "javascript" ? "block" : "none",
          }}
        >
          <JSEditor code={jsCode} active={activeTab === "javascript"} />
        </div>

      </div>
    </div>
  );
}

export default App;
