"use client"

import { useState } from "react"

const Home = () => {
  const [name, setName] = useState("")

  const print = () => {
    const sanitizedName = name.replace(/[^a-zA-Z0-9-_]/g, "")
    if (!sanitizedName || sanitizedName.trim().length < 2) {
      alert("Please enter a valid name (at least 2 characters).")
      return
    }

    const page = window.open(
      `/${sanitizedName}`,
      "_blank",
      "width=800,height=600"
    )
    if (!page) {
      alert("Popup blocked! Please allow popups for this site.")
      return
    }

    page.onafterprint = () => {
      page.close()
    }

    page.print()
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
