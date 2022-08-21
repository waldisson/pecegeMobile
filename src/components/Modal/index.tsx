import React, { useState } from 'react';
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

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [sector, setSector] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [nameSector, setNameSector] = useState('');
  const [colorSector, setColorSector] = useState('');


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
          <Input 
            label="Nome" 
            placeholder="Digite o nome da tarefa..." 
            value={name}
            onChangeText={text=> setName(text)}
          />
          <Input
            label="Descrição (opcional)"
            placeholder="Adicione a descrição"
            value={description}
            onChangeText={text=> setDescription(text)}
          />
          <ModalInputGroup>
            <ModalDateAndSector>
              <InputDate>
                <Input 
                  label="Data limite" 
                  placeholder="dd/mm/ano" 
                  value={date}
                  onChangeText={text=> setDate(text)}
                />
              </InputDate>
              <InputSector>
                <Input 
                  label="Setor" 
                  placeholder="Selecione o setor"
                  value={sector}
                  onChangeText={text=> setSector(text)}
                />
              </InputSector>
            </ModalDateAndSector>
            <ModalPriorityAndStatus>
              <InputPriority>
                <Input 
                  label="Prioridade" 
                  placeholder="Nível de prioridade" 
                  value={priority}
                  onChangeText={text=> setPriority(text)}  
                />
              </InputPriority>
              <InputStatus>
                <Input 
                  label="Status" 
                  placeholder="Selecione o status" 
                  value={status}
                  onChangeText={text=> setStatus(text)}
                />
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
          <Input 
            label="Nome" 
            placeholder="Digite o nome do setor..." 
            value={nameSector}
            onChangeText={text=> setNameSector(text)}
          />
          <Input
            label="Cor de identificação"
            placeholder="Selecione a cor de identificação"
            value={colorSector}
            onChangeText={text=> setColorSector(text)}
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
