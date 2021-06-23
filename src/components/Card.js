import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*
  avatar
  nome
  nome de usuário
  tempo
  conteúdo
  barrinha de funções
*/

export default function Card() {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Nosso Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
  },

  text: {
    color: 'white'
  }
});
