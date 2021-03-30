import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Album } from "../../types";
import styles from './styles';
import PocketComponent from "../PocketAlbum";

export type PocketAlbumCategoryProps = {
  albums: [Album],
}

const AlbumCategory = (props: PocketAlbumCategoryProps) => (
  <View style={styles.container}>
    <FlatList
      data={props.albums}
      renderItem={({ item }) => <PocketComponent album={item} />}
      keyExtractor={( item ) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  </View>
)

export default AlbumCategory;