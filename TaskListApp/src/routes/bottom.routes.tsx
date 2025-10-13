import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import CustomTabBar from '../components/CustomTabBar';
import { AuthProvider } from '../context/authContextList';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <AuthProvider>
        <Tab.Navigator
            screenOptions={{
            headerShown:false
            }}
            tabBar={props=><CustomTabBar {...props}/>}
        >
            
            <Tab.Screen 
                name="List"
                component={List}
            />
            <Tab.Screen
                name="User"
                component={User}
            />
        </Tab.Navigator>
        </AuthProvider>
    )
}