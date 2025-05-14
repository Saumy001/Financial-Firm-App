"use client"

import { Header } from "@/components/header"
import { ProfileCard } from "@/components/profile-card"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center bg-gray-50 py-10">
        <ProfileCard/>

        <div className="mt-4 flex justify-center text-sm text-gray-500 gap-4">
  <span>Profile: Saumy Sharma</span>
  <span>|</span>
  <span>Firm: 100</span>
  <span>|</span>
  <span>Type: KNOVA Internal</span>
</div>


      </div>
    </div>
  )
}
