import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import user from '../../assets/marcos.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    async function loadStorageUsername() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUsername(user || '');
    }

    loadStorageUsername();
  }, [username]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{username}</Text>
      </View>

      <Image source={user} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
