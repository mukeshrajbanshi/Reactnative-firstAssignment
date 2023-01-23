import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native'
import React from 'react'

export default function Light() {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <Text>ActivityIndicator</Text>
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });