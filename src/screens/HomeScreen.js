import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PanicButton from '../components/PanicButton/PanicButton';

const HomeScreen = ({ navigation }) => {

	const { colors } = useTheme();

	const theme = useTheme();

	return (
		<View style={styles.container}>
			<StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
			<Text style={{ color: colors.text }}>Home Screen</Text>
			<Button
				title="Go to action auth"
				onPress={() => alert('testing')}
			/>
			<PanicButton
				icon={<Icon name="heartbeat" size={60} color="#900" />}	
			>
				Emergency Button	
			</PanicButton>

			<Button
				title="Go to details screen"
				onPress={() => navigation.navigate("Details")}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});
