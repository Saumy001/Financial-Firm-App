"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, FileText, Folder, X, ClipboardList, Sliders, LayoutGrid, Gauge, TrendingUp } from "lucide-react"
import Image from "next/image"
import path from "path"
import router from "next/router"
import { useRouter } from "next/navigation";
import { Header } from "../components/header"


export default function ReportingLayout() {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [financialsOpen, setFinancialsOpen] = useState(true)
  const [hedgeFundsOpen, setHedgeFundsOpen] = useState(false)
  const [privateCapitalOpen, setPrivateCapitalOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const router = useRouter();

  return (

      < >
        {/* Sidebar */}
        <div className="w-60 flex-shrink-0 bg-gray-900 text-white">
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search reports"
                className="w-full rounded border border-gray-700 bg-gray-900 py-2 pl-3 pr-10 text-white"
              />
              <X className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="space-y-1 px-2">
            {[
              {
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
                label: "My Reports",
              },
              
              {
                icon: (
                  <Sliders size={22} />
                ),
                label: "Portfolio",
              },
              {
                icon: (
                    <TrendingUp size={22} />
                ),
                label: "Performance",
              },
              {
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 10V17H7V10H4ZM10 10V17H13V10H10ZM2 22H21V19H2V22ZM16 10V17H19V10H16ZM11.5 1L2 6V8H21V6L11.5 1Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
                label: "Fund",
                active: true,
              },
              {
                icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
                label: "Investor",
              },
              
              
            ].map((item, index) => (
              <div
                key={index}
                className={`flex cursor-pointer items-center rounded-md px-2 py-3 ${
                  item.label === "Fund" ? "bg-gray-800" : "hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

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
        </div>

        {/* Drawer */}
        {drawerOpen && (
          <div className="w-64 flex-shrink-0 overflow-y-auto bg-blue-50">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <div className="flex items-center">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 10V17H7V10H4ZM10 10V17H13V10H10ZM2 22H21V19H2V22ZM16 10V17H19V10H16ZM11.5 1L2 6V8H21V6L11.5 1Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-lg font-medium">Fund</span>
              </div>
              <button onClick={() => setDrawerOpen(false)} className="text-gray-500 hover:text-gray-700">
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="p-2">
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
                      <span onClick= {() => router.push("/reporting/income-statement") }>Income Statement</span>
                    </div>
                    <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                      <FileText className="mr-2 h-5 w-5 text-gray-600" />
                      <span onClick= {() => router.push("/reporting/balance-sheet")}>Balance Sheet</span>
                    </div>
                    <div className="flex cursor-pointer items-center rounded p-2 hover:bg-blue-200">
                      <FileText className="mr-2 h-5 w-5 text-gray-600" />
                      <span>Trial Balance</span>
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
                      <span>HF-Fund transactions</span>
                    </div>
                    
                  </div>
                )}            
                  </div>

              <div className="mb-1 rounded hover:bg-blue-100">
                <div
                  className="flex cursor-pointer items-center justify-between p-2"
                  onClick={() => setPrivateCapitalOpen(!privateCapitalOpen)}
                >
                  <div className="flex items-center">
                    <Folder className="mr-2 h-5 w-5 text-gray-600" />
                    <span>Private Capital</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transform text-gray-500 ${privateCapitalOpen ? "rotate-180" : ""}`}
                  />
                </div>
                {privateCapitalOpen && (
                  <div className="ml-4 space-y-1 pl-4">{/* Private Capital content would go here */}</div>
                )}
              </div>
            </div>
          </div>
        )}

      </>
  )
}
