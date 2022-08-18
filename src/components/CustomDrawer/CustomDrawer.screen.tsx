import React from "react";
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {CustomContainer, CustomTitle} from './CustomDrawer.styles'

type CustomDrawerProps = {}

const CustomDrawer: React.FC <CustomDrawerProps> = props => {
  const {} = props;
  return (
    <CustomContainer>
      <DrawerContentScrollView {...props}>
        <CustomTitle>Testo</CustomTitle>
      </DrawerContentScrollView>
    </CustomContainer>
    
  )
}
export default CustomDrawer;