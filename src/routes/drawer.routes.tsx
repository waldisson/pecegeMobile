import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CustomDrawer} from '../components'

import HomeScreen from '../screens/Home';

const Drawer = createDrawerNavigator();

function Router() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
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