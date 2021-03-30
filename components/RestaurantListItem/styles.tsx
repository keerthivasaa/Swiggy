import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
    },
    image: {
        width: 110,
        height: 145,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
        },
    hotelName: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        color: '#636261',
        fontSize: 20,
        marginTop: 3,
    },
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,

    },
    address: {
        color: '#636261',
        fontSize: 20,
    },
    kilometers: {
        color: '#636261',
        fontSize: 20,
    },
    thirdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    rating: {
        color: 'black',
        fontSize: 20,
    },
    deliveryTime: {
        color: 'black',
        fontSize: 20,
    },
    offers: {
        color: 'black',
        fontSize: 20,
    },
    line: {
        marginTop: 10,
        marginLeft: 7,
        width: '100%',
        height: 1,
        backgroundColor: "lightgray",
    },
    fourthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
    },
    coupons: {
        marginLeft: 7,
        color: '#636261',
        fontSize: 20,
    }
})

export default styles;
