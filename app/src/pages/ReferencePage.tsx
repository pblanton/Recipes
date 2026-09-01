import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import referencesData from '../references-index.json';

const references = referencesData as { slug: string; title: string; content: string }[];

export default function ReferencePage() {
  const { slug } = useParams<{ slug: string }>();
  const ref = references.find(r => r.slug === slug);

  if (!ref) return <Navigate to="/" replace />;

  return (
    <div className="container recipe-view">
      <Link to="/" className="back-link">← All Recipes</Link>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{ref.content}</ReactMarkdown>
    </div>
  );
}
