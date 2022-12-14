import React from "react";
import {DrawerContentScrollView} from '@react-navigation/drawer';
import { DrawerActions, useNavigation, CommonActions } from "@react-navigation/native";

// style
import {
  CustomContainer,
  CustomHeader,
  CustomButtonClose,
  CustomHeaderTitle,
} from './styles';

// icons
import Close from '../../assets/icons/close';
import CheckButton from '../../assets/icons/checkbutton';
import LocationSector from '../../assets/icons/locationSector';

// component
import Button from "../Button";

interface CustomDrawerProps {}

const CustomDrawer: React.FC <CustomDrawerProps> = props => {
  const {} = props;
  const navigation = useNavigation();
  
  const goTo = (name:string, params?:any) =>{
    navigation.dispatch({
      ...CommonActions.navigate({ name, params }),
    })
  }
  return (
    <CustomContainer>
      <DrawerContentScrollView {...props}>
        <CustomHeader>
          <CustomHeaderTitle>Tasks App</CustomHeaderTitle>
          <CustomButtonClose onPress={()=> navigation.dispatch(DrawerActions.closeDrawer())}>
            <Close />
          </CustomButtonClose>
        </CustomHeader>

        <Button 
          variation='drawer'   
          icon={<CheckButton />}
          title="Tarefas"
          subtitle="Visualize e adicione tarefas"
          onPress={()=> goTo('Task')}
        />
          <Button 
          variation='drawer' 
          icon={<CheckButton />} 
          title="Setores"
          subtitle="Visualize e cadastre setores"
          onPress={()=> goTo('Sector')}
        />
      </DrawerContentScrollView>
    </CustomContainer>
    
  )
}
export default CustomDrawer;