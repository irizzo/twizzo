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
  return (
    <View style={styles.cardContainer}>
      <View style={styles.relationContainer}>
        <Text style={styles.text}>Relação</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.avatarContainet}>
          <Text style={styles.text}>Avatar</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Conteúdo</Text>
          </View>
          <View style={styles.optionsContainer}>
            <Text style={styles.text}>Opções</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    width: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
  },

  relationContainer: {
    width: '100%',
  },

  cardBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',

    width: '100%',
  },

  text: {
    color: 'white',
  },
});
