import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import Detail from './screen/Detail';
import Account from './screen/Account';
import Login from './screen/Login';
import Search from './screen/Search';
import Like from './screen/Like';

const HomeNavigator = TabNavigator({
    Home: {screen: HomeScreen},
    Search: {screen: Search},
    Like: {screen: Like},
    Account: {screen: Account},
}, {
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
        showIcon: 'true', // Shows an icon for both iOS and Android
        showLabel: false, //No label for Android
        style:{
            backgroundColor:'white'
        }
    },

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