'use client'

import { File } from "./layout"
import Editor from "@monaco-editor/react"

interface EditorProps {
  files: File[]
  activeFile: string
  onUpdateContent: (content: string) => void
}

export function CodeEditor({ files, activeFile, onUpdateContent }: EditorProps) {
  const activeFileContent = files.find(f => f.name === activeFile)?.content || ""

  return (
    <div className="flex-1 bg-[#1e1e1e]">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={activeFileContent}
        onChange={(value) => onUpdateContent(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
        }}
      />
    </div>
  )
}