import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | AG Solutions",
  description:
    "Aviso de privacidad de AG Solutions. Conoce cómo recopilamos, usamos y protegemos tus datos personales.",
  alternates: { canonical: "/privacidad" },
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold">Aviso de Privacidad</h1>

        <p className="text-gray-600">
          En <strong>AG Solutions</strong> respetamos y protegemos la privacidad de
          los datos personales de nuestros usuarios, clientes y visitantes,
          conforme a la legislación aplicable en los Estados Unidos Mexicanos.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Responsable del tratamiento de datos</h2>
          <p className="text-gray-600">
            AG Solutions es responsable del uso y protección de los datos
            personales que nos proporcionas a través de este sitio web.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Datos personales que recopilamos</h2>
          <p className="text-gray-600">
            Los datos que podemos recopilar incluyen, de manera enunciativa mas
            no limitativa:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Número telefónico</li>
            <li>Información relacionada con tu proyecto o solicitud</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Finalidad del uso de los datos</h2>
          <p className="text-gray-600">
            Los datos personales que recopilamos serán utilizados para las
            siguientes finalidades:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Contactarte en respuesta a solicitudes o consultas</li>
            <li>Elaborar propuestas de servicios</li>
            <li>Brindar información relacionada con nuestros servicios</li>
            <li>Dar seguimiento a proyectos o cotizaciones</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Protección de la información</h2>
          <p className="text-gray-600">
            Implementamos medidas de seguridad administrativas, técnicas y
            organizativas para proteger tus datos personales contra daño, pérdida,
            alteración, destrucción o uso no autorizado.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Transferencia de datos</h2>
          <p className="text-gray-600">
            AG Solutions no vende, cede ni transfiere tus datos personales a
            terceros sin tu consentimiento, salvo en los casos previstos por la
            ley.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Derechos ARCO</h2>
          <p className="text-gray-600">
            Tienes derecho a acceder, rectificar, cancelar u oponerte al uso de
            tus datos personales (Derechos ARCO). Para ejercer estos derechos,
            puedes contactarnos a través de nuestro formulario de contacto.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Cambios al aviso de privacidad</h2>
          <p className="text-gray-600">
            Nos reservamos el derecho de modificar este Aviso de Privacidad en
            cualquier momento. Cualquier cambio será publicado en esta misma
            sección.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Aceptación</h2>
          <p className="text-gray-600">
            Al utilizar este sitio web, aceptas los términos del presente Aviso de
            Privacidad.
          </p>
        </section>

        <p className="text-sm text-gray-500 pt-6">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>
      </main>
      <Footer />
    </>
  );
}
