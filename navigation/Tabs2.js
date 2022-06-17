import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home"
import Contato from "../pages/Contato"
import Açoes from "../pages/Açoes"
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs2 = () => {
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Tab.Screen name="Contato" component={Contato} options={{headerShown: false}}/>
                <Tab.Screen name="Ações" component={Açoes} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabs2;