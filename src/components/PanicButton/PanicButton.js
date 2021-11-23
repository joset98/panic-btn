import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const PanicButton = ({  
        children,
        label,
        icon,
        handlePress
    }) => { 

        return (
            <View>

                <View style={styles.border_circle}>

                    <TouchableOpacity style={styles.container} onPress={handlePress}>
                        <View style={styles.intern_border}>
                            {icon}
                        </View>
                        <View>
                            <Text style={styles.text_button}>
                                {children ?? label}
                            </Text>
                        </View>

                    </TouchableOpacity>

                </View>
            </View>

        )        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F9E9',
        width: 100,
        height: 100,
        borderRadius: 20,
    },

    intern_border:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0.8,
        borderStyle: 'solid',
        borderColor: '#808080',
    },

    text_button: {
        fontSize: 10,
        color: '#000',
    },

    border_circle: {
        borderWidth: 1,
        borderStyle: 'solid',
        width: 100,
        height: 100,
        borderRadius: 20,
   }
});

export default PanicButton;