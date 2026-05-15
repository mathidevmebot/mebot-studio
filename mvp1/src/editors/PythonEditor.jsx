import { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

function PythonEditor({ code, active }) {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  useEffect(() => {
    monacoRef.current = monaco.editor.create(editorRef.current, {
      value: code || "",
      language: "python",
      readOnly: true,
      theme: "vs-dark",
      automaticLayout: false,
    });

    const resizeObserver = new ResizeObserver(() => {
      if (monacoRef.current) monacoRef.current.layout();
    });
    resizeObserver.observe(editorRef.current);

    return () => {
      resizeObserver.disconnect();
      if (monacoRef.current) monacoRef.current.dispose();
    };
  }, []);

  useEffect(() => {
    if (monacoRef.current) monacoRef.current.setValue(code || "");
  }, [code]);

  useEffect(() => {
    if (active && monacoRef.current) {
      setTimeout(() => monacoRef.current.layout(), 0);
    }
  }, [active]);

  return (
    <div ref={editorRef} style={{ width: "100%", height: "100%" }}></div>
  );
}

export default PythonEditor;
