import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black', // shadowXxx works only for iOs
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5, // this property works only for android
        backgroundColor: 'white',
        padding: 20,
    }
});

export default Card;