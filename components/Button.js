import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({style, children}) {
    return <TouchableOpacity style={style ? style : styles.button}>{children}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "tomato", 
        padding: 4, 
        borderRadius: 2
    }
})