'use client';

export default function ResultsList({ results }) {
  if (!results || results.length === 0) {
    return <p className="text-gray-400 text-center mt-6">No results found.</p>;
  }

  return (
    <div className="grid gap-6 mt-6 sm:grid-cols-1 md:grid-cols-2">
      {results.map((item, index) => (
        <div
          key={index}
          className="bg-gray-600/20 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold text-lg hover:text-blue-400 hover:underline transition-colors duration-200"
          >
            {item.title}
          </a>
          <p className="text-gray-300 mt-2 text-sm">{item.snippet}</p>
          <p className="text-gray-400 mt-1 text-xs">{item.institution}</p>
        </div>
      ))}
    </div>
  );
}
