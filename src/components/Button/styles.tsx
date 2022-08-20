import styled from 'styled-components/native';
import colors from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const TextTitle = styled.Text``;

// Button primary
export const PrimaryButton = styled.TouchableOpacity`
  background-color: ${colors.primaryMid};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  height:40px;
`;
export const PrimaryButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height:18px;
`;

// Button Drawer
export const DrawerContent = styled.TouchableOpacity`
  margin:16px 20px 0 7px;
  height: 46px;
`;
export const DrawerButtonContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
  padding: 3px 16px 3px 7px;
`;
export const DrawerIconAndTitle = styled.View`
  flex-direction:row;
`;
export const DrawerIconCheck = styled.View`
  padding-top:3px;
`;
export const DrawerButtonContent = styled.View`
  margin-left: 9px;
`;
export const DrawerButtonTitle = styled.Text`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: ${colors.primary};
`;
export const DrawerButtonDescription = styled.Text`
  font-family: 'Roboto';
  font-size:12px;
  font-weight:400;
  line-height:18px;
  color: ${colors.gray400};
`;
export const DrawerIconChevron = styled.View`
  padding-top:3px;
`;

// Button Outline
export const OutlineButton = styled(PrimaryButton)`
  background-color: ${colors.transparent};
  border: 1px solid ${colors.primaryMain};
`;
export const OutlineButtonText = styled(PrimaryButtonText)`
  color: ${colors.primaryMain};

`;

// Button Round
export const RoundButton = styled.TouchableOpacity`
  background-color: ${colors.transparent} ;
`;
