import React from 'react';
import './Main.scss';
import useSound from 'use-sound';
import {kimochiiImage, kimochiiSound} from 'assets/assets';

const Main = () => {
  const [playOn] = useSound(kimochiiSound);

  const [counter, setCounter] = React.useState(0);

  const onClick = () => {
    playOn();

    setCounter((prev) => prev + 1);
  };

  return (
    <div className="main-page">
      <h1 className="header">Kamui Button</h1>
      <div className="content">
        <button type="button" className="button" onClick={onClick}>
          <img alt="kimo" src={kimochiiImage} />
        </button>
      </div>

      {counter > 0 && (
        <p className="text">Times Kimochi Yokatta&apos;d: {counter}</p>
      )}
    </div>
  );
};

export default Main;
