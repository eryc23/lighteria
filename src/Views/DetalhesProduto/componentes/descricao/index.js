import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import { Botao } from '../../../../componentes/botao';


export const DescricaoItem = (props) =>{
    const navigation = useNavigation();
    const {imagem, estudio, itemDesc, itemName, titulo, preco, id} = props;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.textoPosicao}>
                        <View>
                            <Text style={styles.textoSuperior}>{estudio}</Text>
                            <Text style={styles.textoMedio}>{itemName}</Text>
                            <Text style={styles.textoInferior}>{titulo}</Text>
                        </View>
                        <Image source={imagem} style={styles.imagem} />
                    </View>
                    <Text>{itemDesc}</Text>
                    <View style={styles.rodape}>
                        <Text style={styles.moeda}>R$ {preco}</Text>
                        <Botao titulo='COMPRAR' width='100%' onPress={() => navigation.push('Checkout')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 4,
        marginTop: -60,
    },
    itemPosicao: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 28,
        width: '80%',
        elevation: 4,
    },
    textoPosicao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagem: {
        width: 30, height: 72
    },
    textoSuperior: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 4
    },
    textoMedio: {
        fontWeight: '900',
        fontSize: 18,
        marginBottom: 4
    },
    textoInferior: {
        fontWeight: '400',
        fontSize: 14,
        color: '#CACACA',
        marginBottom: 12
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    moeda: {
        fontWeight: '700',
        fontSize: 18,
        color: '#000'
    }
})