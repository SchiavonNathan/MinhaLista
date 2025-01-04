import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import CustomTabBar from '../components/CustomTabBar';
import Configuration from '../screens/configuration';
import Service from '../screens/service';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
          headerShown:false,
      }}
      tabBar={pros=><CustomTabBar {...pros}/>}
    >
        <Tab.Screen 
            name="Home" 
            component={Home} 
        />
        <Tab.Screen 
            name="Configuration"
            component={Configuration}
        />
         <Tab.Screen 
            name="Service"
            component={Service}
        />
    </Tab.Navigator>
  );
}