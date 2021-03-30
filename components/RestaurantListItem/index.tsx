import React from 'react';
import { Image, View, Text } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { RestList } from '../../types';
import styles from './styles';

export type RestaurantListItemProps = {
    restList: RestList,
}

const RestaurantListItem = (props: RestaurantListItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.restList.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
            <Text style={styles.hotelName}> {props.restList.hotelName} </Text>
            <Text style={styles.item}> {props.restList.item} </Text>

            <View style={styles.secondContainer}>
            <Text style={styles.address}> {props.restList.address} |</Text>
            <Text style={styles.kilometers}> {props.restList.kilometers} kms</Text>
            </View>

            <View style={styles.thirdContainer}>
            <AntDesign name="star" size={20} color={'#545454'} />
            <Text style={styles.rating}>  {props.restList.rating} .</Text>
            <Text style={styles.deliveryTime}>  {props.restList.deliveryTime} mins .</Text>
            <Text style={styles.offers}>  {props.restList.offers} for two</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.fourthContainer}>
            <FontAwesome5 name="percent" size={15} color={'#d1642e'} />
            <Text style={styles.coupons}> {props.restList.coupons}</Text>
            </View>

            </View>
        </View>
    )
}

export default RestaurantListItem;