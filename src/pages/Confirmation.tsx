import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleStart() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title} </Text>

        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleStart} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
  title: {
    fontFamily: fonts.heading,
    lineHeight: 38,
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 50,
  },
});
