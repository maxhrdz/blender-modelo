import { useState } from 'react';
import { motion } from 'framer-motion';

// Formulario de contacto con validación básica
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, ingresa tu nombre.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Cuéntanos cómo podemos ayudarte.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="section-title">Conversemos sobre tu próximo proyecto</h2>
          <p className="section-subtitle mx-auto">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas hábiles.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="card mx-auto mt-16 max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-primary">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-2 w-full rounded-2xl border border-primary/10 bg-light px-4 py-3 text-base text-primary shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                errors.name ? 'border-red-400' : ''
              }`}
              placeholder="Ingresa tu nombre"
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-primary">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-2 w-full rounded-2xl border border-primary/10 bg-light px-4 py-3 text-base text-primary shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                errors.email ? 'border-red-400' : ''
              }`}
              placeholder="tucorreo@empresa.com"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`mt-2 w-full rounded-2xl border border-primary/10 bg-light px-4 py-3 text-base text-primary shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                errors.message ? 'border-red-400' : ''
              }`}
              placeholder="Cuéntanos tus necesidades o retos"
            />
            {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Enviar mensaje
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-medium text-green-600"
            >
              ¡Gracias por escribirnos! Te contactaremos muy pronto.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
