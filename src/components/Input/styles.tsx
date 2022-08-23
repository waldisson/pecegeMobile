import styled from 'styled-components/native';
import colors from '../../styles';
import {TouchableOpacity} from 'react-native'

export const Container = styled.View`
  margin-bottom:16px;
`;
export const Label = styled.Text`
  font-family:'Roboto-Regular' ;
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
  width:100%;
`;
export const SelectContainer = styled.View`
  position: relative;
  
`;

export const SelectButton = styled.TouchableOpacity`
  border: 1px solid ${colors.gray200};
  padding:0 8px 0 8px;
  align-items:center;
  justify-content: space-between;
  height:34px;
  width:100%;
  border-radius:8px;
  flex-direction: row;
  z-index:-1;
`;

export const SelectText = styled.Text`
  
`;
export const SelectContent = styled.ScrollView`
  position:absolute;
  bottom:35px;
  z-index:999;
  width:100%;
  padding: 8px;
  border-radius: 4px;
  background-color:${colors.primary};
`;
export const SelectItem = styled(TouchableOpacity).attrs({
  activeOpacity:0.9
})`
  padding:5px 0px;
  background-color:${colors.white};
  margin-top:5px;
  padding-left: 5px;
`;
export const SelectItemText = styled.Text`
`;
export const SelectColorText = styled.Text`
`;
