"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronLeft,
  FileText,
  Folder,
  Menu,
  Sliders,
  TrendingUp,
  FileBarChart,
  Wallet,
  User,
  X
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function ReportingLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState("")
  const [financialsOpen, setFinancialsOpen] = useState(false)
  const [hedgeFundsOpen, setHedgeFundsOpen] = useState(false)
  const [myReportsOpen, setMyReportsOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const router = useRouter()

  const sidebarItems = [
    { icon: <FileBarChart size={22} />, label: "My Reports" },
    { icon: <Sliders size={22} />, label: "Portfolio" },
    { icon: <TrendingUp size={22} />, label: "Performance" },
    { icon: <Wallet size={22} />, label: "Fund" },
    { icon: <User size={22} />, label: "Investor" }
  ]

  return (
    <>
      {/* Sidebar */}
      <div className={`flex-shrink-0 bg-gray-900 text-white transition-all duration-300 ${sidebarOpen ? "w-60" : "w-16"}`}>
        <div className="p-4 flex justify-between items-center">
          {sidebarOpen ? (
            <button onClick={() => setSidebarOpen(false)}>
                      <X size={26} className="ml-[84px]"   />

            </button>
          ) : (
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="text-white" />
            </button>
          )}
        </div>

        {sidebarOpen && (
          <div className="px-4 mb-3">
            <input
              type="text"
              placeholder="Search reports"
              className="w-full rounded border border-gray-700 bg-gray-900 py-2 pl-3 pr-10 text-white"
            />
          </div>
        )}

        <nav className="space-y-1 px-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedMenu(item.label)
                setDrawerOpen(true)
              }}
              className={`flex items-center cursor-pointer rounded-md px-2 py-3 ${
                selectedMenu === item.label ? "bg-gray-800" : "hover:bg-gray-800"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <div className="w-64 flex-shrink-0 overflow-y-auto bg-blue-50">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <span className="text-lg font-medium">{selectedMenu}</span>
            <button onClick={() => setDrawerOpen(false)} className="text-gray-500 hover:text-gray-700">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="p-2">
            {selectedMenu === "Fund" && (
              <>
                <div className="mb-1 rounded hover:bg-blue-100">
                  <div
                    className="flex cursor-pointer items-center justify-between p-2"
                    onClick={() => setFinancialsOpen(!financialsOpen)}
                  >
                    <div className="flex items-center">
                      <Folder className="mr-2 h-5 w-5 text-gray-600" />
                      <span>Financials</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transform text-gray-500 ${financialsOpen ? "rotate-180" : ""}`} />
                  </div>
                  {financialsOpen && (
                    <div className="ml-4 space-y-1 pl-4">
                      <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                        <FileText className="mr-2 h-5 w-5 text-gray-600" />
                        <span onClick={() => router.push("/reporting/fund/income-statement")}>Income Statement</span>
                      </div>
                      <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                        <FileText className="mr-2 h-5 w-5 text-gray-600" />
                        <span onClick={() => router.push("/reporting/fund/balance-sheet")}>Balance Sheet</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-1 rounded hover:bg-blue-100">
                  <div
                    className="flex cursor-pointer items-center justify-between p-2"
                    onClick={() => setHedgeFundsOpen(!hedgeFundsOpen)}
                  >
                    <div className="flex items-center">
                      <Folder className="mr-2 h-5 w-5 text-gray-600" />
                      <span>Hedge Funds</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transform text-gray-500 ${hedgeFundsOpen ? "rotate-180" : ""}`} />
                  </div>
                  {hedgeFundsOpen && (
                    <div className="ml-4 space-y-1 pl-4">
                      <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                        <FileText className="mr-2 h-5 w-5 text-gray-600" />
                        <span>Hedge Fund Position</span>
                      </div>
                      <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                        <FileText className="mr-2 h-5 w-5 text-gray-600" />
                        <span onClick={() => router.push("/reporting/fund/hf-fund")}> Fund transactions</span>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {selectedMenu === "My Reports" && (
              <>
                <div className="mb-1 rounded hover:bg-blue-100">
                  <div
                    className="flex cursor-pointer items-center justify-between p-2"
                    onClick={() => setMyReportsOpen(!myReportsOpen)}
                  >
                    <div className="flex items-center p-2">
                      <Folder className="mr-2 h-5 w-5 text-gray-600" />
                      <span>Event Reports</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 transform text-gray-500 ${myReportsOpen ? "rotate-180" : ""}`} />
                  </div>

                  {myReportsOpen && (
                    <div className="ml-4 space-y-1 pl-4">
                      <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                        <FileText className="mr-2 h-5 w-5 text-gray-600" />
                        <span onClick={() => router.push("/reporting/my-reports/event-reports")}>Event Details</span>
                      </div>
                      <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                        <FileText className="mr-2 h-5 w-5 text-gray-600" />
                        <span>EDA Execution</span>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
