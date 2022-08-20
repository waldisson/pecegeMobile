import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
  padding:16px;
`;

export const ButtonFloat = styled.View`
  position: absolute;
  bottom: 27px;
  right: 16px;
`;

export const ListItems = styled.FlatList`
  
`;
