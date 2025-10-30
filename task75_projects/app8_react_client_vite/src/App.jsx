import React, { useEffect, useState } from 'react'
import api from './api/axios'

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setLoading(true)
    api.get('/api/data')
      .then(res => setData(res.data))
      .catch(e => setErr(e.message || 'error'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">React + Vite Client</h1>
        <p className="text-sm text-gray-600 mb-4">This client is preconfigured to talk to <code>http://localhost:5005</code></p>
        {loading && <div>Loading...</div>}
        {err && <div className="text-red-500">Error: {err}</div>}
        {data && (
          <div className="space-y-3">
            <div className="text-green-600 font-medium">{data.message}</div>
            <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(data.mergedData, null, 2)}</pre>
            <div className="mt-2">
              <strong>Sample from external API:</strong>
              <pre className="bg-gray-100 p-3 rounded">{JSON.stringify(data.sample, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
