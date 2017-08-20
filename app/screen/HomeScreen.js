import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import home from '../static/home.png';
import home_focuse from '../static/home_focuse.png';
import add from '../static/add.png';
import filter from '../static/filer.png';
import dribbble from '../static/dribbble.png';
import HomeScreenCell from '../component/HomeScreenCell';
import {HomeScreenData} from '../mock_data/Data';

export default class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: <Image style={{width:66.23,height:16}} source={dribbble} />,
        tabBarIcon: ({ focused, tintColor }) =>
            <Image
                style={styles.icon}
                source={focused ? home_focuse : home}
            />,
        headerLeft: <Image style={{width:18,height:18,marginLeft:20}} source={filter} />,
        headerRight: <Image style={{width:20,height:20,marginRight:20}} source={add} />,
        headerStyle:{
            backgroundColor:'white'
        }
    };

    _keyExtractor = (item, index) => item.id;

    _onPressItem(){
        const {navigate} = this.props.navigation;
    }

    _renderItem = ({item}) => (
        <HomeScreenCell
            data={item}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={HomeScreenData}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
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