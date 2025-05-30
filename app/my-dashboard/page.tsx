"use client"
import { Header } from "@/components/header"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MyDashboard() {
  const [filtersExpanded, setFiltersExpanded] = useState(true)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>

      {/* Filter Section */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setFiltersExpanded(!filtersExpanded)}
              className="mr-4 flex items-center text-gray-600 hover:text-gray-800"
            >
              {filtersExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              <svg className="ml-1 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21L19 9H5L3 7ZM6 10H18V12H6V10ZM8 13H16V15H8V13Z" fill="currentColor" />
              </svg>
            </button>
            <div className="flex items-center space-x-6 text-sm">
              <div>
                <span className="font-medium text-gray-700">Fund:</span>
                <span className="ml-1 text-gray-600">All Funds</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">As of Date:</span>
                <span className="ml-1 text-gray-600">09/30/2023</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Security Type:</span>
                <span className="ml-1 text-gray-600">Equities</span>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-emerald-600 pb-1">
            <span className="text-sm font-medium text-emerald-600">Custom Widgets</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6 py-12">
        <div className="text-center">
          {/* Pink Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-200">
            <svg className="h-10 w-10 text-pink-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor" />
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-3xl font-bold text-gray-800">Take control of your data!</h1>

          {/* Subtitle */}
          <p className="max-w-md text-lg text-gray-600">
          Customize your dashboard with the widgets
            <br />& data that drive your decisions.
          </p>
        </div>
      </div>

      {/* Bottom Left Decorative Icon */}
      <div className="absolute bottom-4 left-4">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#FF4B4B"
          />
          <path
            d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
            fill="#FFDD35"
          />
          <path
            d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
            fill="#FF4B4B"
          />
        </svg>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}
