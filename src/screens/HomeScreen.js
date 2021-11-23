import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
	StatusBar,
	Linking,
	Alert,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PanicButton from '../components/PanicButton/PanicButton';

const HomeScreen = ({ navigation }) => {

	const { colors } = useTheme();

	const theme = useTheme();

	const supportedPhone = "tel:04148699636";

	const handleCall = async () => {
		// Checking if the link is supported for links with custom URL scheme.
		const supported = await Linking.canOpenURL(supportedPhone);

		if (!supported) {
			Alert.alert('Error en la acción',
				`No fue posible realizar la llamada`);
			return;
		}
		await Linking.openURL(supportedPhone);

	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />

			<View style={styles.header}>
				<Text style={styles.text_header}>Home</Text>
			</View>
			<View style={styles.btnContainer}>

				<PanicButton
					icon={<Icon name="heartbeat" size={40} color="#900" />}
					handlePress={handleCall}
				>
					Emergency Button
				</PanicButton>

			</View>

			{/* <Button
				title="Go to details screen"
				onPress={() => navigation.navigate("Details")}
			/> */}
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},

	header: {
		paddingVertical: 20
	},

	text_header: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 25
	},

	btnContainer:{
		flex: 1,
	},
});
