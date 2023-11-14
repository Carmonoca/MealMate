import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Alimentos() {
  return (
    <SafeAreaView style={styles.containerLogin}>
    <Text>Alimentos</Text>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containerLogin: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F2FFE2',
    },
  });
  