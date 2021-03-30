import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FullAlbumComponent from '../components/FullAlbumComponent';
import PocketFullAlbumComponent from '../components/PocketFullAlbumComponent ';
import RestaurantList from '../components/RestaurantList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PocketFullAlbumComponent />
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
