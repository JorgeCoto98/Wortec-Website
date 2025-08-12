import Image, { StaticImageData } from 'next/image';
import { contactInfo } from "@/app/constants/contactInfo";
import ServiceDevelop from '@/public/images/DevelopService01.png';
import MaintenanceService from '@/public/images/MaintenanceService.png';
import ServiceSPA from '@/public/images/SPAService.png';
import ServiceConect from '@/public/images/NetworkService.png';
import IAService from '@/public/images/IAService.png';
import SmartService from '@/public/images/SmartService.png';
import CyberService from '@/public/images/CyberService.png';
import ConsultService from '@/public/images/ConsultoriaService.png';

interface ServiceCardData {
  title: string;
  description: string;
  image: StaticImageData;
  badge: string;
}

const services: ServiceCardData[] = [
  {
    title: 'Desarrollo de Software a Medida',
    description:
      'Creamos aplicaciones y sistemas adaptados a las necesidades específicas de tu negocio, desde sitios web hasta plataformas complejas.',
    image: ServiceDevelop, // imagen: laptop con código, desarrollador programando
    badge: 'Software a medida',
  },
  {
    title: 'Aplicaciones SPA',
    description:
      'Desarrollamos aplicaciones de página única rápidas y optimizadas para una experiencia de usuario fluida.',
    image: ServiceSPA, // imagen: dashboard moderno, UI/UX
    badge: 'SPA',
  },
  {
    title: 'Mantenimiento de TI y Ofimática',
    description:
      'Soporte técnico, optimización de equipos y soluciones de ofimática para garantizar un rendimiento óptimo.',
    image: MaintenanceService, // imagen: técnico revisando computadora
    badge: 'Mantenimiento TI',
  },
  {
    title: 'Servicios y Redes',
    description:
      'Diseño, instalación y mantenimiento de redes cableadas e inalámbricas para empresas y hogares.',
    image: ServiceConect, // imagen: racks de servidores o cables de red
    badge: 'Redes',
  },
  {
    title: 'Integración de Inteligencia Artificial',
    description:
      'Implementamos soluciones de IA para automatizar procesos, analizar datos y potenciar la toma de decisiones.',
    image: IAService, // imagen: cerebro digital o icono IA
    badge: 'IA',
  },
  {
    title: 'Dispositivos Inteligentes',
    description:
      'Instalamos y configuramos sistemas de domótica y dispositivos inteligentes para tu hogar o empresa.',
    image: SmartService, // imagen: casa inteligente o IoT
    badge: 'Smart Devices',
  },
  {
    title: 'Ciberseguridad',
    description:
      'Protegemos tus sistemas y datos contra amenazas con soluciones avanzadas de seguridad digital.',
    image: CyberService, // imagen: candado digital o firewall
    badge: 'Ciberseguridad',
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Asesoría experta para definir estrategias tecnológicas que impulsen tu negocio.',
    image: ConsultService, // imagen: reunión de consultores o plan estratégico
    badge: 'Consultoría',
  },
];

export default function Services() {

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Servicios inteligentes a tu medida
              </span>
            </div>
            <h2 className="font-nacelle animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 text-3xl font-semibold text-transparent md:text-4xl">
              Soluciones digitales que impulsan tu crecimiento
            </h2>
            <p className="text-lg text-indigo-200/65">
              Innovamos contigo para crear experiencias únicas, optimizando procesos y ampliando tu
              alcance.
            </p>
          </div>

          {/* Cards dinámicas */}
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 sm:max-w-md sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => {
              // Construir mensaje para WhatsApp y URL encode
              const message = `Hola, quiero cotizar el servicio de "${service.title}" con su empresa.`;
              const encodedMessage = encodeURIComponent(message);
              const whatsappLink = `${contactInfo.whatsappLink}?text=${encodedMessage}`;

              return (
                <div
                  key={index}
                  className="group relative flex w-full max-w-[350px] flex-col items-center rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Imagen */}
                  <div className="mb-6 h-[200px] w-full overflow-hidden rounded-xl brightness-50 filter transition duration-300 group-hover:brightness-110">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 px-4 py-1 text-sm font-semibold text-white shadow-md">
                    {service.badge}
                  </span>

                  {/* Título */}
                  <h3 className="mb-3 text-center text-2xl leading-snug font-bold text-white">
                    {service.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-center text-base leading-relaxed text-indigo-300/90">
                    {service.description}
                  </p>

                  {/* Botón Solicitar servicio (como enlace) */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block w-full rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 py-2 text-center text-white shadow-md transition-colors hover:from-purple-500 hover:via-purple-600 hover:to-purple-700"
                  >
                    Solicitar servicio
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
