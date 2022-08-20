import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.View`
  margin-bottom:16px;
`;
export const Label = styled.Text`
  font-family:'Roboto' ;
  font-weight: 400;
  font-size: 12px;
  line-height:18px;
  color: ${colors.gray400};
  margin-bottom:8px;
`;
export const InputContent = styled.TextInput`
  border-radius: 8px;
  border: 1px solid ${colors.gray200};
  padding: 8px;
  height:34px;
`;
