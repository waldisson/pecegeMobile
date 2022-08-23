import React, { useEffect, useState } from "react";
import colors from "../../styles";
import {RefreshControl} from 'react-native';
import AsyncStorage, {useAsyncStorage} from '@react-native-community/async-storage';

// type 
import {Item, ItemSector} from '../../types/Item';

// style
import {
  Container,
  ButtonFloat,
  ListItems,
  SearchContainer,
  SearchInput,
} from './styles';

// components
import Button from "../../components/Button";
import ModalAdd from "../../components/Modal";
import Filter from "../../components/Filter";
import CardItem from "../../components/CardItem";
import SearchIcon from "../../assets/icons/search";


const Task = () => {
  const {getItem} = useAsyncStorage('@dataTask');
  const [showModal, setShowModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [orderData, setOrderData] = useState(false);
  const [list, setList] = useState<Item[]>([]);
  const [listSector, setListSector] = useState<ItemSector[]>([]);

  useEffect(() => {
    setList(
      list.filter((f)=> f.name.toLowerCase().includes(searchText.toLowerCase()))
    )
  }, [searchText])

  useEffect(() => {
    getTasks();
    getSector();
  }, []);


  const onRefresh = () =>{
    setRefreshing(false);
    getTasks();
  }

  const getSector = async () => {
    try {
      const response = await AsyncStorage.getItem('@dataSector');
      const previousData =  response ? JSON.parse(response) : [];
      setListSector(previousData)

    } catch (error) {
      console.log(error);
    }
    
  }

  const getTasks = async () => {
    try {
      const response = await getItem();
      const previousData =  response ? JSON.parse(response) : [];
      setList(previousData)

    } catch (error) {
      console.log(error);
    }
    
  }

  const toggleShowModal = () => {
    setShowModal(!showModal);
    getTasks();
  };

  const onPressOrderData = () => {
    setOrderData(!orderData)
    if(orderData){
      list.sort(function(a,b){ 
        return a.date > b.date ? -1 : 1;
      });
    } 
    list.sort(function(a,b){ 
      return a.name > b.name ? -1 : 1;
    });
  }

  
  return (
    <Container>
      <SearchContainer>
        <SearchIcon />
        <SearchInput 
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Procurar"
          value={searchText}
          placeholderTextColor={colors.darkLight}
          onChangeText={(s: string) => setSearchText(s)}
        />
      </SearchContainer>

      <Filter onPressOrderData={onPressOrderData}/>
      
      <ListItems
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>  <CardItem item={item} />}
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
        (showModal && list) &&
        <ModalAdd 
          title="Adicionar tarefa"
          variation="task"
          visible={showModal}
          closeModal={toggleShowModal} 
          sectors={list}
          sectorList={listSector}
        />
      }

    </Container>
  )
}
export default Task;

