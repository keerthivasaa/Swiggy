import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumCategory from '../AlbumCategory';
import albumCategories from '../../data/albumCategories';
import PocketFullAlbumComponent from '../PocketFullAlbumComponent';

export default function FullAlbumComponent() {
    return (
        <View style={styles.container}>
            {<FlatList
                data={albumCategories}
                renderItem={({ item }) => (
                <AlbumCategory albums={item.albums} />)}
                keyExtractor={(items) => items.id}
                showsVerticalScrollIndicator
            />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
