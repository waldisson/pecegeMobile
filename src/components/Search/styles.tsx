import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.View`
  background-color: ${colors.gray100};
  flex-direction: row;
  border-radius: 24px;
  align-items:center;
  justify-content:flex-start;
  height:44px;
  padding-left:16px;
`;

export const SearchInput = styled.TextInput`
  padding-left:16px;
`;