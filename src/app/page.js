'use client';

import { useState } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import ResultsList from '../components/ResultsList';
import Hero from '@/components/Hero';

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (params) => {
    setLoading(true);
    setError('');
    try {
      console.log('Search params:', params);
      const res = await axios.post('http://localhost:5000/api/search', params);
      console.log('API response:', res.data);
      setResults(res.data.results);
      if (!res.data.results.length) setError('No opportunities found.');
    } catch (err) {
      console.error(err);
      setError('Failed to fetch results. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <Hero/>

      <SearchForm onSearch={handleSearch} />

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-8">
          <div className="w-12 h-12 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error Message */}
      {error && !loading && (
        <p className="mt-6 text-center text-red-500 font-medium">{error}</p>
      )}

      {/* Results */}
      <div className='max-w-4xl mx-auto px-6 py-10'>
          {!loading && !error && <ResultsList results={results} />}
      </div>
      
    </main>
  );
}
