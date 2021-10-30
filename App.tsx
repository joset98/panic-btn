import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PanicButtonRed from './components/PanicButton/PanicButtonRed';

const StyledView = styled.View`
	flex: 1;
  	background-color: rgb(8, 92, 121);
	text-shadow-offset: 10px 5px;
	align-items: center;
	justify-content: center;
`
const StyledBtn = styled.TouchableOpacity`
	background-color: rgb(47, 149, 125);
    padding: 10px;
    border-radius: 5;
`

const BtnText = styled.Text`
	font-size: 20; 
	color: '#fff';
`


export default function App() {
	return (
		<StyledView>

			<StyledBtn
				onPress={() => alert('Hello, world!')}
			>
				<BtnText>Emergency Call!</BtnText>
			</StyledBtn>

			<PanicButtonRed label="Emergency Button"/>
			
			<StatusBar style="auto" />
		</StyledView>
	);
}

