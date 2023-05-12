import React from 'react';
import Main from './components/Main';
import Header from './components/Header/Header';
import LightEllipse from './components/LightEllipse/LightEllipse';

export default function App() {
  return (
    <>
      <LightEllipse
        style={ {
          left: '-30%',
          top: '-50%',
        } }
      />
      <LightEllipse
        style={ {
          right: '-32%',
          top: '18%',
        } }
      />
      <Header />
      <Main />
    </>
  );
}
