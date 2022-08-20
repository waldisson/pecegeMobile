import React, { useState } from "react";
// array mocado
import {SectorItem} from '../../types/Item';
// style
import {
  Container,
  ButtonFloat,
  ListItems,
} from './styles';

// components
import Button from "../../components/Button";
import Search from "../../components/Search";
import ModalAdd from "../../components/Modal";
import CardItem from "../../components/CardItem";

const Sectors = () => {

  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState<SectorItem[]>([
    { 
      id:1,
      name: 'Tarefa Incrível',
      color: '',
    },
    { 
      id:2,
      name: 'Tarefa Incrível nº 2',
      color: '',
    },
    { 
      id:3,
      name: 'Tarefa Incrível nº 3',
      color: '',
    },
  ]);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Search />
      
      <ListItems
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <CardItem item={item} />}
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