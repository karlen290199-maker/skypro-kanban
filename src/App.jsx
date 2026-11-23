import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/PopBrowse/PopBrowse';
import PopNewCard from './components/PopNewCard/PopNewCard';

function App() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header 
          toggleMenu={() => setIsUserMenuOpen(!isUserMenuOpen)} 
          isOpen={isUserMenuOpen} 
        />
        <Main />
        <PopBrowse />
        <PopNewCard />
      </div>
    </>
  );
}

export default App;