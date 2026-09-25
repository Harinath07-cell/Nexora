import React, { useMemo } from 'react';
import { CashFlowEntry } from '../context/CashFlowContext';

interface CashFlowChartProps {
  entries: CashFlowEntry[];
}

export default function CashFlowChart({ entries }: CashFlowChartProps) {
  const chartData = useMemo(() => {
    if (entries.length === 0) return null;

    // Group by month
    const monthlyData: Record<string, { inflow: number; outflow: number }> = {};
    
    entries.forEach(entry => {
      const month = entry.date.substring(0, 7); // YYYY-MM
      if (!monthlyData[month]) {
        monthlyData[month] = { inflow: 0, outflow: 0 };
      }
      if (entry.type === 'inflow') {
        monthlyData[month].inflow += entry.amount;
      } else {
        monthlyData[month].outflow += entry.amount;
      }
    });

    // Convert to array and sort by month
    const data = Object.entries(monthlyData)
      .map(([month, values]) => ({
        month,
        monthLabel: new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
        ...values
      }))
      .sort((a, b) => a.month.localeCompare(b.month));

    return data;
  }, [entries]);

  const totals = useMemo(() => {
    const inflow = entries.filter(e => e.type === 'inflow').reduce((sum, e) => sum + e.amount, 0);
    const outflow = entries.filter(e => e.type === 'outflow').reduce((sum, e) => sum + e.amount, 0);
    const net = inflow - outflow;
    return { inflow, outflow, net };
  }, [entries]);

  if (!chartData || chartData.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📊</span> Cash Flow Chart
        </h3>
        <div className="text-center py-12 text-gray-400">
          <p className="text-5xl mb-4">📈</p>
          <p className="text-lg">No data to display</p>
          <p className="text-sm mt-2">Add cash flow entries to see the chart</p>
        </div>
      </div>
    );
  }

  const maxValue = Math.max(...chartData.map(d => Math.max(d.inflow, d.outflow)));

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">📊</span> Cash Flow Chart
      </h3>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <p className="text-xs text-gray-600 mb-1">Total Inflow</p>
          <p className="text-lg font-bold text-green-700">₹{totals.inflow.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 border border-red-200">
          <p className="text-xs text-gray-600 mb-1">Total Outflow</p>
          <p className="text-lg font-bold text-red-700">₹{totals.outflow.toLocaleString('en-IN')}</p>
        </div>
        <div className={`rounded-lg p-3 border ${totals.net >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'}`}>
          <p className="text-xs text-gray-600 mb-1">Net Cash Flow</p>
          <p className={`text-lg font-bold ${totals.net >= 0 ? 'text-blue-700' : 'text-orange-700'}`}>
            ₹{totals.net.toLocaleString('en-IN')}
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="mb-4">
        <div className="flex items-end justify-between gap-2 h-64 border-b-2 border-gray-200 pb-2">
          {chartData.map((data, index) => {
            const inflowHeight = maxValue > 0 ? (data.inflow / maxValue) * 100 : 0;
            const outflowHeight = maxValue > 0 ? (data.outflow / maxValue) * 100 : 0;

            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div className="flex gap-1 items-end h-full w-full justify-center">
                  {/* Inflow Bar */}
                  <div
                    className="bg-green-500 rounded-t-lg w-6 transition-all duration-500 hover:bg-green-600 relative group"
                    style={{ height: `${inflowHeight}%` }}
                  >
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      Inflow: ₹{data.inflow.toLocaleString('en-IN')}
                    </div>
                  </div>
                  {/* Outflow Bar */}
                  <div
                    className="bg-red-500 rounded-t-lg w-6 transition-all duration-500 hover:bg-red-600 relative group"
                    style={{ height: `${outflowHeight}%` }}
                  >
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      Outflow: ₹{data.outflow.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">{data.monthLabel}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-700">Inflow</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-700">Outflow</span>
        </div>
      </div>
    </div>
  );
}
