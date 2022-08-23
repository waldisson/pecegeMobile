import { View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles';

interface  ContainerProps{
  color: string,
}

export const Container = styled.View<ContainerProps>`
  height: 143px;
  border-left-color: ${(props)=>props.color ||colors.orange};
  border-left-width:7px;
  border-radius:8px;
  padding:12px 16px 14px 16px;
  margin-bottom:16px;  
`;
export const CardTitleAndDate = styled.View`
  flex-direction: row;
  justify-content:space-between;
`;
export const CardContentInfo = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  left: 16px;
`;
export const CardTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: ${colors.gray400};
`;
export const CardDate = styled(CardTitle)`
font-family: 'Roboto-Regular';
  font-weight: 400;
`;
export const CardDescription = styled(CardTitle)`
font-family: 'Roboto-Regular';
  font-weight: 400; 
  color: ${colors.gray300};
  margin: 7px 0 20px 0;
`;
export const CardPriorityContent = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const CardPriority = styled.Text`
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: ${colors.gray400};
  margin:0 16px 0 5px;
`;
export const CardSectorContent = styled(CardPriorityContent)`

`;
export const CardSector = styled(CardPriority)`

`;
export const CardStatusContent = styled(CardPriorityContent)`

`;
export const CardStatus = styled(CardPriority)`

`;
