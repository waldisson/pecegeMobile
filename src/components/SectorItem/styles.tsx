import styled from 'styled-components/native';
import { ItemProps } from '.';
import colors from '../../styles';

export const Container = styled.View<ItemProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  height: 44px;
  border-left-color: ${props => props.colorSector || colors.orange};
  border-left-width:7px;
  border-radius:8px;
  padding:0 5px 0 8px;
  margin-bottom:16px;
  border-bottom-width:1px;
  border-bottom-color: rgba(128,128,128,0.2);
  border-right-width:1px;
  border-right-color: rgba(128,128,128,0.2);
  
`;

export const SectorItemTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: ${colors.gray400};
`;
export const TrashButton = styled.TouchableOpacity`
  justify-content:center ;
  align-items:center ;
  padding:8px;
  width:40px ;
`;
