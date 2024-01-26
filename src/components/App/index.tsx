import Gallery from '../Gallery';
import { FC } from 'react';
import '../../styles/global.css';
import Title from '../Title';

const Main: FC = () => {
  return (
    <div className="Main">
      <Title />
      <Gallery />
    </div>
  );
};

export default Main;
