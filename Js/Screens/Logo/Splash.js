import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { screenHeight, screenWidth, widthValue } from '../../Utils/Styles';

const Splash = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.view}>
            <Image source={require('../../../assets/Splash2-removebg-preview.png')}
                style={[ {  width:widthValue(1.5),height:widthValue(1.5),resizeMode: 'contain' }]} />
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111113',
    },
});
