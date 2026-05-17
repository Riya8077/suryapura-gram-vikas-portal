"use client";

import Container from "../shared/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        
        {/* LOGO */}
        <div>
          <h1 className="text-2xl font-black text-green-800">
            सूर्यपुरा
          </h1>

          <p className="text-xs text-gray-500">
            ग्राम विकास पोर्टल
          </p>
        </div>

        {/* NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            होम
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            सेवाएं
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            योजनाएं
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            पंचायत
          </a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          
          {/* LOGIN */}
          <button className="bg-green-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-800">
            डिजिटल लॉगिन
          </button>
        </div>
      </Container>
    </header>
  );
}