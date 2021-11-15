import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Botao } from "../../componentes/botao";
import { DataContext } from "../../provider";
import { CheckoutItem } from "./CheckoutItem";

export const Checkout = () => {
    const {itensCheckout} = useContext(DataContext);
    const navigation = useNavigation();

    const valorTotal = itensCheckout.reduce(
        (acumulado, atual) => acumulado + atual.quantidade * atual.preco, 0
    )

    const Titulo = ({children}) => <Text style={styles.titulo}>{children}</Text>;
    const Total = ({children}) => <Text style={styles.total}>{children}</Text>;

    return (
        <View style={styles.container}>
            <Titulo>Checkout</Titulo>
            {itensCheckout.map((item) => (
                <CheckoutItem {...item} key={item.id} />
            ))}
            <Total>R$ {valorTotal}</Total>
            <Botao titulo='FINALIZAR COMPRA' />
            <TouchableOpacity onPress={()=> navigation.push('ListaProdutos')}>
                <Text style={styles.continuarTexto}>Continuar comprando</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24,
    },
    titulo: {
        fontWeigth: "800",
        fontSize: 20,
        marginBottom: 10
    },
    total: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 36
    },
    continuarTexto: {
        fontWeight: '800',
        fontSize: 16,
        color: '#2A7AE4',
        marginTop: 20,
        textAlign: 'center'
    }
})