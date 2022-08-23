import styled from 'styled-components/native';
import colors from '../../styles';

export const CustomContainer = styled.SafeAreaView`
  flex: 1;
`;
export const CustomHeader = styled.View`
  flex-direction: row;
  margin: 12px 36px 12px 17px;
  padding-bottom:12px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray100};
  justify-content:space-between;
  align-items: center;
`;
export const CustomButtonClose = styled.TouchableOpacity`

`;
export const CustomHeaderTitle = styled.Text`
  color: ${colors.primary};
  font-family: 'Poppins-Bold';
  font-size:14px;
  line-height:23px;
  font-weight: 700;
`;

