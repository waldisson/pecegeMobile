import React from 'react';
import Modal from 'react-native-modal';

// style
import {
  Container,
  ModalContent,
  ModalHeader,
  ModalIconAndTitle,
  ModalTitle,
  ButtonClose,
  ModalInputGroup,
  ModalDateAndSector,
  ModalPriorityAndStatus,
  ModalButtonContainer,
  InputDate,
  InputSector,
  InputPriority,
  InputStatus,
  ButtonSave,
  ButtonCancel,
} from './styles';

// icons
import Close from '../../assets/icons/close';
import AddTask from '../../assets/icons/addTask';
import LocationFilled from '../../assets/icons/locationFilled';

// component
import Button from '../Button';
import Input from '../Input';


export interface ModalAddProps {
  variation: 'task' | 'sector';
  title: string;
  visible: boolean;
  closeModal: () => void;
  onPress?: () => void;
}

const ModalAdd: React.FC<ModalAddProps> = props => {
  const {visible,title, variation, closeModal, onPress} = props;

  return (
    <Modal
      animationIn={'fadeInUpBig'}
      animationOut={'fadeOutDownBig'}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={visible}
      style={{margin: 0}}>
      <Container 
        variation={variation}
        title={title}
      >
        <ModalHeader>
          <ModalIconAndTitle>
            {
              variation === 'task'
              ? <AddTask /> 
              : <LocationFilled width={17} height={20}/>
            }
            
            <ModalTitle>{title}</ModalTitle>
          </ModalIconAndTitle>

          <ButtonClose onPress={() => closeModal()}>
            <Close />
          </ButtonClose>
        </ModalHeader>
        {
          variation === 'task' &&
          <ModalContent showsVerticalScrollIndicator={false}>
          <Input label="Nome" placeholder="Digite o nome da tarefa..." />
          <Input
            label="Descrição (opcional)"
            placeholder="Adicione a descrição"
          />
          <ModalInputGroup>
            <ModalDateAndSector>
              <InputDate>
                <Input label="Data limite" placeholder="dd/mm/ano" />
              </InputDate>
              <InputSector>
                <Input label="Setor" placeholder="Selecione o setor" />
              </InputSector>
            </ModalDateAndSector>
            <ModalPriorityAndStatus>
              <InputPriority>
                <Input label="Prioridade" placeholder="Nível de prioridade" />
              </InputPriority>
              <InputStatus>
                <Input label="Status" placeholder="Selecione o status" />
              </InputStatus>
            </ModalPriorityAndStatus>
          </ModalInputGroup>
          <ModalButtonContainer>
          <ButtonCancel>
            <Button variation="outline" title="Cancelar" />
          </ButtonCancel>
          <ButtonSave>
            <Button variation="primary" title="Salvar" />
          </ButtonSave>
        </ModalButtonContainer>
        </ModalContent>
        }
        {
          variation === 'sector' &&
          <ModalContent showsVerticalScrollIndicator={false}>
          <Input label="Nome" placeholder="Digite o nome do setor..." />
          <Input
            label="Descrição (opcional)"
            placeholder="Adicione a descrição"
          />
          <ModalButtonContainer>
            <ButtonCancel>
              <Button variation="outline" title="Cancelar" />
            </ButtonCancel>
            <ButtonSave>
              <Button variation="primary" title="Salvar" />
            </ButtonSave>
        </ModalButtonContainer>
        </ModalContent>
        }
        
       
      </Container>
    </Modal>
  );
};

export default ModalAdd;
