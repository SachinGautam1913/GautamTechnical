"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.serviceId;

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <section className="pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Service <span className="text-accent">{serviceId}</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            Book this service and let us help you achieve your goals.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
