import React from 'react';
import {
	View,
	Text,
	Button,
	TouchableOpacity,
	Dimensions,
	TextInput,
	Platform,
	StyleSheet,
	ScrollView,
	StatusBar
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const SupportScreen = ({ navigation }) => {

	return (

		<View style={styles.container}>

			<StatusBar backgroundColor='#009387' barStyle="light-content" />

			<View style={styles.containerContent}>

				<View style={styles.header}>
					<Text style={styles.text_header}>Sopport Screen</Text>
				</View>

				<TouchableOpacity
					style={styles.signIn}
					onPress={() => { loginHandle(data.username, data.password) }}
				>
					<LinearGradient
						colors={['#08d4c4', '#01ab9d']}
						style={styles.signIn}
					>
						<Text
							style={[styles.textSign, { color: '#fff' }]}
						>
							Login
						</Text>
					</LinearGradient>

				</TouchableOpacity>

			</View>

		</View>
	);
};

export default SupportScreen;

const styles = StyleSheet.create({

	container: {
		flex: 1,
		// backgroundColor: '#009387'
	},

	containerContent: {
		flex: 1,
		paddingTop: 20
	},

	header: {
		flex: 1,
		// justifyContent: 'flex-end',
		alignItems:'center',
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
		color: '#000',
		fontWeight: 'bold',
		fontSize: 25
	},

	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},

	textSign: {
		fontSize: 18,
		fontWeight: 'bold'
	},

});
