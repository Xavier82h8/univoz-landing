import ReactMarkdown from 'react-markdown';
import accessibilityDocument from './accessibilityDocument.md?raw';
import Footer from '../../shared/layout/Footer/Footer';
import Navbar from '../../shared/layout/Navbar/Navbar';
import SocialRail from '../../shared/layout/SocialRail/SocialRail';
import '../legal/LegalPage.css';

export default function AccessibilityPage() {
  return (
    <>
      <Navbar homeHref="/" />
      <SocialRail />
      <main className="legal-page">
        <article className="legal-document container">
          <div className="legal-document__content">
            <ReactMarkdown>{accessibilityDocument}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer homeHref="/" />
    </>
  );
}
