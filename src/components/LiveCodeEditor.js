import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';

import styles from './LiveCodeEditor.module.css';

const LiveCodeEditor = ({ initialCode = '' }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  const executeCode = () => {
    // In a real application, this would send the code to a backend
    // or a WebAssembly-based Python interpreter for execution.
    // For this example, we'll just simulate an output.
    try {
      // This is a placeholder for actual code execution
      // For security and complexity reasons, direct client-side execution of arbitrary Python
      // is not feasible without a dedicated interpreter (e.g., Pyodide, or server-side).
      // Here, we just echo the code or a predefined result.
      if (code.includes("print(")) {
        setOutput(`Simulated Output: ${code.match(/print\((.*)\)/)?.[1] || '...'}`);
      } else if (code.includes("def")) {
        setOutput("Simulated: Function defined. (Cannot execute complex Python directly in browser)");
      } else {
        setOutput(`Simulated Output for: \n${code}`);
      }
    } catch (e) {
      setOutput(`Simulated Error: ${e.message}`);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={(codeText) => highlight(codeText, languages.python, 'python')}
        padding={10}
        style={{
          fontFamily: 'monospace',
          fontSize: 16,
          backgroundColor: 'var(--docusaurus-code-background-color)',
          color: 'var(--docusaurus-code-text-color)',
          border: '1px solid var(--ifm-color-primary-lightest)',
          borderRadius: '5px',
          minHeight: '150px',
        }}
      />
      <button onClick={executeCode} className={styles.executeButton}>
        Run Code
      </button>
      {output && (
        <pre className={styles.outputArea}>
          <code>{output}</code>
        </pre>
      )}
    </div>
  );
};

export default LiveCodeEditor;