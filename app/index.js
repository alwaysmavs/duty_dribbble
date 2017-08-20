import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import Detail from './screen/Detail';
import Account from './screen/Account';
import Login from './screen/Login';

const HomeNavigator = TabNavigator({
    Home: {screen: HomeScreen},
    Account: {screen: Account},
});

const MainNavigator = StackNavigator({
    Home: {screen: HomeNavigator},
    Detail: {screen: Detail}
});

export const AppNavigator = StackNavigator({
        Main: {screen: MainNavigator},
        Login: {screen: Login},
    }, {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
);