'use client';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";

export default function Home() {
  return (
  <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
  </>
  );
}
