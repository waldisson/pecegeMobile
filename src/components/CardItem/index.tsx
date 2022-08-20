import React from "react";

// style
import {
  Container,
  CardTitleAndDate,
  CardContentInfo,
  CardTitle,
  CardDate,
  CardDescription,
  CardPriority,
  CardSector,
  CardStatus,
} from './styles';

// icons


// component
import Button from "../Button";

export interface ItemProps {
  id:number,
  name: string,
  description: string,
  priority: string,
  sector: string,
  date:string,
  annotation: string,
  status: string,
}
interface CardItemProps {
  item: ItemProps
}

const CardItem: React.FC <CardItemProps> = props => {
  const {item} = props;

  return (
    <Container>
      <CardTitleAndDate>
        <CardTitle>{item.name}</CardTitle>
        <CardDate>{item.date}</CardDate>
      </CardTitleAndDate>
      <CardDescription>{item.description}</CardDescription>
      <CardContentInfo>
        <CardPriority>{item.priority}</CardPriority>
        <CardSector>{item.sector}</CardSector>
        <CardStatus>{item.status}</CardStatus>
      </CardContentInfo>
      
    </Container>
    
  )
}
export default CardItem;