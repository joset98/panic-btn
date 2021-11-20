import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeartbeat  } from '@fortawesome/free-solid-svg-icons'



const PanicButtonStyled = ({  
        children,
        label,
        handlePress
    }) => { 

        return (
            <View>

                <View style={styles.border_circle}>

                    <TouchableOpacity style={styles.container} onPress={handlePress}>
                        <Text style={styles.text_button}>
                            <View style={styles.intern_border}>
                                <FontAwesomeIcon icon={ faHeartbeat } size={64} color={'red'}/>                            
                            </View>
                            {children ?? label}
                        </Text>

                    </TouchableOpacity>

                </View>
            </View>

        )        
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F9E9',
        width: 300,
        height: 300,
        borderRadius: 40,
    },

    intern_border:{
        borderRadius: 45,
        width: 90,
        height: 90,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: '#808080',    
    },

    text_button: {
        fontSize: 20,
        display: 'flex',
        color: '#000',
        textAlign: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'column'
    },

    border_circle: {
        borderWidth: 1,
        borderStyle: 'solid',
        width: 300,
        height: 300,
        borderRadius: 40,
   }
});

export default PanicButtonStyled;