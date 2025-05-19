"use client"
import { Header } from "@/components/header"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend,
} from "recharts"

export default function Dashboard() {
  // Market Value Trend data
  const marketValueTrendData = [
    { date: "9/30/2022", value: 2450 },
    { date: "10/31/2022", value: 2520 },
    { date: "11/30/2022", value: 2580 },
    { date: "12/31/2022", value: 2650 },
    { date: "1/31/2023", value: 2780 },
    { date: "2/28/2023", value: 2800 },
    { date: "3/31/2023", value: 2830 },
    { date: "4/30/2023", value: 2810 },
    { date: "5/31/2023", value: 2850 },
    { date: "6/30/2023", value: 2920 },
    { date: "7/31/2023", value: 2980 },
    { date: "8/31/2023", value: 2950 },
    { date: "9/30/2023", value: 2790 },
  ]

  // Asset Allocation data
  const assetAllocationData = [
    { name: "Equity", value: 35 },
    { name: "Private Equity", value: 22 },
    { name: "Fixed Income", value: 18 },
    { name: "Private Debt", value: 12 },
    { name: "Real Estate", value: 8 },
    { name: "Commodities", value: 3 },
    { name: "Cash", value: 2 },
  ]

  // Asset Allocation Trend data
  const assetAllocationTrendData = [
    {
      date: "9/30/2022",
      Equity: 32,
      "Private Equity": 20,
      "Fixed Income": 19,
      "Private Debt": 13,
      "Real Estate": 9,
      Commodities: 4,
      Cash: 3,
    },
    {
      date: "12/31/2022",
      Equity: 33,
      "Private Equity": 21,
      "Fixed Income": 18,
      "Private Debt": 13,
      "Real Estate": 9,
      Commodities: 3,
      Cash: 3,
    },
    {
      date: "3/31/2023",
      Equity: 34,
      "Private Equity": 22,
      "Fixed Income": 18,
      "Private Debt": 12,
      "Real Estate": 8,
      Commodities: 3,
      Cash: 3,
    },
    {
      date: "6/30/2023",
      Equity: 36,
      "Private Equity": 22,
      "Fixed Income": 17,
      "Private Debt": 12,
      "Real Estate": 8,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "9/30/2023",
      Equity: 35,
      "Private Equity": 22,
      "Fixed Income": 18,
      "Private Debt": 12,
      "Real Estate": 8,
      Commodities: 3,
      Cash: 2,
    },
  ]

  // Unrealized G/L by Asset Class data
  const unrealizedGLData = [
    { name: "Private Equity", value: 105 },
    { name: "Equity", value: 85 },
    { name: "Private Debt", value: 65 },
    { name: "Fixed Income", value: 45 },
    { name: "Commodities", value: -25 },
    { name: "Real Estate", value: -50 },
  ]

  // Colors for charts
  const COLORS = {
    Equity: "#1e3a8a",
    "Private Equity": "#0ea5e9",
    "Fixed Income": "#0d9488",
    "Private Debt": "#0369a1",
    "Real Estate": "#8b5cf6",
    Commodities: "#d946ef",
    Cash: "#f97316",
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>

      {/* Portfolio Filter Bar */}
      <div className="border-b border-gray-200 bg-white px-6 py-3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium text-gray-600">Portfolio:</span>
              <span className="text-sm text-gray-800">All Portfolios</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium text-gray-600">As of Date:</span>
              <span className="text-sm text-gray-800">09/30/2023</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium text-gray-600">Security Type:</span>
              <span className="text-sm text-gray-800">Equities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex px-6">
          <button className="border-b-2 border-emerald-600 px-4 py-3 text-sm font-medium text-emerald-600">
            Summary
          </button>
          <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Equity Analytics</button>
          <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Fixed Income</button>
          <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Private Capital</button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 bg-gray-50 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Market Value */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-500">Market Value</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">$3.45 B</div>
              <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                <svg
                  className="h-3 w-3 self-center"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
                <span className="ml-1">(+5.21%)</span>
              </div>
            </div>
          </div>

          {/* Net Cash Flows */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-500">Net Cash Flows (YTD)</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">$182.45 M</div>
              <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                <svg
                  className="h-3 w-3 self-center"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
                <span className="ml-1">(+23.75%)</span>
              </div>
            </div>
          </div>

          {/* Unrealized G/L */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-500">Unrealized G/L</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">$195.32 M</div>
              <div className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                <svg
                  className="h-3 w-3 self-center"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
                <span className="ml-1">(-8.32%)</span>
              </div>
            </div>
          </div>

          {/* Cash */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-500">Cash</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">$72.18 M</div>
              <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                <svg
                  className="h-3 w-3 self-center"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  ></path>
                </svg>
                <span className="ml-1">(+4.53%)</span>
              </div>
            </div>
          </div>
        </div>

  
      </div>
    </div>
  )
}
