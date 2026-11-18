import { useState, useEffect } from 'react';
import Column from '../Column/Column';
import { cardsData } from '../../data'; 

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
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>
              Данные загружаются...
            </div>
          ) : (
            <div className="main__content">
              {statuses.map(status => (
                <Column 
                  key={status}
                  title={status} 
                  cards={cardsData.filter(card => card.status === status)} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;