import React, { useState } from "react";
// array mocado
import {Item} from '../../types/Item';
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

const Home = () => {

  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState<Item[]>([
    { 
      id:1,
      name: 'Tarefa Incrível',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna     fringilla urna, porttitor',
      priority: 'Alta prioridade',
      sector: 'Relacionamento',
      date:'10 março de 2022',
      annotation: '',
      status: 'Em andamento',
    },
    { 
      id:2,
      name: 'Tarefa Incrível nº 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna     fringilla urna, porttitor',
      priority: 'Média prioridade',
      sector: 'T.I',
      date:'10 março de 2022',
      annotation: '',
      status: 'Concluída',
    },
    { 
      id:3,
      name: 'Tarefa Incrível nº 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna     fringilla urna, porttitor',
      priority: 'Baixa prioridade',
      sector: 'Suporte',
      date:'10 março de 2022',
      annotation: '',
      status: 'Pendente',
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
          variation="task"
          visible={showModal}
          closeModal={toggleShowModal} 
        />
      }
    </Container>
  )
}
export default Home;