import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ana Rodríguez',
    role: 'Directora de Innovación, Grupo Aura',
    quote:
      'Visionaria nos ayudó a rediseñar nuestro ecosistema digital y triplicamos la conversión en menos de seis meses. Su acompañamiento fue impecable.',
  },
  {
    name: 'Martín López',
    role: 'CEO, FinNova',
    quote:
      'La sinergia entre estrategia y ejecución nos permitió lanzar nuevos productos al mercado con rapidez y foco en el usuario.',
  },
  {
    name: 'Camila Ortega',
    role: 'CMO, Retail Pro',
    quote:
      'Un equipo altamente comprometido. Nos guiaron con claridad en cada fase del proyecto y los resultados superaron nuestras expectativas.',
  },
];

// Testimonios de clientes satisfechos
const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="section-title">Historias de éxito</h2>
          <p className="section-subtitle mx-auto">
            Empresas que confían en nosotros para alcanzar sus objetivos más ambiciosos.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              className="card flex h-full flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <p className="text-lg text-primary/90">“{testimonial.quote}”</p>
              <footer className="mt-6">
                <p className="text-base font-semibold text-primary">{testimonial.name}</p>
                <span className="text-sm text-muted">{testimonial.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
