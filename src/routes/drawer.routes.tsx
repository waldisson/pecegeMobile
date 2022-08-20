import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer'

import HomeScreen from '../screens/Home';
import colors from '../styles';

type RootDrawerParams = {
  Drawer: undefined;
  Home: {name: string};
  // Sector: {name: string};
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

function Router() {
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
      />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
}
export default Router;