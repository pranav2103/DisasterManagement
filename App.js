import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import PermissionScreen from './src/screens/PermissionScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Location: LocationScreen,
    Perm: PermissionScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Disaster Management'
    }
  }
);
export default createAppContainer(navigator);
