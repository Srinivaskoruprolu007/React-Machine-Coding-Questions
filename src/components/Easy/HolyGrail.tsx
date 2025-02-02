import React from "react";

const HolyGrail: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 text-center">Header</header>
      {/* Main content */}
      <div className="flex flex-1">
        <aside className="w-1/4 bg-gray-200 p-4">Sidebar left</aside>
        <main className="flex-1 p-4 bg-white">Main content</main>
        <aside className="w-1/4 bg-gray-200 p-4">Sidebar right</aside>
      </div>
      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4 text-center">Footer</footer>
    </div>
  );
};

export default HolyGrail;
