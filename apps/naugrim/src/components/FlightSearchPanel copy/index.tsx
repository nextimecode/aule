'use client'

import { useState } from 'react'

export const FlightSearchPanel = () => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  return (
    <div
      id="json-example-with-tab-filter-in-dropdown-tab-preview-markup"
      className="border rounded-xl shadow-sm p-6 dark:bg-slate-800 dark:border-gray-700"
    >
      <div className="max-w-sm">
        <div
          className="relative"
          data-hs-combo-box='{
          "groupingType": "tabs",
          "isOpenOnFocus": true,
          "apiUrl": "https://fakestoreapi.com/products",
          "apiGroupField": "category",
          "outputItemTemplate": "<div className=\"cursor-pointer p-2 space-y-0.5 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-gray-200 dark:focus:bg-slate-700\" data-hs-combo-box-output-item><div className=\"flex justify-between items-center w-full\"><div data-hs-combo-box-output-item-field=\"title\" data-hs-combo-box-search-text data-hs-combo-box-value></div></div></div><span className=\"hidden hs-combo-box-selected:block\"><svg className=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg></span></img></div>",
          "groupingTitleTemplate": "<button type=\"button\" className=\"capitalize py-1 px-2 inline-flex items-center gap-x-2 text-sm text-nowrap rounded-md border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 hs-combo-box-tab-active:bg-blue-600 hs-combo-box-tab-active:border-blue-600 hs-combo-box-tab-active:focus:border-blue-600 hs-combo-box-tab-active:text-white disabled:opacity-50 disabled:pointer-events-none dark:hs-combo-box-tab-active:bg-blue-500 dark:hs-combo-box-tab-active:text-white dark:hs-combo-box-tab-active:border-blue-500 dark:hs-combo-box-tab-active:focus:border-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:bg-gray-700\"></button>",
          "tabsWrapperTemplate": "<div className=\"overflow-x-auto p-4 rounded-t-xl border-b border-gray-200 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-gray-700 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 dark:bg-slate-800 dark:border-gray-700\"></div>"
        }'
        >
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
              <svg
                className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <input
              className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              type="text"
              placeholder="Type a product name"
              value={inputValue}
              onChange={handleInputChange}
              data-hs-combo-box-input=""
            />
          </div>
          <div
            className="absolute z-50 w-full bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-gray-800 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]"
            style={{ display: 'none' }}
            data-hs-combo-box-output=""
          >
            <div
              className="max-h-[300px] p-2 rounded-b-xl overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-gray-700 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 dark:bg-slate-800"
              data-hs-combo-box-output-items-wrapper=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
