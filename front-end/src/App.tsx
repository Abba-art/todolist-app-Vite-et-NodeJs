import { Plus, Trash } from "lucide-react"
import { useEffect, useState } from "react"

interface TodoItems {
  id: number
  text: string
}

export const App = () => {
  const [search, setSearch] = useState("")
  const [todos, setTodos] = useState<TodoItems[]>([])
  const [buttonPosition, setButtonPosition] = useState<{ top?: string; left?: string }>({})

 
  useEffect(() => {
    fetch("http://localhost:3000/findElementTodos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Erreur de chargement", err))
  }, [])


  const handleAdd = () => {
    if (search.trim() === "") return

    fetch("http://localhost:3000/addElementTodos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: search }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodos((prev) => [...prev, newTodo])
        setSearch("")
      })
      .catch((err) => console.error("Erreur d'ajout", err))
  }

 
  const handleDelete = (id: number) => {
    fetch(`http://localhost:3000/deleteTodos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
      })
      .catch((err) => console.error("Erreur de suppression", err))
  }


  const handleMoveButton = () => {
    if (search.trim() === "") {
      const randomTop = Math.floor(Math.random() * 60)
      const randomLeft = Math.floor(Math.random() * 60)
      setButtonPosition({
        top: `${randomTop}vh`,
        left: `${randomLeft}vw`,
      })
    } else {
      setButtonPosition({})
    }
  }

 
  useEffect(() => {
    if (search.trim() !== "") {
      setButtonPosition({})
    }
  }, [search])

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-bl from-[#FF69B4] to-[#b96af2]">
      <div className="w-full max-w-2xl bg-pink-50/5 backdrop-blur-2xl p-8 rounded-2xl shadow-xl relative">
        <div className="flex gap-2 mb-6 relative">
          <input
            type="text"
            placeholder="Ajouter un élément..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 focus:outline-none"
          />
          <button
            onMouseOver={handleMoveButton}
            onClick={handleAdd}
            style={buttonPosition.top ? { position: "absolute", ...buttonPosition } : {}}
            className="p-2 bg-white/10 border border-[#b96af2] rounded-xl text-white hover:bg-white/20 transition-all duration-300 ease-in-out"
          >
            <Plus />
          </button>
        </div>

        <h1 className="text-2xl font-bold text-white/80 mb-4">Liste de tâches</h1>

        <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-white/10 p-3 rounded-xl"
            >
              <span className="text-white">{todo.text}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
