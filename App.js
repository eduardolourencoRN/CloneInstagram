import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import Graph from './src/screens/Graph';
import PersonDetails from './src/screens/PersonDetails';
import CustomTabBar from './src/Components/CustomTab/CustomBottomTab';
import { Platform, StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                tabBar={(props) => <CustomTabBar {...props} />}
            >
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Graph' component={Graph} />
                <Tab.Screen name='PersonDetails' component={PersonDetails} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
