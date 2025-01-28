'use client'

import { FileExplorer } from "./file-explorer"
import { CodeEditor } from "./editor"
import { Preview } from "./preview"
import { TopNav } from "./top-nav"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface File {
  name: string
  content: string
  language: string
}

export default function Layout() {
  const [files, setFiles] = useState<File[]>([
    {
      name: "App.jsx",
      content: `import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}`,
      language: "javascript"
    },
    {
      name: "index.jsx",
      content: `import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);`,
      language: "javascript"
    }
  ])
  const [activeFile, setActiveFile] = useState("App.jsx")
  const [isPanelOpen, setIsPanelOpen] = useState(true)

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-white">
      <TopNav />
      <div className="flex-1 flex">
        <FileExplorer 
          files={files}
          activeFile={activeFile}
          onFileSelect={setActiveFile}
        />
        <div className="flex-1 flex flex-col">
          <CodeEditor 
            files={files}
            activeFile={activeFile}
            onUpdateContent={(content) => {
              setFiles(files.map(f => 
                f.name === activeFile ? { ...f, content } : f
              ))
            }}
          />
          <div className={cn(
            "h-64 border-t border-gray-800",
            !isPanelOpen && "h-8"
          )}>
            <Preview files={files} isPanelOpen={isPanelOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}