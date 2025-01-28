import { Play, Pause, Share } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function TopNav() {
  return (
    <div className="h-12 border-b border-gray-800 flex items-center px-4 bg-[#1e1e1e]">
      <div className="flex items-center space-x-4">
        <span className="text-green-500 font-mono">⌘</span>
        <Button variant="ghost" size="icon">
          <Play className="h-4 w-4" />
        </Button>
        <span className="text-sm text-gray-400">React Playground</span>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="ghost" size="sm">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button variant="ghost" size="sm">Learn</Button>
        <Button variant="ghost" size="sm">Sign In</Button>
        <Button size="sm" className="bg-green-500 hover:bg-green-600">Sign Up</Button>
      </div>
    </div>
  )
}