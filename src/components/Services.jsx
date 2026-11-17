import { motion } from 'framer-motion';

const services = [
  {
    title: 'Consultoría Estratégica',
    description:
      'Detectamos oportunidades clave y diseñamos planes de acción personalizados para acelerar el crecimiento de tu empresa.',
    icon: '📈',
  },
  {
    title: 'Transformación Digital',
    description:
      'Implementamos soluciones tecnológicas que optimizan procesos y mejoran la eficiencia operativa.',
    icon: '💡',
  },
  {
    title: 'Marketing & Experiencia',
    description:
      'Creamos campañas y experiencias digitales que conectan con tus clientes en cada punto de contacto.',
    icon: '🎯',
  },
  {
    title: 'Analítica Avanzada',
    description:
      'Medimos el impacto de cada iniciativa para tomar decisiones basadas en datos reales y accionables.',
    icon: '📊',
  },
];

// Sección de servicios con tarjetas animadas
const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="section-title">Soluciones pensadas para liderar</h2>
          <p className="section-subtitle mx-auto">
            Un equipo multidisciplinario con foco en resultados tangibles y relaciones de largo plazo.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="mt-6 text-2xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-4 text-base text-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
