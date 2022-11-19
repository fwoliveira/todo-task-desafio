import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import logo from '../assets/images/logo/logo1.png';

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    height: 173
  },
  logo: {
    width: 130,
    height: 36,
  }
});