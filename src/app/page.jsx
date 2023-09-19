import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import NewsContainer from "@/components/NewsContainer";

export default function HomePage() {
  return (
    <main className="bg-cyan-950 py-4">
      <div className="container mx-auto px-4 lg:flex">
        <Hero />
        <Sidebar />
      </div>
      <div className="container mx-auto px-4">
        <hr className="border-1 border-gray-200 mt-6 mb-4" />
      </div>
      <h2 className="text-4xl pb-2 font-bold text-center underline underline-offset-8 decoration-amber-400">
        Noticias
      </h2>
      <NewsContainer />
    </main>
  );
}
