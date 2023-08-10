// Rodape.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Rodape = () => {
  return (
    <View style={styles.rodape}>
      {/* Conteúdo do rodapé */}
    </View>
  );
};

const styles = StyleSheet.create({
  rodape: {
    backgroundColor: 'purple', // Cor roxa
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 150,
    height: 50
  },
});

export default Rodape;
