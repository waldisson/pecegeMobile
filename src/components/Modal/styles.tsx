import styled from 'styled-components/native';
import { ModalAddProps } from '.';
import colors from '../../styles';

export const Container = styled.View<ModalAddProps>`
  flex:1;
  background-color: ${colors.white};
  padding: 0 22px 50px 22px;
  border-radius: 4px;
  margin-top: ${(props: { variation: string; }) => props.variation === 'task' ? 60 : 80}%;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 27px 0 16px 0;
`;
export const ModalIconAndTitle = styled.View`
  flex-direction: row ;
  align-items: center;
  margin-top:7px;
`;
export const ModalTitle = styled.Text`
  font-family:'Poppins';
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
  line-height:21.6px ;
  margin-left: 10px;
`;
export const ButtonClose = styled.TouchableOpacity``;

export const ModalContent = styled.ScrollView`
  
`;
export const ModalContentInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ModalContentQtd = styled.View`
  width: 40%;
`;
export const ModalContentValue = styled.View`
  width: 40%;
`;



export const ModalInputGroup = styled.View`
  width:100% ;
`;
export const ModalDateAndSector = styled.View`
  flex-direction: row;
  justify-content: space-between ;
`;
export const InputDate = styled.View`
  width:47%;
`;
export const InputSector = styled(InputDate)``;
export const ModalPriorityAndStatus = styled(ModalDateAndSector)``;
export const InputPriority = styled(InputDate)``;
export const InputStatus = styled(InputDate)``;


export const ButtonSave = styled.View`
  width: 66px;
`;
export const ButtonCancel = styled.View`
  width: 80px;
  margin-right: 16px;
`;
export const ModalButtonContainer = styled.View`
  flex-direction:row ;
  justify-content:flex-end;
  margin:25px 0 32px 0;
`;