'use client'; // Needed for hooks / client-side interactivity

import { useState } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import ResultsList from '../components/ResultsList';

export default function HomePage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (params) => {
    setLoading(true);
    console.log(params);
    try {
      const res = await axios.post('http://localhost:5000/api/search', params);
      console.log(res);
      setResults(res.data.results);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Directive 48 — AI-Driven Semantic Search for Global Academic Opportunities</h1>
      <SearchForm onSearch={handleSearch} />
      {loading ? <p className="mt-4">Loading...</p> : <ResultsList results={results} />}
    </main>
  );
}
