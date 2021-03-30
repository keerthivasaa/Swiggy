import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PocketAlbumCategory from '../PocketAlbumCategory';
import pocketAlbumCategories from '../../data/pocketAlbumCategories';
import RestaurantList from '../RestaurantList';
import FullAlbumComponent from '../FullAlbumComponent';

export default function PocketFullAlbumComponent() {
    return (
        <View style={styles.container}>
            {<FlatList
                data={pocketAlbumCategories}
                renderItem={({ item }) => (
                <PocketAlbumCategory albums={item.albums} />)}
                keyExtractor={(items) => items.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent= {<FullAlbumComponent />}
                ListFooterComponent= {<RestaurantList />}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
    
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
