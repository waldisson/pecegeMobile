import React, { useState } from "react";
import colors from "../../styles";

// array mocado
import {ItemSector} from '../../types/Item';

// style
import {
  Container,
  ButtonFloat,
  ListItems,
  SectorHeader,
  Title,
  SubTitle,
} from './styles';

// components
import Button from "../../components/Button";
import ModalAdd from "../../components/Modal";
import SectorItem from "../../components/SectorItem";


const Sectors = () => {

  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState<ItemSector[]>([
    { 
      id:1,
      name: 'Tecnologia da informação (T.I)',
      color: `${colors.blueGe}`,
    },
    { 
      id:2,
      name: 'Relacionamento',
      color: `${colors.blueGe}`,
    },
    { 
      id:3,
      name: 'Suporte',
      color: `${colors.blueGe}`,
    },
  ]);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      
      <SectorHeader>
        <Title>Setores</Title>
        <SubTitle>Gerencie, visualize, exclua ou adicione setores para suas tarefas</SubTitle>
      </SectorHeader>
      
      <ListItems
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <SectorItem item={item} />}
      />
      <ButtonFloat>
        <Button 
          variation="round"
          onPress={toggleShowModal}
        />
      </ButtonFloat>

      {
        showModal && 
        <ModalAdd 
          title="Adicionar tarefa"
          variation="sector"
          visible={showModal}
          closeModal={toggleShowModal} 
        />
      }

    </Container>
  )
}
export default Sectors;