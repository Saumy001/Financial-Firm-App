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

export default function Portfolio() {
  // Market Value Trend data (4/30/2023 to 4/30/2025)
  const marketValueTrendData = [
    { date: "4/30/2023", value: 3200 },
    { date: "5/31/2023", value: 3280 },
    { date: "6/30/2023", value: 3350 },
    { date: "7/31/2023", value: 3420 },
    { date: "8/31/2023", value: 3380 },
    { date: "9/30/2023", value: 3450 },
    { date: "10/31/2023", value: 3520 },
    { date: "11/30/2023", value: 3580 },
    { date: "12/31/2023", value: 3650 },
    { date: "1/31/2024", value: 3720 },
    { date: "2/29/2024", value: 3680 },
    { date: "3/31/2024", value: 3750 },
    { date: "4/30/2024", value: 3820 },
    { date: "5/31/2024", value: 3890 },
    { date: "6/30/2024", value: 3950 },
    { date: "7/31/2024", value: 4020 },
    { date: "8/31/2024", value: 3980 },
    { date: "9/30/2024", value: 4050 },
    { date: "10/31/2024", value: 4120 },
    { date: "11/30/2024", value: 4180 },
    { date: "12/31/2024", value: 4250 },
    { date: "1/31/2025", value: 4320 },
    { date: "2/28/2025", value: 4280 },
    { date: "3/31/2025", value: 4350 },
    { date: "4/30/2025", value: 4420 },
  ]

  // Asset Allocation data (updated values)
  const assetAllocationData = [
    { name: "Equity", value: 38 },
    { name: "Private Equity", value: 25 },
    { name: "Fixed Income", value: 15 },
    { name: "Private Debt", value: 10 },
    { name: "Real Estate", value: 7 },
    { name: "Commodities", value: 3 },
    { name: "Cash", value: 2 },
  ]

  // Asset Allocation Trend data (percentages that add up to 100% for each date)
  const assetAllocationTrendData = [
    {
      date: "4/30/2023",
      Equity: 35,
      "Private Equity": 23,
      "Fixed Income": 17,
      "Private Debt": 12,
      "Real Estate": 8,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "7/31/2023",
      Equity: 36,
      "Private Equity": 24,
      "Fixed Income": 16,
      "Private Debt": 11,
      "Real Estate": 8,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "10/31/2023",
      Equity: 37,
      "Private Equity": 24,
      "Fixed Income": 16,
      "Private Debt": 10,
      "Real Estate": 8,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "1/31/2024",
      Equity: 38,
      "Private Equity": 25,
      "Fixed Income": 15,
      "Private Debt": 10,
      "Real Estate": 7,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "4/30/2024",
      Equity: 39,
      "Private Equity": 25,
      "Fixed Income": 14,
      "Private Debt": 10,
      "Real Estate": 7,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "7/31/2024",
      Equity: 38,
      "Private Equity": 26,
      "Fixed Income": 14,
      "Private Debt": 10,
      "Real Estate": 7,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "10/31/2024",
      Equity: 37,
      "Private Equity": 26,
      "Fixed Income": 15,
      "Private Debt": 10,
      "Real Estate": 7,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "1/31/2025",
      Equity: 38,
      "Private Equity": 25,
      "Fixed Income": 15,
      "Private Debt": 10,
      "Real Estate": 7,
      Commodities: 3,
      Cash: 2,
    },
    {
      date: "4/30/2025",
      Equity: 38,
      "Private Equity": 25,
      "Fixed Income": 15,
      "Private Debt": 10,
      "Real Estate": 7,
      Commodities: 3,
      Cash: 2,
    },
  ]

  // Unrealized G/L by Asset Class data (updated values)
  const unrealizedGLData = [
    { name: "Private Equity", value: 125 },
    { name: "Equity", value: 95 },
    { name: "Private Debt", value: 75 },
    { name: "Fixed Income", value: 35 },
    { name: "Real Estate", value: -15 },
    { name: "Commodities", value: -35 },
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
              <span className="text-sm text-gray-800">04/30/2025</span>
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
              <div className="text-2xl font-bold">$4.42 B</div>
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
                <span className="ml-1">(+7.85%)</span>
              </div>
            </div>
          </div>

          {/* Net Cash Flows */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-500">Net Cash Flows (YTD)</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">$245.67 M</div>
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
                <span className="ml-1">(+18.42%)</span>
              </div>
            </div>
          </div>

          {/* Unrealized G/L */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-500">Unrealized G/L</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">$280.15 M</div>
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
                <span className="ml-1">(+15.73%)</span>
              </div>
            </div>
          </div>

          {/* Cash */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-500">Cash</div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">$88.44 M</div>
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
                <span className="ml-1">(-2.15%)</span>
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
