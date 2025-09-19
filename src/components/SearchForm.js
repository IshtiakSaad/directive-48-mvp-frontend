import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [level, setLevel] = useState('PhD');
  const [field, setField] = useState('');
  const [location, setLocation] = useState('');
  const [extras, setExtras] = useState({
    fullyFunded: false,
    stipend: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const extrasArr = Object.keys(extras).filter((k) => extras[k]);
    onSearch({ level, field, location, extras: extrasArr });
  };

  const handleExtrasChange = (e) => {
    setExtras({ ...extras, [e.target.name]: e.target.checked });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded shadow">
      <div>
        <label className="block font-semibold">Level</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)} className="border rounded p-2 w-full">
          <option>PhD</option>
          <option>Masters</option>
          <option>Postdoc</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Field</label>
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="e.g. Machine Learning"
        />
      </div>

      <div>
        <label className="block font-semibold">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="e.g. Canada"
        />
      </div>

      <div className="flex space-x-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="fullyFunded" checked={extras.fullyFunded} onChange={handleExtrasChange} />
          <span>Fully Funded</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="stipend" checked={extras.stipend} onChange={handleExtrasChange} />
          <span>Stipend</span>
        </label>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
