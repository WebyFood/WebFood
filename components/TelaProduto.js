import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Rodape from './Rodape';


export default function TelaProduto() {
    const route = useRoute();
    const produto = route.params.card;
    const navigation = useNavigation();
    console.log(produto);

    const valorProduto = parseFloat(produto.valor.replace('R$ ', '').replace(',', '.'));
    const valorFrete = 10.00; // Valor fixo do frete

    const subtotal = valorProduto;
    const total = subtotal + valorFrete;

    const [showOverlay, setShowOverlay] = useState(false);

    const finalizarCompra = () => {
        setShowOverlay(true);
        Alert.alert('Compra Realizada', 'Compra realizada com sucesso!', [
            { text: 'OK', onPress: () => {
                setShowOverlay(false);
                navigation.navigate('Inicial');
            }}
        ]);
    };

    const navigateToTelaInicial = () => {
        const navigation = useNavigation();
        navigation.navigate('Inicial');
    };

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image source={produto.image } style={styles.imagemProduto} />
                <Text style={styles.titulo}>{produto.titulo}</Text>
                <Text style={styles.ingredientes}>{produto.ingredientes}</Text>
                <View style={styles.linhaSeparadora} />
                <Text style={styles.valorInfo}>Subtotal: R$ {subtotal.toFixed(2)}</Text>
                <Text style={styles.valorInfo}>Frete: R$ {valorFrete.toFixed(2)}</Text>
                <Text style={styles.valorInfoTotal}>Total: R$ {total.toFixed(2)}</Text>
            </View>
                <TouchableOpacity style={styles.botaoFinalizar}>
                    <Text style={styles.textoBotao} onPress={finalizarCompra}>Finalizar Compra</Text>
                </TouchableOpacity>
                {showOverlay && <View style={styles.overlay} />}
                <Rodape/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 128, 0, 0.3)',
    },
    infoContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 0,
        marginTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    imagemProduto: {
        width: 400,
        height: 230,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
        color: '#21012e',
        marginTop: 10,
    },
    ingredientes: {
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 10,
        color: 'gray',
    },
    linhaSeparadora: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray', // Cor da linha separadora
        width: '100%',
        marginVertical: 10,
    },
    valorInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1976D2',
        marginBottom: 5,
        marginLeft: 10,
    },
    valorInfoTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        marginLeft: 5,
        marginTop: 10,
    },
    botaoFinalizar: {
        backgroundColor: 'green',
        borderRadius: 20,
        marginTop: 50,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
});