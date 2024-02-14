import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.conteiner, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    conteiner: {
        shadowColor: "#ffff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8,
    },
});