import React from 'react';
import { Text, StyleSheet } from 'react-native';


const Label = ({  
        label,
        stylesComponent
    }) => { 

        return (
            <Text style={stylesComponent? stylesComponent : styles.textLabel}>
                {label}
            </Text>
        )        
}

const styles = StyleSheet.create({
    textLabel:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        color: '#595856'
    },
});

export default Label;