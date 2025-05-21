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

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Market Value Trend */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-base font-medium text-gray-700">Market Value Trend</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketValueTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return date.toLocaleDateString("en-US", { month: "numeric", year: "2-digit" })
                    }}
                  />
                  <YAxis
                    domain={["dataMin - 100", "dataMax + 100"]}
                    tickFormatter={(value) => `${value.toLocaleString()}`}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(value) => [`$${value.toLocaleString()} M`, "Market Value"]}
                    labelFormatter={(label) => `Date: ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#0ea5e9"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <area type="monotone" dataKey="value" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorValue)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-base font-medium text-gray-700">Asset Allocation</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={assetAllocationData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {assetAllocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.name] || "#000"} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Asset Allocation Trend */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-base font-medium text-gray-700">Asset Allocation Trend</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={assetAllocationTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, ""]} />
                  <Area
                    type="monotone"
                    dataKey="Equity"
                    stackId="1"
                    stroke={COLORS["Equity"]}
                    fill={COLORS["Equity"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="Private Equity"
                    stackId="1"
                    stroke={COLORS["Private Equity"]}
                    fill={COLORS["Private Equity"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="Fixed Income"
                    stackId="1"
                    stroke={COLORS["Fixed Income"]}
                    fill={COLORS["Fixed Income"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="Private Debt"
                    stackId="1"
                    stroke={COLORS["Private Debt"]}
                    fill={COLORS["Private Debt"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="Real Estate"
                    stackId="1"
                    stroke={COLORS["Real Estate"]}
                    fill={COLORS["Real Estate"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="Commodities"
                    stackId="1"
                    stroke={COLORS["Commodities"]}
                    fill={COLORS["Commodities"]}
                  />
                  <Area type="monotone" dataKey="Cash" stackId="1" stroke={COLORS["Cash"]} fill={COLORS["Cash"]} />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Unrealized G/L by Asset Class */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-base font-medium text-gray-700">Unrealized G/L by Asset Class</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={unrealizedGLData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}M`} />
                  <Tooltip formatter={(value) => [`$${value}M`, "Unrealized G/L"]} />
                  <Bar dataKey="value">
                    {unrealizedGLData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.value >= 0 ? COLORS[entry.name] || "#0ea5e9" : "#ef4444"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
