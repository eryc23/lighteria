import React from "react";
import {View, Text,  StyleSheet} from 'react-native';

import { COR_DE_FUNDO, FONT_FAMILY_REGULAR } from '../../../../styles/styles';
import { Sacola } from "../../../../componentes/sacola";

const Cabecalho = () => {
    return (
        <>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Lighteria</Text>
                <Sacola />
            </View>
            <View style={styles.containerDescricao}>
                <View style={styles.separador} />
                <View style={styles.containerTexto}>
                    <Text style={styles.textoDescricao}>Categorias</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 6,
    },
    containerDescricao: {
        // paddingHorizontal: 24
    },
    containerTexto:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -36,
    },
    separador: {
        borderWidth: 0.5,
        borderColor: '#A1A5AA',
    },
    titulo: {
        color: '#000',
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 28,
        fontWeight: 'bold'
    },
    textoDescricao: {
        padding: 24,
        backgroundColor: COR_DE_FUNDO,
        fontSize: 16,
        fontFamily: FONT_FAMILY_REGULAR,
        color: '#A1A5AA'
    }
})

export default Cabecalho;