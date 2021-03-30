import React from 'react';
import { Image, View, Text } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Song } from '../../types';
import styles from './styles';

export type RestaurantListItemProps = {
    song: Song,
}

const RestaurantListItem = (props: RestaurantListItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.song.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
            <Text style={styles.hotelName}> {props.song.hotelName} </Text>
            <Text style={styles.item}> {props.song.item} </Text>

            <View style={styles.secondContainer}>
            <Text style={styles.address}> {props.song.address} |</Text>
            <Text style={styles.kilometers}> {props.song.kilometers} kms</Text>
            </View>

            <View style={styles.thirdContainer}>
            <AntDesign name="star" size={20} color={'#545454'} />
            <Text style={styles.rating}>  {props.song.rating} .</Text>
            <Text style={styles.deliveryTime}>  {props.song.deliveryTime} mins .</Text>
            <Text style={styles.offers}>  {props.song.offers} for two</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.fourthContainer}>
            <FontAwesome5 name="percent" size={15} color={'#d1642e'} />
            <Text style={styles.coupons}> {props.song.coupons}</Text>
            </View>

            </View>
        </View>
    )
}

export default RestaurantListItem;