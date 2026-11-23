import Card from '../Card/Card';
import { MainColumn, ColumnTitle, Cards } from './Column.styled';

function Column({ title, cards }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cards.map(card => (
          <Card 
            key={card.id} 
            topic={card.topic} 
            title={card.title} 
            date={card.date} 
          />
        ))}
      </Cards>
    </MainColumn>
  );
}

export default Column;