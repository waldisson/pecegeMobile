import React from "react";

// style
import {
  Container,
  SectorItemTitle,
  TrashButton
} from './styles';

// icons
import Trash from "../../assets/icons/trash";

export interface ItemProps {
  id:number,
  nameSector: string,
  colorSector: string,
}
export interface CardItemProps {
  item: ItemProps;
  removeItemSector?: () => void;
}

const SectorItem: React.FC <CardItemProps> = props => {
  const {item, removeItemSector} = props;

  return (
    <Container colorSector={item.colorSector}>
      <SectorItemTitle>{item.nameSector}</SectorItemTitle>
      <TrashButton onPress={removeItemSector}>
        <Trash />  
      </TrashButton>
    </Container>
    
  )
};
export default SectorItem;