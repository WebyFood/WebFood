import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const OtherScreen = () => {
  const navigation = useNavigation()

  const cardsData = [
    {
      image: require('../assets/prato1.jpg'),
      titulo: 'Chorume da manhã',
      ingredientes: 'Café com leitinho de vaca e um assadinho.',
      valor: 'R$ 25,90',
    },
    {
      image: require('../assets/prato2.jpg'),
      titulo: 'Bolinho de Fubá',
      ingredientes: 'Um pouco seco, mas comestível.',
      valor: 'R$ 18,50',
    },
    {
      image: require('../assets/prato3.jpg'),
      titulo: 'Cacetinho',
      ingredientes: 'Clássico e gostoso, apenas.',
      valor: 'R$ 6,50',
    },
    {
      image: require('../assets/prato4.jpg'),
      titulo: 'Cafézinho preto',
      ingredientes: 'Essencial para vida humana.',
      valor: 'R$ 20,50',
    },
  ];

  const irProduto = (card) => {
    console.log(card)
    navigation.navigate('Produto', {card})
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/capa.png')} style={styles.capa} />
      <TextInput
        style={styles.searchInput}
        placeholder="Qual comida você procura?"
      />
      <Text style={styles.titulo}>Comidas</Text>

      <ScrollView>
        {cardsData.map((card, index) => (
          <View key={index} style={styles.cardContainer}>
            <Image source={card.image} style={styles.comidaImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.cardTitulo}>{card.titulo}</Text>
              <Text style={styles.cardIngredientes}>{card.ingredientes}</Text>
              <Text style={styles.cardValor}>{card.valor}</Text>
            </View>
            <TouchableOpacity style={styles.comprarButton}>
              <Text style={styles.comprarButtonText} onPress={(e) => {irProduto(card)}} > Comprar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  capa: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  searchInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 25,
    color: '#21012e',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 0,
  },
  comidaImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 10, // Adicione esta linha para remover a margem à direita da imagem
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    padding: 15,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#21012e',
  },
  cardIngredientes: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  cardValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  comprarButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  comprarButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OtherScreen;
