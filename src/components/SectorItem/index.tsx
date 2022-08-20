import React from "react";

// style
import {
  Container,
  SectorItemTitle,
} from './styles';

// icons
import Trash from "../../assets/icons/trash";

export interface ItemProps {
  id:number,
  name: string,
  color: string,
}
export interface CardItemProps {
  item: ItemProps
}

const SectorItem: React.FC <CardItemProps> = props => {
  const {item} = props;

  return (
    <Container>
      <SectorItemTitle>{item.name}</SectorItemTitle>
      <Trash />  
    </Container>
    
  )
};
export default SectorItem;