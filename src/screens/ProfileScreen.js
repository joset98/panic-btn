import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    StatusBar
} from 'react-native';
import { useTheme } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import useAuthUser from '../hooks/useAuthUser';

const initUser = {
    number_phone:'',
    name:'',
    last_name:'',
    email:'',
    address:'',
}

const ProfileScreen = ({ navigation }) => {

    const {user = initUser} = useAuthUser();

    const [currentDataUser, setCurrentDataUser] = useState(user);

    console.log(`currentDataUser: ${currentDataUser}`)

    const textInputChange = (evt, inputName) => {
        console.log(evt)
        console.log(inputName)
        
        setCurrentDataUser(( prevState ) => ({
            ...prevState,
            [inputName]: evt, 
            }
        ));
    }
    const textInputChange2 = (evt, key) => {
        console.log(evt.target.value)
        console.log(evt.nativeEvent)

    };

    const saveUserChanges = (evt) => {
        console.log('evt')
        console.log(evt)
        console.log('change user')
        console.log(currentDataUser)

    };

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor='#009387' barStyle="light-content" />

            <View style={styles.header}>
                <Text style={styles.text_header}>Datos de perfil de usuario</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>

                    <View style={styles.inputProfileForm}>
                        <Text style={styles.textForm}>Correo Electrónico</Text>

                        <View style={styles.action}>
                            <TextInput
                                // defaultValue={currentDataUser.email}
                                value={currentDataUser.email}
                                placeholder="Email"
                                style={styles.textInput}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={(evt) => textInputChange( evt, 'email')}
                            />

                        </View>
                    </View>

                    <View style={styles.inputProfileForm}>
                        <Text style={styles.textForm}>Nombre</Text>

                        <View style={styles.action}>
                            <TextInput
                                placeholder="Nombre"
                                value={currentDataUser.name}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(evt) => textInputChange( evt, 'name')}
                            />

                        </View>
                    </View>

                    <View style={styles.inputProfileForm}>
                        <Text style={styles.textForm}>Apellido</Text>

                        <View style={styles.action}>
                            <TextInput
                                placeholder="Apellido"
                                value={currentDataUser.last_name}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(evt) => textInputChange( evt, 'last_name')}
                            />

                        </View>
                    </View>

                    <View style={styles.inputProfileForm}>

                        <Text style={styles.textForm}>Teléfono</Text>

                        <View style={styles.action}>
                            <TextInput
                                placeholder="ejm: 04245637893"
                                value={currentDataUser.phone}
                                style={styles.textInput}
                                autoCapitalize="none"
                                returnKeyType="done"
                                keyboardType="phone-pad"
                                onChangeText={(evt) => textInputChange( evt, 'phone')}
                                // onChange={ textInputChange2}
                            />

                        </View>
                    </View>

                    <View style={styles.inputProfileForm}>
                        <Text style={styles.textForm}>Direccion</Text>

                        <View style={styles.action}>
                            <TextInput
                                placeholder="Direccion de residencia"
                                value={currentDataUser.address}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(evt) => textInputChange( evt, 'address')}
                            />

                        </View>
                    </View>

                    <View style={styles.button}>

                        <TouchableOpacity
                            onPress={saveUserChanges}
                            style={[styles.signIn, styles.textSignOutline]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>
                                Guardar cambios
                            </Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </Animatable.View>

        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({

    container: {
		flex: 1,
		backgroundColor: '#009387'
	},

	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 30
	},

	footer: {
		flex: Platform.OS === 'ios' ? 3 : 5,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30
	},

	text_header: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 25
	},

	inputProfileForm: {
		paddingVertical: 10,
	},

	textForm: {
		color: '#05375a',
		fontSize: 18
	},

	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5
	},

	textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -12,
		paddingLeft: 10,
		color: '#05375a',
	},

	button: {
		alignItems: 'center',
		marginTop: 50
	},

	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},

	textSign: {
		fontSize: 18,
		fontWeight: 'bold'
	},

	textSignOutline: {
		borderColor: '#009387',
		borderWidth: 1,
		marginTop: 15
	}


});
