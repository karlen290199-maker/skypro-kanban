import { useState, useEffect } from 'react';
import Column from '../Column/Column';
import { cardsData } from '../../data'; 
import { MainBlock, MainBlockInner, MainContent } from './Main.styled';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

  return (
    <MainBlock>
      <div className="container">
        <MainBlockInner>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>
              Данные загружаются...
            </div>
          ) : (
            <MainContent>
              {statuses.map(status => (
                <Column 
                  key={status}
                  title={status} 
                  cards={cardsData.filter(card => card.status === status)} 
                />
              ))}
            </MainContent>
          )}
        </MainBlockInner>
      </div>
    </MainBlock>
  );
}

export default Main;