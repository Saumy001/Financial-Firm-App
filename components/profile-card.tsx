"use client"

import { useState } from "react"
import { ArrowRight, Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export function ProfileCard() {
  const [selectedFirm, setSelectedFirm] = useState("9000")

  return (
    
    <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-md ">
    <div className="flex flex-col items-center md:flex-row">
      {/* Left side - Profile Info */}
      <div className="flex flex-col items-center md:w-1/3 border-r border-gray-300">
        <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-blue-300 text-4xl text-blue-800">
          <span>SS</span>
        </div>
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-900">Saumy Sharma</h1>
        <p className="text-center text-gray-600">4 Available firm(s)</p>
        <p className="text-center text-gray-600">
          Role: <span className="font-medium">Administrator</span>
        </p>
      </div>

      {/* Right side - Session Setup */}
      <div className="mt-8 md:mt-0 md:w-2/3 md:pl-10">
        <h2 className="mb-6 text-xl font-semibold text-gray-800 ">Session Setup</h2>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">Select Firm</label>
          <div className="relative">
          <select
  id="firm"
  name="firm"
  className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  aria-label="Select Firm"
>
  <option value="100" selected>HDFC Bank - Firm Id: 100</option>
  <option value="101">ICICI Bank - Firm Id: 101</option>
  <option value="102">Axis Bank - Firm Id: 102</option>
</select>

            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">Select LOB</label>
          <div className="relative">
          <select
  id="firm"
  name="firm"
  className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
  aria-label="Select Firm"
>
<option value="retail">Retail Banking</option>
                <option value="corporate">Corporate Banking</option>
                <option value="investment">Investment Banking</option>
</select>

            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-md bg-gray-50 p-4 border-2 border-blue-600">
          <div className="mb-2">
            <span className="font-medium text-gray-700">Email:</span>{" "}
            <span className="text-gray-600">saumys@example.com</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700">Role:</span>{" "}
            <span className="text-gray-600">Administrator</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Last Login:</span>{" "}
            <span className="text-gray-600">2024-06-10 09:45 AM</span>
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href="/profile/edit"
            className="flex items-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Change Profile
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 17.5L17.5 10M17.5 10L10 2.5M17.5 10H2.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

