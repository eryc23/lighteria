import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export const Item = ({imagem, titulo, estudio, itemDesc, itemName, preco, id}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.push('DetalhesProduto', {
            imagem, titulo, estudio, itemDesc, itemName, preco, id
        })} style={styles.containerItem}>
            <Image style={styles.imagem} source={imagem} resizeMode="contain"/>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        height: 168,
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    imagem: {
        height: 84,
    },
    texto:{
        marginTop: 8,
        fontSize: 14,
        color: '#848486',
    }
})