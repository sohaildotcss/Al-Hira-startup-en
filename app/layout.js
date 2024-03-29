import './globals.css';
import { Inter } from 'next/font/google';
// import { GeistSans } from 'geist/font/sans';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Al Hira Islamic Academy',
  description: 'Built by Sohail',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="select-none">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
