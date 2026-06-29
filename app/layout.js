import "./globals.css";
import {Orbitron, Inter, Fira_Code} from 'next/font/google';
import Sidebar from "./components/Sidebar";
import  Topbar from "./components/Topbar";
import Hero from "./components/Hero";

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
});

export const metadata = {
  title: "Awike G. ~~Web Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oribtron.variable} ${inter.variable} ${firaCode.variable}`}>
      <body>
        <Sidebar/>
        <Topbar/>
        <main style={{marginLeft: '58px' }}>{children}</main>
      </body>
    </html>
  );
}
