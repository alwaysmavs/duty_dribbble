import {Dimensions} from 'react-native';

export const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

export const imageLarge = {
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
};

export const imageSmall = {
    width:Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
};