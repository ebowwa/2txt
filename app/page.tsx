/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kHdXWmWgwd0
 */
// app/page.tsx

"use client"

import React, { useState } from 'react';

export default function Component() {
  const [addHeaders, setAddHeaders] = useState(false);
  const [addCellContent, setAddCellContent] = useState(false);
  const [editCellContent, setEditCellContent] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Data Enhancer
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Upload files and enter a prompt to generate AI-powered content.
          </p>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 space-y-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="csv-file"
              >
                CSV File
              </label>
              <div className="mt-1">
                <input
                  accept=".csv"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-indigo-500"
                  id="csv-file"
                  name="csv-file"
                  placeholder="Upload a CSV file"
                  type="file"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="json-file"
              >
                JSON File
              </label>
              <div className="mt-1">
                <input
                  accept=".json"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-indigo-500"
                  id="json-file"
                  name="json-file"
                  placeholder="Upload a JSON file"
                  type="file"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="prompt"
              >
                Prompt
              </label>
              <div className="mt-1">
                <textarea
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-indigo-500"
                  id="prompt"
                  name="prompt"
                  placeholder="Enter your prompt"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-indigo-600 dark:checked:ring-indigo-500"
                id="add-headers"
                type="checkbox"
                checked={addHeaders}
                onChange={(e) => setAddHeaders(e.target.checked)}
              />
              <label
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="add-headers"
              >
                Add headers
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-indigo-600 dark:checked:ring-indigo-500"
                id="add-cell-content"
                type="checkbox"
                checked={addCellContent}
                onChange={(e) => setAddCellContent(e.target.checked)}
              />
              <label
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="add-cell-content"
              >
                Add cell content
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-indigo-600 dark:checked:ring-indigo-500"
                id="edit-cell-content"
                type="checkbox"
                checked={editCellContent}
                onChange={(e) => setEditCellContent(e.target.checked)}
              />
              <label
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="edit-cell-content"
              >
                Edit cell content
              </label>
            </div>
            <div>
              <button
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
                type="submit"
              >
                Generate
              </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}