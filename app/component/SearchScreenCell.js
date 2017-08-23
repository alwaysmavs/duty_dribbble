import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

import {imageSmall} from '../Theme';

export default class SearchScreenCell extends Component {


    render() {
        const {data} = this.props;

        return (
            <View style={styles.container}>
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
        alignItems: 'center',
        width:imageSmall.width,
        height: imageSmall.height
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    imageSize: {
        width:imageSmall.width - 2,
        height: imageSmall.height - 2
    }
});