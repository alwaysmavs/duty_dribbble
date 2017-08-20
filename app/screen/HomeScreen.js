import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import home from '../static/home.png';
import home_focuse from '../static/home_focuse.png';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'dribbbe',
        tabBarIcon: ({ focused, tintColor }) =>
            <Image
                style={styles.icon}
                source={focused ? home_focuse : home}
            />,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={() => navigate('Detail')}>
                    Go to detail
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    icon: {
        width: 20,
        height: 20,
    },
});