import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import search from '../static/search.png';
import search_focuse from '../static/search_focuse.png';

export default class Search extends Component {
    static navigationOptions = {
        title: 'Search',
        tabBarIcon: ({ focused, tintColor }) =>
            <Image
                style={styles.icon}
                source={focused ? search_focuse : search}
            />,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Search
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