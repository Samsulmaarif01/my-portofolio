import Hero from "./components/Hero";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* <Navbar /> */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        {/* <AchievementsSection /> */}
        {/* <AboutSection /> */}
        {/* <ProjectsSection /> */}
        {/* <EmailSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
    // </div>
  );
}
