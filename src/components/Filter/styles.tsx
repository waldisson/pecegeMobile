import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin:32px 0 32px 0;
`;

export const FilterAplication = styled.TouchableOpacity`
  height:36px;
  width: 47%;
  border: 1px solid ${colors.gray200};
  border-radius:8px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 12px 0 12px;
`;
export const FilterText = styled.Text`
  font-family: 'Roboto';
  font-weight: 400;
  font-size:12px;
  line-height:18px;
  color: ${colors.gray400};
`;

export const FilterOrdination = styled(FilterAplication)`
  
`;
export const FilterOrdinationText = styled(FilterText)`
  
`;
export const FilterBall = styled.View`
  width: 20px;
  height: 20px;
  border-radius:10px;
  background-color: ${colors.primaryMain};
  justify-content: center;
  align-items: center;
`;
export const FilterBallText = styled.Text`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 10px;
  line-height:15px;
  color: ${colors.white};
`;