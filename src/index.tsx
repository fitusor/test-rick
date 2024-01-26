import { createRoot } from 'react-dom/client';
import './styles/global.css';
import Main from '../src/components/Main';

const rootElement = document.getElementById('root') as HTMLElement;
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(<Main />);
