import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import search from '../static/search.png';
import search_focuse from '../static/search_focuse.png';
import {HomeScreenData} from '../mock_data/Data';
import SearchScreenCell from '../component/SearchScreenCell';
import {window} from '../Theme';

export default class Search extends Component {
    static navigationOptions = {
        title: 'Search',
        tabBarIcon: ({ focused, tintColor }) =>
            <Image
                style={styles.icon}
                source={focused ? search_focuse : search}
            />,
        headerStyle:{
            backgroundColor:'white'
        }
    };

    _keyExtractor = (item, index) => item.id;

    _onPressItem(){
        const {navigate} = this.props.navigation;
    }

    _renderItem = ({item}) => (
        <SearchScreenCell
            data={item}
        />
    );

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={HomeScreenData}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    horizontal={false}
                    numColumns={3}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:window.width,
        height:window.height,
        backgroundColor:'white',
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