import { File } from "./layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, MonitorPlay } from 'lucide-react'

interface PreviewProps {
  files: File[]
  isPanelOpen: boolean
}

export function Preview({ files, isPanelOpen }: PreviewProps) {
  return (
    <Tabs defaultValue="console" className="h-full">
      <TabsList className="h-8 bg-transparent border-b border-gray-800">
        <TabsTrigger value="console" className="data-[state=active]:bg-transparent">
          <Terminal className="h-4 w-4 mr-2" />
          Console
        </TabsTrigger>
        <TabsTrigger value="preview" className="data-[state=active]:bg-transparent">
          <MonitorPlay className="h-4 w-4 mr-2" />
          Web View
        </TabsTrigger>
      </TabsList>
      {isPanelOpen && (
        <>
          <TabsContent value="console" className="p-4 text-green-400">
            Hello console
          </TabsContent>
          <TabsContent value="preview" className="p-4">
            <div className="rounded bg-white text-black p-4">
              <h1 className="text-2xl text-green-600">Hello React.</h1>
              <h2 className="text-xl text-green-500">Start editing to see some magic happen!</h2>
            </div>
          </TabsContent>
        </>
      )}
    </Tabs>
  )
}