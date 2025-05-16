"use client"

import { useState } from "react"
import { Calendar, ChevronDown, ChevronLeft, Edit, FileText, Folder, Save, X, ClipboardList, SlidersHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { Header } from "@/components/header"
import ReportingLayout from "@/components/reportingLayout"

export default function BalanceSheetReport() {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [financialsOpen, setFinancialsOpen] = useState(true)
  const [hedgeFundsOpen, setHedgeFundsOpen] = useState(false)
  const [privateCapitalOpen, setPrivateCapitalOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

    const router = useRouter();
  

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
<ReportingLayout/>

        {/* Main Content - Report Page */}
        <div className="flex-1 overflow-auto">
          {/* Breadcrumb */}
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-2">
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/reporting" className="hover:text-blue-600">
                Reporting
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Income Statement</span>
            </div>
          </div>

          {/* Report Header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Balance Sheet</h1>
            <div className="mt-1 text-sm text-gray-500">Base report id: 1004</div>
          </div>

          {/* Report Parameters */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="rounded-lg border border-gray-200 bg-white">
              {/* Parameters Header */}
              <div className="flex items-center border-b border-gray-200 px-4 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="ml-3 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                  <SlidersHorizontal size={20}/>
                  </div>
                  <span className="ml-2 font-medium">Parameters</span>
                </div>

                <div className="ml-6 flex flex-1 items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <span className="font-medium">Account:</span>
                    <span className="ml-1">All Funds</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Basis:</span>
                    <span className="ml-1">Closed</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Dynamic Date:</span>
                    <span className="ml-1">None</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Start Date:</span>
                    <span className="ml-1">05/12/2025</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">End Date:</span>
                    <span className="ml-1">05/12/2025</span>
                  </div>
                </div>

                <button className="ml-auto flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
                      fill="currentColor"
                    />
                  </svg>
                  Run report
                </button>
              </div>

              {/* Parameters Form */}
              <div className="grid grid-cols-4 gap-6 p-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Account ℗(23)</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>All Funds</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Basis</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                      <option>Closed</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Dynamic Date</label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>None</option>
                      <option>Today</option>
                      <option>Yesterday</option>
                      <option>Tomorrow</option>
                      <option>Previous Week Start</option>
                      <option>Previous Week End</option>
                      <option>Previous Month Start</option>
                      <option>Previous Month End</option>
                      <option>Previous Year Start</option>
                      <option>Previous Year End</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Start Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="12-05-2025"
                      className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <Calendar className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">End Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="12-06-2025"
                      className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <Calendar className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex border-t border-gray-200 p-4">
                <button className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </button>
                <button className="ml-3 flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </button>
                <button className="ml-3 flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </button>
                <button className="ml-auto flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor" />
                  </svg>
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Report Content - Empty State */}
          <div className="flex flex-1 flex-col items-center justify-center p-8">
            <div className="mb-8 max-w-md">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Report illustration"
                width={300}
                height={200}
                className="mx-auto mb-6"
              />
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">Start analyzing</h2>
              <p className="text-center text-gray-600">
                To begin, modify the parameters in the panel above. Then, press "Run report".
                <br />
                Your data will populate on this page in a grid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
