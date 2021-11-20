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
                            {/* <FontAwesomeIcon icon={ faHeartbeat } size={64} color={'red'}/>                             */}
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F9E9',
        width: 200,
        height: 200,
        borderRadius: 40,
    },

    intern_border:{
        borderRadius: 45,
        width: 90,
        height: 90,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: '#808080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' 
    },

    text_button: {
        fontSize: 20,
        color: '#000',
    },

    border_circle: {
        borderWidth: 1,
        borderStyle: 'solid',
        width: 200,
        height: 200,
        borderRadius: 40,
   }
});

export default PanicButton;