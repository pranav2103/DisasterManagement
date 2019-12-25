import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import LatLongScreen from './src/screens/LatLongScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Location: LocationScreen,
    LatLong: LatLongScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Disaster Management'
    }
  }
);
export default createAppContainer(navigator);
