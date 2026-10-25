import './Button.css';

export default function Button({ variant = 'solid', as: Tag = 'a', className = '', ...props }) {
  return <Tag className={`btn btn--${variant} ${className}`} {...props} />;
}
