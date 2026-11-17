import { motion } from 'framer-motion';

// Sección hero con titular, texto y CTA
const Hero = () => {
  return (
    <section id="inicio" className="section-padding pt-36 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-accent shadow-soft">
            Estrategia + Tecnología
          </span>
          <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
            Creamos experiencias digitales que impulsan tu negocio.
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Acompañamos a empresas ambiciosas con soluciones tecnológicas que elevan sus ventas, optimizan procesos y fortalecen la relación con sus clientes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              Contáctanos
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-primary/10 px-6 py-3 text-base font-semibold text-primary shadow-soft transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Saber más
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1529338296731-c4280a2cf3ef?auto=format&fit=crop&w=900&q=80"
            alt="Equipo creativo colaborando"
            className="relative z-10 w-full max-w-md rounded-[2.5rem] shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
