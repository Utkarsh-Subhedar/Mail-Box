export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          📬 Mail Box Project
        </h1>
        <p className="text-gray-600 mb-6">
          Your React + Vite + Tailwind setup is working perfectly!
        </p>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200 cursor-pointer">
          Compose Email
        </button>
      </div>
    </div>
  );
}
