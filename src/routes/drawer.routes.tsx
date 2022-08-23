import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '../styles';

// pages
import TasksScreen from '../screens/Task';
import SectorsScreen from '../screens/Sectors';

// components
import CustomDrawer from '../components/CustomDrawer';

// icons
import MenuIcon from '../assets/icons/menu';
import ArrowLeftCircleIcon from '../assets/icons/arrowLeftCircle';

// type
export type RootDrawerParams = {
  Drawer: undefined;
  Home: {name: string};
  Task: {name: string};
  Sector: {name: string};
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

function Router() {
  const navigation = useNavigation();

  const goTo = (name: string, params?: any) => {
    navigation.dispatch({
      ...CommonActions.navigate({name, params}),
    });
  };

  return (
    <Drawer.Navigator
      initialRouteName="Task"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerTintColor: `${colors.white}`,
        headerStyle: {
          backgroundColor: `${colors.primaryMain}`,
        },
      }}>
      <Drawer.Screen
        name="Sector"
        component={SectorsScreen}
        options={{
          headerTitle: 'Setores',
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={() => goTo('Task')}>
              <ArrowLeftCircleIcon />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 20}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MenuIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Task"
        component={TasksScreen}
        options={{
          headerTitle: 'Meu quadro',
          headerLeft: false,
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 20}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MenuIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default Router;
