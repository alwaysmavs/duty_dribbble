import {StackNavigator} from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import Detail from './screen/Detail';

export const duty_dribbble = StackNavigator({
    Home: {screen: HomeScreen},
    Detail: {screen: Detail}
});