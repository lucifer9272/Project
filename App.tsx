import { FC } from 'react';
import './App.css';
import { Home } from './Component/Home';
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="App">
      <Home />
      <h1>{name}</h1>
    
    </div>
  );
};
