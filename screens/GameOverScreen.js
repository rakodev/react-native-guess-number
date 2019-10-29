import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageWrapper}>
                {/* <Image source={require('../assets/img/success.png')} style={styles.image} resizeMode="cover" /> */}
                <Image source={{ uri: 'https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg' }} style={styles.image} resizeMode="cover" />
            </View>
            <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress="{props.onRestart}" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: "hidden",
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default GameOverScreen;