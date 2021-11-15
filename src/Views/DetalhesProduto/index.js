import React from "react";
import {View, Text, StyleSheet} from 'react-native';

import { Background } from "./componentes/background";
import { DescricaoItem } from "./componentes/descricao";

export const DetalhesProduto = ({route}) => {
    const {titulo, imagem, estudio, itemDesc, itemName, preco, id} = route.params;
    return (
        <View style={styles.container} >
            <Background />
            <DescricaoItem
                titulo={titulo}
                imagem={imagem}
                estudio={estudio}
                itemDesc={itemDesc}
                itemName={itemName}
                preco={preco}
                id={id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})