import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | AG Solutions",
  description: "Solicita una propuesta o resuelve tus dudas. Respondemos pronto.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-14 space-y-10">
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cuéntame de tu proyecto y te respondo con una propuesta clara.
          </p>
        </header>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
