import { SearchIcon } from "lucide-react"

export function Search() {
  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Blinks, Guides, Shortcasts or Collections"
          className="w-full h-10 pl-4 pr-10 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
