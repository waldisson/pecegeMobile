import React, { useState } from 'react';
import {Alert} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Item } from '../../types/Item';
import {ItemSector} from '../../types/Item';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
import moment from 'moment';

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
  ModalDatePikerButton,
  ModalDatePikerText,
  ModalDateLabel
} from './styles';

// icons
import Close from '../../assets/icons/close';
import AddTask from '../../assets/icons/addTask';
import LocationFilled from '../../assets/icons/locationFilled';

// component
import Button from '../Button';
import Input from '../Input';


// types
export interface ModalAddProps {
  variation: 'task' | 'sector';
  title: string;
  visible: boolean;
  sectors?: Item[];
  sectorList?:ItemSector[];
  closeModal: () => void;
}

const ModalAdd: React.FC<ModalAddProps> = props => {
  const {visible,title, sectorList,variation, closeModal} = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [sector, setSector] = useState<Item>();
  const [listSector, setListSector] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [nameSector, setNameSector] = useState('');
  const [colorSector, setColorSector] = useState('');

  // modal task save
  const handleSaveTask = async () => {

    // await AsyncStorage.removeItem('@dataTask')
    try {
      const id = uuid.v4();
      const newTask = {
          id,
          name,
          description,
          sector,
          date,
          color: sector?.colorSector,
          priority,
          status,
        };
        if (
            name !== '' && 
            description !== '' && 
            sector !== '' && 
            priority !== '' && 
            date !== '' &&
            status !== ''
          ) {
            const response = await AsyncStorage.getItem('@dataTask');
            const previousData = response ? JSON.parse(response) : [];
            const data = [...previousData, newTask];
            await AsyncStorage.setItem('@dataTask', JSON.stringify(data));
            Alert.alert('Sucesso', 'Tarefa criada.')
            Toast.show({
              type: "Success",
              text1: 'Cadastrado com sucesso!'
            })
            closeModal();
            setName('');
            setPriority('');
            setStatus('');
        } else {
          Alert.alert('Ops, Falta algo?', 'Por favor preencher todos os campos!')
        }
        
    } catch (error) {
      Toast.show({
        type: "error",
        text1: 'Não foi possível cadastrar'
      })
    }
    }
  


  const handleSaveSector = async () => {
    try {
      const id = uuid.v4();
      const newSector = {
          id,
          nameSector,
          colorSector,
        };
        if (
          nameSector !== '' && 
          colorSector !== ''
        ) {
        const response = await AsyncStorage.getItem('@dataSector');
        const previousData = response ? JSON.parse(response) : [];
        const data = [...previousData, newSector];
        await AsyncStorage.setItem('@dataSector', JSON.stringify(data));
        Alert.alert('Sucesso', 'Tarefa criada.')
        Toast.show({
          type: "Success",
          text1: 'Cadastrado com sucesso!'
        })
        closeModal();
        setListSector('');
      } else {
        Alert.alert('Ops, Falta algo?', 'Por favor preencher todos os campos!')
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: 'Não foi possível cadastrar'
      })
    }
  }

  const onChange = (event, selectedDate) => {
    setDate(selectedDate)
    setOpen(false);
  }
  const showDatePicker = () => {
    setOpen(true);
  }
  
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
            variation='none'
            label="Nome" 
            autoCorrect={false}
            autoFocus={true}
            placeholder="Digite o nome da tarefa..." 
            value={name}
            onChangeText={text=> setName(text)}
          />
          <Input
            variation='none'
            label="Descrição (opcional)"
            placeholder="Adicione a descrição"
            value={description}
            onChangeText={text=> setDescription(text)}
          />
          <ModalInputGroup>
            <ModalDateAndSector>
              <InputDate>
              {open && (
                <DateTimePicker
                  locale='pt'
                  testID='dateTimePicker'
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  
              />
              )}
              <ModalDateLabel>Data limite</ModalDateLabel>
              <ModalDatePikerButton
                onPress={showDatePicker}
              >
                <ModalDatePikerText>
                {moment(date).format("DD/MM/YYYY")} 
                </ModalDatePikerText>
              </ModalDatePikerButton>
              </InputDate>
              <InputSector>
                <Input 
                  variation='sector'
                  label="Setor" 
                  placeholder="Selecione o setor"
                  sectorSelect={sector}
                  setSectorSelect={setSector}
                  sectorList={sectorList}
                />
              </InputSector>
            </ModalDateAndSector>
            <ModalPriorityAndStatus>
              <InputPriority>
                <Input 
                  variation='priority'
                  label="Prioridade" 
                  placeholder="Nível de prioridade" 
                  sectorSelect={priority}
                  setSectorSelect={setPriority}
                  
                />
              </InputPriority>
              <InputStatus>
                <Input 
                  variation='status'
                  label="Status" 
                  placeholder="Selecione o status" 
                  sectorSelect={status}
                  setSectorSelect={setStatus}
                  
                />
              </InputStatus>
            </ModalPriorityAndStatus>
          </ModalInputGroup>
          <ModalButtonContainer>
          <ButtonCancel>
            <Button variation="outline" title="Cancelar"  onPress={() => closeModal()}/>
          </ButtonCancel>
          <ButtonSave>
            <Button variation="primary" title="Salvar" onPress={handleSaveTask} />
          </ButtonSave>
        </ModalButtonContainer>
        </ModalContent>
        }
        {
          variation === 'sector' &&
          <ModalContent showsVerticalScrollIndicator={false}>
          <Input 
            variation='none'
            label="Nome" 
            placeholder="Digite o nome do setor..." 
            value={nameSector}
            onChangeText={text=> setNameSector(text)}
            maxLength={18}
          />
          <Input
            variation='color'
            label="Cor de identificação"
            placeholder="Selecione a cor de identificação"
            sectorSelect={colorSector}
            setSectorSelect={setColorSector}
          />
          <ModalButtonContainer>
            <ButtonCancel>
              <Button variation="outline" title="Cancelar" onPress={() => closeModal()} />
            </ButtonCancel>
            <ButtonSave>
              <Button variation="primary" title="Salvar" onPress={handleSaveSector}/>
            </ButtonSave>
        </ModalButtonContainer>
        </ModalContent>
        }
      </Container>
    </Modal>
  );
};

export default ModalAdd;
