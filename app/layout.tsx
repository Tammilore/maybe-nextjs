import './globals.css'; 
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Maybe: The OS for your personal finances",
  description: "Maybe: The OS for your personal finances",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-gray-25 to-gray-50">
        <Header />
        <main className="max-w-5xl px-3 mx-auto my-10 md:px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
