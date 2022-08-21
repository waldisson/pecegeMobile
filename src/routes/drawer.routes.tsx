import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import colors from '../styles';

// pages
import HomeScreen from '../screens/Home';
import SectorsScreen from '../screens/Sectors';

// icons
import MenuIcon from '../assets/icons/menu';
import { DrawerActions, useNavigation } from '@react-navigation/native';


// type
export type RootDrawerParams = {
  Drawer: undefined;
  Home: {name: string};
  Sector: {name: string};
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

function Router() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerTintColor: `${colors.white}`,
        headerStyle:{
          backgroundColor:`${colors.primaryMain}`,
        }
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerTitle: 'Meu quadro',
          headerLeft: false,
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MenuIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen 
        name="Sector" 
        component={SectorsScreen} 
        options={{
          headerTitle: 'Meu quadro',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MenuIcon />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MenuIcon />
            </TouchableOpacity>
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
}
export default Router;