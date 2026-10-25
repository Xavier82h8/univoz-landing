import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { FiSearch } from 'react-icons/fi';
import Footer from '../../shared/layout/Footer/Footer';
import Navbar from '../../shared/layout/Navbar/Navbar';
import SocialRail from '../../shared/layout/SocialRail/SocialRail';
import { scrollRevealProps } from '../../shared/animations/scrollReveal';
import { faqItems } from './faqData';
import './FAQPage.css';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <motion.article
      className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
      onClick={onToggle}
      {...scrollRevealProps}
    >
      <button
        className="faq-item__toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={(event) => {
          event.stopPropagation();
          onToggle();
        }}
      >
        {question}
      </button>
      <div className="faq-answer">
        <div className="faq-answer__inner">
          <p>{answer}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function FAQPage() {
  const [query, setQuery] = useState('');
  const [openQuestions, setOpenQuestions] = useState(() => new Set());
  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es');
    if (!normalizedQuery) return faqItems;
    return faqItems.filter(({ question, answer }) =>
      `${question} ${answer}`.toLocaleLowerCase('es').includes(normalizedQuery),
    );
  }, [query]);
  const faqColumns = useMemo(() => {
    return [
      filteredItems.filter((_, index) => index % 2 === 0),
      filteredItems.filter((_, index) => index % 2 !== 0),
    ];
  }, [filteredItems]);

  const toggleQuestion = (question) => {
    setOpenQuestions((open) => {
      const next = new Set(open);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  };

  return (
    <>
      <Navbar homeHref="/" />
      <SocialRail />
      <main className="faq-page">
        <motion.section className="faq-hero container" aria-labelledby="faq-title" {...scrollRevealProps}>
          <span className="faq-hero__eyebrow">Preguntas frecuentes</span>
          <h1 id="faq-title">¿En qué podemos ayudarte?<span>.</span></h1>
          <label className="faq-search">
            <FiSearch aria-hidden="true" />
            <span className="sr-only">Buscar preguntas frecuentes</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar una pregunta..."
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Limpiar búsqueda">
                Limpiar
              </button>
            )}
          </label>
        </motion.section>

        <section className="faq-content container" aria-label="Respuestas a preguntas frecuentes">
          <div className="faq-list" aria-live="polite">
            {faqColumns.map((column, columnIndex) => (
              <div className="faq-column" key={columnIndex}>
                {column.map(({ question, answer }) => (
                  <FAQItem
                    key={question}
                    question={question}
                    answer={answer}
                    isOpen={openQuestions.has(question)}
                    onToggle={() => toggleQuestion(question)}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="faq-list faq-list--mobile" aria-live="polite">
            {filteredItems.map(({ question, answer }) => (
              <FAQItem
                key={question}
                question={question}
                answer={answer}
                isOpen={openQuestions.has(question)}
                onToggle={() => toggleQuestion(question)}
              />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="faq-empty">
              <h2>No encontramos esa pregunta</h2>
              <p>Prueba con otras palabras o escríbenos a <a href="mailto:Aov2002@outlook.com">Aov2002@outlook.com</a>.</p>
            </div>
          )}
          {filteredItems.length > 0 && (
            <motion.p className="faq-contact" {...scrollRevealProps}>
              ¿Sigues con dudas? <a href="mailto:Aov2002@outlook.com">Escríbenos y te ayudamos</a>
            </motion.p>
          )}
        </section>
      </main>
      <Footer homeHref="/" />
    </>
  );
}
