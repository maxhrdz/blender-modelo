import { motion } from 'framer-motion';

// Pie de página con datos de contacto y redes sociales
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-primary/10 bg-primary text-light"
    >
      <div className="section-padding mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Visionaria</h3>
          <p className="max-w-sm text-sm text-light/70">
            Soluciones estratégicas para marcas que desean liderar la transformación digital con impacto y cercanía.
          </p>
        </div>

        <div className="flex flex-1 flex-wrap gap-10 text-sm text-light/80">
          <div>
            <p className="font-semibold text-light">Contacto</p>
            <p className="mt-3">Av. Innovación 450, CDMX</p>
            <a href="mailto:hola@visionaria.studio" className="mt-1 block hover:text-accent">
              hola@visionaria.studio
            </a>
            <a href="tel:+525511223344" className="hover:text-accent">
              +52 55 1122 3344
            </a>
          </div>

          <div>
            <p className="font-semibold text-light">Síguenos</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="https://www.linkedin.com" className="hover:text-accent" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="hover:text-accent" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="hover:text-accent" target="_blank" rel="noreferrer">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-light/60">
        © {new Date().getFullYear()} Visionaria Studio. Todos los derechos reservados.
      </div>
    </motion.footer>
  );
};

export default Footer;
