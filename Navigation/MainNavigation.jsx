import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import Register from '../Screens/register';
import Data from '../Screens/data';
import Counter from '../Screens/counter';


const RootStack = createNativeStackNavigator({
 
    screens: {
   Home: Home,
   Counter: Counter,     
   
   Register: Register,
   Data: Data,
 }

});

const Navigation = createStaticNavigation(RootStack);
export default function MainNavigation() {
    return <Navigation />;
}


