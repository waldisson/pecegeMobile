import React from 'react';
import moment from 'moment';
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
import LocationFilled from '../../assets/icons/locationFilled';
import Info from '../../assets/icons/info';
import HourglassIcon from './../../assets/icons/hourglass';
import CircleCheckIcon from '../../assets/icons/circleCheck';
import HourIcon from '../../assets/icons/hour';

// types
import {Item as ItemProps} from '../../types/Item';
import colors from '../../styles';

interface CardItemProps {
  item: ItemProps;

}

const CardItem: React.FC<CardItemProps> = props => {
  const {item } = props;

  const iconsCard: Record<string, JSX.Element> = {
    'Em andamento': <HourglassIcon color={colors.yellow} />,
    'Concluida': <CircleCheckIcon color={colors.greenFc} />,
    'Pendente': <HourIcon color={colors.blueGe} />,
  };

  const iconsColor: Record<string, string> = {
    'Alta prioridade': colors.danger,
    'Média prioridade': colors.yellow,
    'Baixa prioridade': colors.primaryLight,
  };


  return (
    <Container
      color={item.sector?.colorSector}
      style={{
        shadowColor: 'rgb(0,0,0,0.9)',
        shadowOpacity: 0.7,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation: 4,
        backgroundColor: 'white',
      }}>
      <CardTitleAndDate>
        <CardTitle>{item.name}</CardTitle>
        <CardDate>{moment(item.date).format("DD/MM/YYYY")}</CardDate>
      </CardTitleAndDate>
      <CardDescription>{item.description}</CardDescription>
      <CardContentInfo>
        <CardSectorContent>
          <LocationFilled color={item.sector?.colorSector} />
          <CardSector>{item.sector?.nameSector}</CardSector>
        </CardSectorContent>
        <CardPriorityContent>
          <Info color={iconsColor[item.priority]} />
          <CardPriority>{item.priority}</CardPriority>
        </CardPriorityContent>
        <CardStatusContent>
          {iconsCard[item.status]}
          <CardStatus>{item.status}</CardStatus>
        </CardStatusContent>
      </CardContentInfo>
    </Container>
  );
};
export default CardItem;
