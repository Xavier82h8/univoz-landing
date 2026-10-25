import './PhoneMockup.css';

export default function PhoneMockup({ className = '', label = 'Pantalla de teléfono vacía', children }) {
  return (
    <div className={`phone ${className}`} role="img" aria-label={label}>
      <span className="phone__notch" />
      <div className="phone__screen">{children}</div>
    </div>
  );
}
