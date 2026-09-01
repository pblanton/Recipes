import { NavLink } from 'react-router-dom';
import referencesData from '../references-index.json';

const references = referencesData as { slug: string; title: string }[];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-heading">References</p>
      <nav>
        {references.map(ref => (
          <NavLink
            key={ref.slug}
            to={`/reference/${ref.slug}`}
            className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
          >
            {ref.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
