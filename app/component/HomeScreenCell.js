import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import {imageLarge} from '../Theme';

export default class HomeScreenCell extends Component {


    render() {
        const {data} = this.props;
        
        return (
            <View>
                <Image
                    style={styles.imageSize}
                    source={{uri: data.images.normal}}
                />
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
    imageSize: {
        width:imageLarge.width,
        height: imageLarge.height
    }
});