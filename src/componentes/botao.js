import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export const Botao = ({titulo, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.botaoContainer}>
                <Text style={styles.texto}>{titulo}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botaoContainer: {
        backgroundColor: '#2A7AE4',
        padding: 20,
        borderRadius: 6,
    },
    texto: {
        fontWeight: '600',
        fontSize: 16,
        color: '#fff'
    }
})