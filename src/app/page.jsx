"use client"

import { useState } from "react"

const Home = () => {
  const [name, setName] = useState("")

  const print = () => {
    if (!name) {
      alert("Enter the name first.")
      return
    }

    const page = window.open(`/${name}`, "_blank", "width=800,height=600")
    if (!page) {
      console.error("there is no page to print.")
      return
    }

    const checkIfLoaded = () => {
      if (page.document.readyState === "complete") {
        page.print()

        setTimeout(() => {
          page.close()
        }, 2000)
      } else {
        setTimeout(checkIfLoaded, 100)
      }
    }

    checkIfLoaded()
  }

  return (
    <div className="flex flex-col gap-4 py-20 mx-auto max-w-96">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Patient's Name"
        className="border-2 rounded-md px-2 py-1"
      />
      <button
        onClick={print}
        className="bg-green-500 rounded-md px-3 py-2 font-semibold text-white"
      >
        Print
      </button>
    </div>
  )
}

export default Home
