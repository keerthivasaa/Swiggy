import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
    album: Album,
}

const AlbumComponent = (props: AlbumProps) => {

    return (
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.imageUri} />
            </View>

    )
}

export default AlbumComponent;