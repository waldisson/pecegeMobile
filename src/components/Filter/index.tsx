import React from 'react';

// Styles
import {
  Container,
  FilterAplication,
  FilterText,
  FilterBall,
  FilterBallText,
  FilterOrdination,
  FilterOrdinationText,
} from './styles';

// Icons
import FilterIcon from '../../assets/icons/filter';
import OrdinationIcon from '../../assets/icons/ordination';
import ArrowDownIcon from '../../assets/icons/arrowDown';

// Props
interface FilterProps {
  onPressOrderData: () => void;
}

const Filter: React.FC<FilterProps> = props => {
  const {onPressOrderData} = props;



  return (
    <Container>
      <FilterAplication>
        <FilterIcon />
        <FilterText>Filtros aplicados</FilterText>
        <FilterBall>
          <FilterBallText>2</FilterBallText>
        </FilterBall>
      </FilterAplication>
      <FilterOrdination onPress={onPressOrderData}>
        <OrdinationIcon />
        <FilterOrdinationText>Ordenar por data</FilterOrdinationText>
        <ArrowDownIcon />
      </FilterOrdination>
    </Container>
  );
};

export default Filter;