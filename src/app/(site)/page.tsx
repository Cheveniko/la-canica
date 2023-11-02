import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/layout/Hero";
import NewsContainer from "@/components/layout/NewsContainer";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div>
      <div className="container mx-auto px-4 lg:flex">
        <Hero />
        <Sidebar />
      </div>
      <div className="container mx-auto px-4">
        <hr className="border-1 mb-4 mt-6 border-gray-200" />
      </div>
      <h2 className="pb-2 text-center text-4xl font-bold underline decoration-amber-400 underline-offset-8">
        Noticias
      </h2>
      <NewsContainer />
    </div>
  );
}
