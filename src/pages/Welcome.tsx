import React from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>

      <Image source={wateringImage} style={styles.image} redizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>{'t'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});
