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
export const SectorHeader = styled.View`
  max-width:322px;
  margin:16px 0 24px 0;
`;
export const Title = styled.Text`
  font-family:'Poppins';
  font-size:18px;
  font-weight:700;
  line-height:21.6px;
  color: ${colors.primary};
`;
export const SubTitle = styled.Text`
  font-family:'Roboto';
  font-size:12px;
  font-weight:400;
  line-height:18px;
  color: ${colors.gray400};
`;
