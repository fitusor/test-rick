import { createRoot } from 'react-dom/client';
import Main from './components/App';
import './styles/global.css';

const rootElement = document.getElementById('root') as HTMLElement;
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(<Main />);
