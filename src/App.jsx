import React from 'react';
import Header from './components/header/Header';
import Transform from './components/transform/Transform';
import Stand from './components/stand/Stand';
import GraphicDesign from './components/graphicDesign/GraphicDesign';
import Photography from './components/photography/Photography';

export default function App() {
  return (
    <div>
      <Header />
      <Transform />
      <Stand />
      <GraphicDesign />
      <Photography />
    </div>
  );
}
