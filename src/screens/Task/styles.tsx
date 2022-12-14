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
  font-family:'Poppins-Bold';
  font-size:18px;
  font-weight:700;
  line-height:21.6px;
  color: ${colors.primary};
`;
export const SubTitle = styled.Text`
  font-family:'Roboto-Regular';
  font-size:12px;
  font-weight:400;
  line-height:18px;
  color: ${colors.gray400};
`;

export const SearchContainer = styled.View`
  background-color: ${colors.gray100};
  flex-direction: row;
  border-radius: 24px;
  align-items:center;
  justify-content:flex-start;
  height:44px;
  padding-left:16px;
`;

export const SearchInput = styled.TextInput`
  font-family: 'Inter-Light';
  padding-left:16px;
  width:80%;
`;