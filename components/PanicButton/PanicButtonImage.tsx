import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const BorderCircle = styled.View`
    border-radius: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: #808080;
`

const ContainerCircleRed = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10em;
    height: 10em;
	background-color: #ff0000;
    border-radius: 50%;
`

const BtnText = styled.Text`
	font-size: 20; 
	color: #f5fffa;
    text-align: center;
`

type Props = { label: string;};

const PanicButtonImage: React.FC<Props> = ({  
        children,
        label
    }) => { 

        return (
            <View>

                <BorderCircle>
                    <ContainerCircleRed>
                        <BtnText>
                            {children ?? label}
                        </BtnText>
                    </ContainerCircleRed>
                </BorderCircle>
            </View>

        )        
}

export default PanicButtonImage;