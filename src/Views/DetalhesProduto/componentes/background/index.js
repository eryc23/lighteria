import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Sacola } from '../../../../componentes/sacola';


export const Background = () =>{
    const navigation = useNavigation();

    return (
        <View style={styles.bgContainer}>
            <ImageBackground
                resizeMode="cover"
                source={require('../../../../assets/images/bgimg.jpg')}
                style={styles.imagemFundo}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}> 
                            <Image style={styles.imagemSeta} source={require('../../../../assets/images/flecha-esquerda.png')} />
                        </TouchableOpacity>
                        <View style={styles.containerSacola}>
                            <Sacola />
                        </View>
                    </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        flex: 6
    },
    imagemFundo: {
        width: Dimensions.get('window').width,
        height: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagemSeta: {
        width: 24,
        height: 24,
        marginTop: 36,
        marginLeft: 24,
    },
    containerSacola: {
        padding: 18,
    }
})