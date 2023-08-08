import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Importar os estilos do arquivo styles.js

const HomeScreen = () => {
  const navigation = useNavigation(); // Hook de navegação

  const navigateToInicialScreen = () => {
    navigation.navigate('Inicial'); // Navegar para a tela Inicial
  };

  return (
    <ImageBackground
      source={require('../assets/logo.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/capa.png')} style={styles.logo} />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            Uma{'\n'}
            verdadeira{'\n'}
            experiência{'\n'}
            WebGastronômica.{'\n'}
          </Text>
        </View>
        <TouchableOpacity onPress={navigateToInicialScreen}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar no restaurante</Text>
            <Image source={require('../assets/porta.png')} style={styles.buttonImage} />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
