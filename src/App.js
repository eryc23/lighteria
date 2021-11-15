import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import ListaProdutos from "./Views/ListaProdutos";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COR_DE_FUNDO } from './styles/styles';
import { DetalhesProduto } from "./Views/DetalhesProduto";
import { Checkout } from "./Views/Checkout";

import Provider from "./provider";


const Stack = createNativeStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Provider>
                <SafeAreaView style={styles.container}>
                    {/* <ListaProdutos /> */}
                    <Stack.Navigator initialRouteName="ListaProdutos">
                        <Stack.Screen name="ListaProdutos" component={ListaProdutos} options={{headerShown: false}} />
                        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} options={{headerShown: false}} />
                        <Stack.Screen name="Checkout" component={Checkout} options={{headerShown: false}} />
                    </Stack.Navigator>
                </SafeAreaView>
            </Provider>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COR_DE_FUNDO
    },
})

export default App;