import React from "react";
import colors from '../../styles';
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
  CardSectorContent,
  CardPriorityContent,
  CardStatusContent,
} from './styles';

// icons
import LocationFilled from "../../assets/icons/locationFilled";
import Info from "../../assets/icons/info";

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

  const sector: Record<string, Element> = {
    'Em andamento': <LocationFilled color={colors.orange}/>,
    'Concluída': <LocationFilled color={colors.orange}/>,
    'Pendente': <LocationFilled color={colors.orange}/>
  };

  return (
    <Container>
      <CardTitleAndDate>
        <CardTitle>{item.name}</CardTitle>
        <CardDate>{item.date}</CardDate>
      </CardTitleAndDate>
      <CardDescription>{item.description}</CardDescription>
      <CardContentInfo>
        <CardSectorContent>
          <LocationFilled color={colors.orange}/>
          <CardSector>{item.sector}</CardSector>
        </CardSectorContent>
        <CardPriorityContent>
          <Info />
          <CardPriority>{item.priority}</CardPriority>
        </CardPriorityContent>
        <CardStatusContent>
          <Info />
          <CardStatus>{item.status}</CardStatus>
        </CardStatusContent>
      </CardContentInfo>
      
    </Container>
    
  )
};
export default CardItem;