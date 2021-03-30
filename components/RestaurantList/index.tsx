import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import restaurantDetails from '../../data/restaurantDetails';
import FullAlbumComponent from '../FullAlbumComponent';
import PocketFullAlbumComponent from '../PocketFullAlbumComponent ';
import RestaurantListItem from '../RestaurantListItem';

const RestaurantList = () => {

    return(
        <View>
            <FlatList 
                data={restaurantDetails.songs}
                renderItem={({ item }) => <RestaurantListItem song={item} /> }
                keyExtractor= {( item ) => item.id}
            />
        </View>
    )
}

export default RestaurantList;