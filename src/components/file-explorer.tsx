import { File } from "./layout"
import { ChevronRight, ChevronDown, FileCode, Package } from 'lucide-react'
import { cn } from "@/lib/utils"

interface FileExplorerProps {
  files: File[]
  activeFile: string
  onFileSelect: (filename: string) => void
}

export function FileExplorer({ files, activeFile, onFileSelect }: FileExplorerProps) {
  return (
    <div className="w-64 border-r border-gray-800 flex flex-col">
      <div className="p-4">
        <div className="flex items-center text-gray-400 mb-2">
          <ChevronDown className="h-4 w-4 mr-1" />
          FILES
        </div>
        <div className="pl-4">
          <div className="flex items-center text-gray-400 mb-2">
            <ChevronDown className="h-4 w-4 mr-1" />
            src
          </div>
          <div className="pl-4">
            {files.map(file => (
              <div
                key={file.name}
                className={cn(
                  "flex items-center py-1 px-2 rounded cursor-pointer",
                  activeFile === file.name && "bg-gray-800"
                )}
                onClick={() => onFileSelect(file.name)}
              >
                <FileCode className="h-4 w-4 mr-2 text-blue-400" />
                {file.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 border-t border-gray-800">
        <div className="flex items-center text-gray-400 mb-2">
          <ChevronRight className="h-4 w-4 mr-1" />
          PACKAGES
        </div>
        <div className="pl-4 text-gray-400">
          <div className="flex items-center py-1">
            <Package className="h-4 w-4 mr-2" />
            react
          </div>
          <div className="flex items-center py-1">
            <Package className="h-4 w-4 mr-2" />
            react-dom
          </div>
        </div>
      </div>
    </div>
  )
}