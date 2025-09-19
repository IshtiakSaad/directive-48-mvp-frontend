export default function ResultsList({ results }) {
  if (!results || results.length === 0) return <p className="text-gray-500 mt-4">No results found.</p>;

  return (
    <div className="space-y-4 mt-6">
      {results.map((item, idx) => (
        <div key={idx} className="border rounded p-4 bg-white shadow">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-lg">
            {item.title}
          </a>
          <p className="text-gray-700">{item.snippet}</p>
          <p className="text-sm text-gray-500">{item.institution}</p>
        </div>
      ))}
    </div>
  );
}
