import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import account from '../static/account.png';
import account_focuse from '../static/account_focuse.png';

export default class Account extends Component {
    static navigationOptions = {
        title: 'account',
        tabBarIcon: ({ focused, tintColor }) =>
            <Image
                style={styles.icon}
                source={focused ? account_focuse : account}
            />,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Account
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
        height: 18.9,
    },
});