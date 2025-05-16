"use client"

import { useState } from "react"
import { Calendar, ChevronDown, ChevronUp, Edit, Save, SlidersHorizontal, X } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import ReportingLayout from "@/components/reportingLayout"

export default function IncomeStatementResults() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [financialsOpen, setFinancialsOpen] = useState(true)
  const [hedgeFundsOpen, setHedgeFundsOpen] = useState(false)
  const [privateCapitalOpen, setPrivateCapitalOpen] = useState(false)

  // Income statement data
  const reportData = [
    { type: "EXPENSE", description: "ACCOUNTING FEES", amount: -9018.75 },
    { type: "INCOME", description: "ACCRETION OF DISCOUNT", amount: 257577.71 },
    { type: "EXPENSE", description: "AUDIT FEES", amount: -5681.25 },
    { type: "EXPENSE", description: "BANK CHARGES", amount: -1863.47 },
    { type: "EXPENSE", description: "CONSULTING FEES", amount: -36292.86 },
    { type: "EXPENSE", description: "INSURANCE EXPENSE", amount: 8555.93 },
    { type: "INCOME", description: "INVESTMENT INTEREST INCOME", amount: 1339004.13 },
    { type: "EXPENSE", description: "LEGAL FEES", amount: -83.37 },
  ]

  // Format currency
  const formatCurrency = (amount: number) => {
    const absAmount = Math.abs(amount)
    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(absAmount)

    return amount < 0 ? `-$${formatted}` : `$${formatted}`
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Header/>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <ReportingLayout/>

        {/* Main Content - Report Results */}
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
            <h1 className="text-2xl font-semibold text-gray-800">Income Statement</h1>
            <div className="mt-1 text-sm text-gray-500">Base report id: 1005</div>
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
                    <span className="font-medium">As Of Date:</span>
                    <span className="ml-1">12/31/2024</span>
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
                  <label className="mb-1 block text-sm font-medium text-gray-700">As Of Date</label>
                  <div className="relative">
                    <input
                      type="text"
                      value="31-12-2024"
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

                <div className="ml-auto flex items-center">
                  <div className="mr-4 flex items-center">
                    <div className="mr-2 h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-gray-600">Unsaved changes</span>
                  </div>
                  <button className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor" />
                    </svg>
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Report Data Grid */}
          <div className="p-6">
            {/* Drag and Drop Instruction */}
            <div className="mb-4 rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
                </svg>
                This area enables drag and drop grouping on any field marked as "groupable" in your field configuration.
              </div>
            </div>

            {/* Data Grid */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <div className="flex items-center">
                        GL Sub Account
                        <svg
                          className="ml-1 h-4 w-4 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
                        </svg>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <div className="flex items-center">
                        Account Description
                        <ChevronUp className="ml-1 h-4 w-4 text-gray-900" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      <div className="flex items-center justify-end">
                        PTD Balance
                        <svg
                          className="ml-1 h-4 w-4 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
                        </svg>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {reportData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{item.type}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{item.description}</td>
                      <td
                        className={`whitespace-nowrap px-6 py-4 text-right text-sm ${item.amount < 0 ? "text-red-600" : "text-gray-900"}`}
                      >
                        {formatCurrency(item.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
