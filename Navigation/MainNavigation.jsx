import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home';
import Register from '../Screens/register';


const RootStack = createNativeStackNavigator({
 
    screens: {
   Home: Home,
   Register: Register,
 }

});

const Navigation = createStaticNavigation(RootStack);
export default function MainNavigation() {
    return <Navigation />;
}


