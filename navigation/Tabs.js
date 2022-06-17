import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contato from '../pages/Contato'
import Home from "../pages/Home"
import Materiais from "../pages/Materiais"
import Açoes from '../pages/Açoes'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Contato" component={Contato} />
            <Tab.Screen name="Materiais" component={Materiais}/>
            <Tab.Screen name="Açoes" component={Açoes}/>
        </Tab.Navigator>
    );
}

export default Tabs;