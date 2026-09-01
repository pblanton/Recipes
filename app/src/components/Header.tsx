import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" className="site-title">Blanton Family Recipe Binder</Link>
    </header>
  );
}
