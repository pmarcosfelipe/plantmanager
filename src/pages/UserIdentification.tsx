import React from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>😃</Text>
          <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
          <TextInput style={styles.input} />
        </View>
        {/* <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>

        <Image
          source={wateringImage}
          style={styles.image}
          redizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: { flex: 1, width: '100%' },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontFamily: fonts.heading,
    lineHeight: 32,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  // wrapper: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   paddingHorizontal: 20,
  // },

  // subtitle: {
  //   fontFamily: fonts.text,
  //   fontSize: 18,
  //   textAlign: 'center',
  //   paddingHorizontal: 20,
  //   color: colors.heading,
  // },
  // image: {
  //   height: Dimensions.get('window').width * 0.7,
  // },
  // button: {
  //   backgroundColor: colors.green,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 16,
  //   marginBottom: 10,
  //   width: 56,
  //   height: 56,
  // },
  // buttonIcon: {
  //   fontSize: 32,
  //   color: colors.white,
  // },
});
