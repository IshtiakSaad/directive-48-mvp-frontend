// app/layout.js
import '../styles/globals.css'; // Tailwind or global CSS

export const metadata = {
  title: 'Directive 48',
  description: 'AI-powered search for academic opportunities',
};

// ✅ Make sure this is a React component returning JSX
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
