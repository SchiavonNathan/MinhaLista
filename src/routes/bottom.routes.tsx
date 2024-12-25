import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Profile from '../pages/profile';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={Home} 
        />
        <Tab.Screen 
            name="Profile"
            component={Profile}
        />
    </Tab.Navigator>
  );
}