import styled from 'styled-components/native';
import { CardItemProps } from '.';
import colors from '../../styles';

export const Container = styled.View<CardItemProps>`
  flex-direction: row;
  justify-content: space-between;
  height: 44px;
  border-left-color: ${colors.orange};
  border-left-width:7px;
  border-radius:8px;
  padding:12px 16px 14px 16px;
  margin-bottom:16px;
  border-bottom-width:1px;
  border-bottom-color: rgba(128,128,128,0.2);
  border-right-width:1px;
  border-right-color: rgba(128,128,128,0.2);
  
`;

export const SectorItemTitle = styled.Text`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: ${colors.gray400};
`;
