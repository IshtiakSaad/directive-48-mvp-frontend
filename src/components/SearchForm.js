'use client';
import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [level, setLevel] = useState('PhD');
  const [field, setField] = useState('');
  const [location, setLocation] = useState('');
  const [extras, setExtras] = useState({
    fullyFunded: false,
    stipend: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    const extrasArr = Object.keys(extras).filter(k => extras[k]);
    onSearch({ level, field, location, extras: extrasArr });
  };

  const handleExtrasChange = e => {
    setExtras({ ...extras, [e.target.name]: e.target.checked });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-md max-w-xl mx-auto space-y-4"
    >
      <div>
        <label className="block font-semibold mb-1">Level</label>
        <select
          value={level}
          onChange={e => setLevel(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
        >
          <option>PhD</option>
          <option>Masters</option>
          <option>Postdoc</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Field</label>
        <input
          type="text"
          value={field}
          onChange={e => setField(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
          placeholder="e.g. Machine Learning"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400"
          placeholder="e.g. Canada"
          required
        />
      </div>

      <div className="flex space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="fullyFunded"
            checked={extras.fullyFunded}
            onChange={handleExtrasChange}
            className="h-4 w-4 accent-blue-600"
          />
          <span>Fully Funded</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="stipend"
            checked={extras.stipend}
            onChange={handleExtrasChange}
            className="h-4 w-4 accent-blue-600"
          />
          <span>Stipend</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
}
