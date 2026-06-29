import "./globals.css";
import {Orbitron, Inter, Fira_Code} from 'next/font/google';
import Sidebar from "./components/Sidebar";
import  Topbar from "./components/Topbar";
import Hero from "./components/Hero";


export const metadata = {
  title: "Awike G. ~~Web Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Sidebar/>
        <Topbar/>
        <main style={{marginLeft: '58px' }}>{children}</main>
      </body>
    </html>
  );
}
