import React, { useState } from 'react';
import { useCashFlow, CashFlowEntry } from '../context/CashFlowContext';
import CashFlowForm from './CashFlowForm';
import CashFlowChart from './CashFlowChart';

interface CashFlowDashboardProps {
  userType: 'existingBusiness' | 'newBusiness';
  title: string;
}

export default function CashFlowDashboard({ userType, title }: CashFlowDashboardProps) {
  const { getEntries, addEntry, updateEntry, deleteEntry } = useCashFlow();
  const [showForm, setShowForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState<CashFlowEntry | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'inflow' | 'outflow'>('all');

  const entries = getEntries(userType);
  
  const filteredEntries = entries.filter(entry => 
    filterType === 'all' ? true : entry.type === filterType
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totals = {
    inflow: entries.filter(e => e.type === 'inflow').reduce((sum, e) => sum + e.amount, 0),
    outflow: entries.filter(e => e.type === 'outflow').reduce((sum, e) => sum + e.amount, 0),
  };
  totals.inflow = entries.filter(e => e.type === 'inflow').reduce((sum, e) => sum + e.amount, 0);
  totals.outflow = entries.filter(e => e.type === 'outflow').reduce((sum, e) => sum + e.amount, 0);

  const handleAdd = (entry: Omit<CashFlowEntry, 'id'>) => {
    addEntry(userType, entry);
    setShowForm(false);
  };

  const handleUpdate = (entry: Omit<CashFlowEntry, 'id'>) => {
    if (editingEntry) {
      updateEntry(userType, editingEntry.id, entry);
      setEditingEntry(null);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      deleteEntry(userType, id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">Track your business cash flow</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💰</span>
              <span className="text-sm font-semibold text-gray-600">Total Inflow</span>
            </div>
            <p className="text-2xl font-bold text-green-600">₹{totals.inflow.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💸</span>
              <span className="text-sm font-semibold text-gray-600">Total Outflow</span>
            </div>
            <p className="text-2xl font-bold text-red-600">₹{totals.outflow.toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* Chart */}
        <CashFlowChart entries={entries} />

        {/* Add Entry Button */}
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <span className="text-2xl">+</span>
          Add Cash Flow Entry
        </button>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              filterType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All ({entries.length})
          </button>
          <button
            onClick={() => setFilterType('inflow')}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              filterType === 'inflow'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Inflow ({entries.filter(e => e.type === 'inflow').length})
          </button>
          <button
            onClick={() => setFilterType('outflow')}
            className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
              filterType === 'outflow'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Outflow ({entries.filter(e => e.type === 'outflow').length})
          </button>
        </div>

        {/* Entries List */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800">Recent Entries</h3>
          </div>

          {filteredEntries.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <p className="text-4xl mb-2">📝</p>
              <p>No entries yet</p>
              <p className="text-sm mt-1">Click "Add Cash Flow Entry" to get started</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredEntries.map((entry) => (
                <div key={entry.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          entry.type === 'inflow'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {entry.type === 'inflow' ? '💰 Inflow' : '💸 Outflow'}
                        </span>
                        <span className="text-xs text-gray-500">{entry.category}</span>
                      </div>
                      <p className="font-semibold text-gray-800 truncate">{entry.description}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(entry.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className={`text-lg font-bold ${
                        entry.type === 'inflow' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {entry.type === 'inflow' ? '+' : '-'}₹{entry.amount.toLocaleString('en-IN')}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => setEditingEntry(entry)}
                          className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(entry.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Form Modal */}
      {(showForm || editingEntry) && (
        <CashFlowForm
          onSubmit={editingEntry ? handleUpdate : handleAdd}
          onCancel={() => {
            setShowForm(false);
            setEditingEntry(null);
          }}
          initialData={editingEntry || undefined}
        />
      )}
    </div>
  );
}
