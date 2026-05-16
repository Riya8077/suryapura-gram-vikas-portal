import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-green-100 bg-white py-10">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        
        <div>
          <h3 className="text-lg font-bold text-green-800">
            सूर्यपुरा ग्राम विकास पोर्टल
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            डिजिटल गांव, सशक्त नागरिक
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Suryapura Rural Development Demo
        </p>
      </Container>
    </footer>
  );
}