import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { DataContext } from "../provider";

export const Sacola = () =>{
    const navigation = useNavigation();
    const {itensCheckout} = useContext(DataContext);

    return (
        <TouchableOpacity onPress={()=> navigation.push('Checkout')} >
            <View style={styles.containerSacola}>
                <Image source={{uri: 'https://img.icons8.com/ios/500/shopping-bag--v1.png'}} style={styles.imagem} />
                {itensCheckout.length > 0 ? (
                <View style={styles.containerQuantidade}>
                    <Text style={styles.textoQuantidade}>{itensCheckout.reduce((acumulado, atual) => acumulado + atual.quantidade)}</Text>
                </View>) : null}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerSacola: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 40,
        color: '#fff'
    },
    imagem: {
        height: 30,
        width: 30,
    },
    containerQuantidade: {
        backgroundColor: 'red',
        borderRadius: 100,
        marginTop: -22,
        marginLeft: 11
    },
    textoQuantidade:{
        textAlign: 'center',
        padding: 4,
        fontSize: 10,
        fontWeight: '600',
        color: '#fff'
    },
})