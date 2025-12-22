"use client"
import { useEffect, useState } from "react";
import Header from "@/app/Componenets/LandingPage/Header";
import Features from "@/app/Componenets/LandingPage/Features";
import UsePart from "@/app/Componenets/LandingPage/UsePart";
import PriceFee from "@/app/Componenets/LandingPage/PriceFee";
import Footer from "@/app/Componenets/LandingPage/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import ConnectWalletButton from "@/app/Componenets/LaunchToken/ConnectWalletButton";
import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/assets/8.png";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixedHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen montserrat bg-black text-white">
      {/* Header */}
      <div className={`w-full z-50 backdrop-blur-2xl duration-300 ${isFixedHeader ? "fixed top-0  shadow-lg " : "relative"}`}>
        <div className={`mx-auto w-8/10 h-[100px] flex items-center justify-between px-25 
      max-xl:p-10 max-md:w-9/10 max-md:h-20
      ${isFixedHeader ? "border-x-0" : "border-x-fuchsia-600 border-x-1"} 
      transition-shadow duration-300`}>          
          <a href="">
            <Image src={mainLogo} alt="logo" className="w-25 h-21 shrink-0 hover:cursor-pointer max-md:w-18 max-md:h-16" />
          </a>

          {/* Desktop Menu */}
          <div className="px-10 py-7 gap-16 flex items-center max-[1450px]:gap-6 text-white max-[1150px]:hidden">
            <Link href="/" className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 font-bold truncate">Home</Link>
            <Link href="/LaunchToken" className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 font-bold truncate">Launch MEME</Link>
            <Link href="/MarketMaker" className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 font-bold truncate">Market Maker</Link>
            <a href="#contact" className="hover:text-fuchsia-500 active:text-indigo-400 transition duration-200 font-bold truncate">Contact Us</a>
          </div>

          {/* Connect Button */}
          <div className="flex items-center gap-6">
            <div className="flex items-center border-1 rounded-xl max-[1150px]:hidden gap-2 relative border-transparent">
              <ConnectWalletButton />
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <RxHamburgerMenu
            className="text-4xl text-[#8c52ff] hover:cursor-pointer min-[1150px]:hidden active:text-[#833ad6]"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-screen w-[300px] bg-gray-900 text-white z-[100] transition-transform duration-300 ease-in-out ${showSidebar ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col gap-6 p-8 text-lg font-semibold">
          <button onClick={() => setShowSidebar(false)} className="self-end text-2xl mb-4 hover:text-fuchsia-500">✕</button>
          <Link href="/" className="hover:text-fuchsia-400" onClick={() => setShowSidebar(false)}>Home</Link>
          <Link href="/LaunchToken" className="hover:text-fuchsia-400" onClick={() => setShowSidebar(false)}>Launch MEME</Link>
          <Link href="/MarketMaker" className="hover:text-fuchsia-400" onClick={() => setShowSidebar(false)}>Market Maker</Link>
          <a href="#contact" className="hover:text-fuchsia-400" onClick={() => setShowSidebar(false)}>Contact Us</a>
          <div className="mt-4">
            <ConnectWalletButton />
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="w-full border-t-1 border-t-fuchsia-600">
        <Header />
        <Features />
        <UsePart />
        <PriceFee />
        <Footer />
      </div>
    </main>
  );
}
