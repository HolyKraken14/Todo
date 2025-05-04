import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-800 text-white p-5">
        <div className="logo">
            <span className="font-bold text-xl mx-8">iTask</span>
        </div>
      <ul className="flex gap-10 mx-9">
        <li>Home</li>
        <li>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar