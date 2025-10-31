import { motion } from 'framer-motion';

// Sección sobre nosotros con imagen y texto
const About = () => {
  return (
    <section id="nosotros" className="section-padding">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="section-title">Nuestro equipo, tu aliado estratégico</h2>
          <p className="text-lg text-muted">
            Somos consultores, creativos y tecnólogos que creen en el poder de las experiencias memorables. Durante más de diez
            años hemos acompañado a organizaciones a reinventarse y a construir productos digitales que sus clientes aman.
          </p>
          <div className="grid gap-6 text-sm font-medium text-primary/80 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="text-3xl font-semibold text-primary">+120</p>
              <span className="mt-2 block text-muted">Proyectos entregados</span>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="text-3xl font-semibold text-primary">15</p>
              <span className="mt-2 block text-muted">Expertos especializados</span>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="text-3xl font-semibold text-primary">4.9/5</p>
              <span className="mt-2 block text-muted">Índice de satisfacción</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-accent/30 to-primary/20 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=80"
            alt="Equipo de profesionales en reunión"
            className="relative z-10 w-full rounded-[2.5rem] shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
