import { SearchIcon } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b border-gray-200 bg-white font-sans">
      <div className="flex items-center justify-end h-16 px-6">
        <div className="w-[400px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Blinks, Guides, Shortcasts or Collections"
              className="w-full h-10 pl-4 pr-10 rounded-lg bg-[#F2F6F4] border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-[#8E969A] font-sans"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
