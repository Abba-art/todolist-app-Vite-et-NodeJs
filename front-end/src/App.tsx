import { Plus, Trash } from "lucide-react"
import { useState } from "react"

export const App = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-bl from-[#FF69B4] to-[#b96af2]">
      <div className="w-full max-w-2xl bg-pink-50/5 backdrop-blur-2xl p-8 rounded-2xl shadow-xl">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Faire une recherche..."
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 focus:outline-none"
          />
          <button className="p-2 bg-white/10 border border-[#b96af2] rounded-xl text-white hover:bg-white/20 transition">
            <Plus />
          </button>
        </div>

        <h1 className="text-2xl font-bold text-white/80 mb-4">Liste de tâches</h1>

        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
          <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
            <span className="text-white">Lorem ipsum dolor sit amet consectetur.</span>
            <button className="text-red-500 hover:text-red-600 transition">
              <Trash />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
