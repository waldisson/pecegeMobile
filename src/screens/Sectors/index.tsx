import React, { useEffect, useState } from "react";
import colors from "../../styles";
import AsyncStorage, { useAsyncStorage } from "@react-native-community/async-storage";
import {RefreshControl} from 'react-native';
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
  const {getItem, setItem, removeItem} = useAsyncStorage('@dataSector');
  const [showModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [listSector, setListSector] = useState<ItemSector[]>([]);


  useEffect(() => {
    getSector();
  },[]);

  const getSector = async () => {
    try {
      const response = await getItem();
      const previousData =  response ? JSON.parse(response) : [];
      setListSector(previousData)

    } catch (error) {
      console.log(error);
    }
    
  }
  const removeItemSector = async (id: string) => {
    console.log('id', id)
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item: ItemSector) => item.id !== Number(id));
    setItem(JSON.stringify(data));
  }


  const onRefresh = () =>{
    setRefreshing(false);
    getSector()
  }
  

  const toggleShowModal = () => {
    setShowModal(!showModal);
    getSector();
  };

  return (
    <Container>
      
      <SectorHeader>
        <Title>Setores</Title>
        <SubTitle>Gerencie, visualize, exclua ou adicione setores para suas tarefas</SubTitle>
      </SectorHeader>
      
      <ListItems
        data={listSector}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <SectorItem item={item} removeItemSector={() => removeItemSector(item)}/>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
      />
      <ButtonFloat>
        <Button 
          variation="round"
          onPress={toggleShowModal}
        />
      </ButtonFloat>

      {
        (showModal && listSector) &&
        <ModalAdd 
          title="Adicionar setores"
          variation="sector"
          visible={showModal}
          closeModal={toggleShowModal} 
          
        />
      }

    </Container>
  )
}
export default Sectors;