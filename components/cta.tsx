import Image from 'next/image';
import BlurredShape from '@/public/images/blurred-shape.svg';

const contactInfo = {
  whatsappNumber: '50685011430',
  whatsappMessage: 'Hola, quiero cotizar un servicio con su empresa.',
  email: 'contacto@tuempresa.com',
};

export default function Cta() {
  const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Forma difusa"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div
          className="py-12 md:py-20"
          style={{
            background: `
              radial-gradient(circle at center,
                rgba(0, 0, 0, 0) 60%,
                rgba(0, 0, 0, 0.7) 85%,
                rgba(0, 0, 0, 0.95) 100%
              ),
              linear-gradient(90deg,
                rgba(0, 0, 0, 0.8) 0%,
                #1e3a8a 20%,
                #3b82f6 40%,
                #8b5cf6 60%,
                #7c3aed 80%,
                rgba(0, 0, 0, 0.8) 100%
              )
            `,
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-nacelle animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Súmate a esta revolución
            </h2>

            <div className="mx-auto max-w-xs gap-4 sm:flex sm:max-w-none sm:justify-center">
              {/* Botón Enviar Email */}
              <div data-aos="fade-up" data-aos-delay={400} className="w-full sm:w-auto">
                <a
                  href={`mailto:${contactInfo.email}?subject=Contacto%20desde%20sitio%20web`}
                  className="mb-4 w-full rounded-md bg-indigo-700 px-6 py-4 text-center font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-800 hover:shadow-2xl active:scale-100 sm:mb-0"
                >
                  Enviar Email &rarr;
                </a>
              </div>

              {/* Botón Contáctanos - WhatsApp */}
              <div data-aos="fade-up" data-aos-delay={600} className="w-full sm:w-auto">
                <a
                  href={whatsappLink}
                  className="mb-4 w-full rounded-md bg-purple-600 px-6 py-4 text-center font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-purple-700 hover:shadow-2xl active:scale-100 sm:mb-0"
                >
                  Contáctanos &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
