"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, FileText, Folder, X, ClipboardList, Sliders, LayoutGrid } from "lucide-react"
import Image from "next/image"
import path from "path"
import router from "next/router"
import { useRouter } from "next/navigation";
import { Header } from "../../components/header"

import ReportingLayout from "@/components/reportingLayout"


export default function Reporting() {
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
<ReportingLayout/>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Navigation illustration"
                width={300}
                height={200}
                className="mx-auto mb-6 mt-[75px]"
              />
              <h1 className="mb-4 text-3xl font-bold">Getting started</h1>
              <p className="mb-2 text-gray-600">
                Welcome to Reporting. Please select a report using the menu on the left.
              </p>
              <p className="text-gray-600">
                First choose a category. Then, within the drawer, open a folder and click on a report.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
