import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>

			<Text>Detalles</Text>
			<Button
				title="Go to details screen...again"
				onPress={() => navigation.push("Details")}
			/>
			<Button
				title="Go to home"
				onPress={() => navigation.navigate("Home")}
			/>
			<Button
				title="Volver"
				onPress={() => navigation.goBack()}
			/>

		</View>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});
