import Gallery from '../Gallery';
import { FC } from "react";
import '../../styles/global.css';

const Main: FC = () => {
  return (
    <div className="Main">
      <h1>Rick and Morty Character Gallery</h1>
      <Gallery />
    </div>
  );
};

export default Main;