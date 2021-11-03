import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import styled from 'styled-components/native';
// import PanicButtonRed from './components/PanicButton/PanicButtonRed';
// import PanicButtonImage from './components/PanicButton/PanicButtonImage';
import PanicButtonStyled from './components/PanicButton/PanicButtonStyled';
import * as SMS from 'expo-sms';

const StyledView = styled.View`
	flex: 1;
  	background-color: rgb(8, 92, 121);
	text-shadow-offset: 10px 5px;
	align-items: center;
	justify-content: center;
`

export default function App() {

	const handleSendMessage = async () =>{
		await Linking.openURL("sms:+123456789?body=mensaje de texto predeefinido");
	} 

	const handleExpoSendMessage = async () =>{
		const isAvailable = await SMS.isAvailableAsync();
		console.log('clicked')
		console.log(isAvailable)
		if (isAvailable) {
		// do your SMS stuff here
			console.log('sending message')
			const { result } = await SMS.sendSMSAsync(
				['+5804249653454', '04148893812'],
				'My sample HelloWorld message',
				{}
			  );
			console.log(result)
			result === 'sent' && alert('mensaje enviado');
		} else {
		// misfortune... there's no SMS available on this device
		}

	} 

	return (
		<StyledView>

			{/* <PanicButtonRed label="Emergency Button"/> */}
			{/* <PanicButtonImage label="Emergency Button" onPress={handleSendMessage}/> */}
			{/* <PanicButtonImage label="Emergency Button" onPress={handleExpoSendMessage} /> */}
			<PanicButtonStyled label="Emergency Button" handlePress={handleExpoSendMessage} />
			
		</StyledView>
	);
}

