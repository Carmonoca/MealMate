import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Alimentos() {
  return (
    <View style={styles.containerLogin}>
      <Text>Alimentos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerLogin: {
      backgroundColor: '#F2FFE2',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  