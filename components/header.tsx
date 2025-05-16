'use client';

import { ChevronDown, ClipboardList } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react"

export function Header() {
      const [profileOpen, setProfileOpen] = useState(false)
        const router = useRouter();
      
    
  return (
    <header className="flex h-16 items-center justify-between bg-blue-900 px-4">
    <div className="flex items-center">
    <div className="mr-4 text-white">
  <ClipboardList size={24} onClick={() => router.push('/reporting')}
      className="cursor-pointer" />
</div>
<div className="flex items-center rounded bg-[#325c98] px-4 py-2">
  <div className="relative">
    <select
      className="appearance-none bg-[#325c98] pr-8 text-white outline-none"
      defaultValue="reporting" 
      
    >
      <option value="reporting" >Reporting</option>
      <option value="analytics">Analytics</option>
      <option value="insights">Insights</option>
    </select>
    <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
  </div>
</div>

    </div>
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-700">
          <span className="font-semibold">SS</span>
        </div>
        <div className="text-white">
          <div>Saumy Sharma</div>
          <div className="text-xs">View settings</div>
        </div>
      </div>

      {profileOpen && (
        <div className="absolute right-0 top-14 bg-white shadow-lg rounded p-2 w-40">
          <div className="hover:bg-gray-100 p-2 cursor-pointer" onClick={() => router.push("/user-profile") }>User Profile</div>
          <div className="hover:bg-gray-100 p-2 cursor-pointer">Settings</div>
          <div className="hover:bg-gray-100 p-2 cursor-pointer">Logout</div>
        </div>
      )}
    </div>
  </header>
  )
}
