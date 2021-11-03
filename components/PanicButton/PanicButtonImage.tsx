import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeartbeat  } from '@fortawesome/free-solid-svg-icons'

// border-radius: 10%;
const BorderCircle = styled.View`
    border-width: 1px;
    border-style: solid;
    border-color: #000;
`
// border-radius: 10%;
const InternBorder = styled.View`
    border-width: 0.5px;
    border-style: solid;
    border-color: #808080;
`

const ContainerBtn = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10em;
    height: 10em;
	background-color: #F4F9E9;
    `
    // border-radius: 10%;
// f5fffa
const BtnText = styled.Text`
	font-size: 20; 
	color: #000;
    text-align: center;
`

type Props = { label: string; onPress: Function};

const PanicButtonImage: React.FC<Props> = ({  
        children,
        label,
        onPress
    }) => { 

        return (
            <View>

                <BorderCircle>
                    <ContainerBtn onPress={onPress}>
                        <BtnText>
                            <InternBorder>
                                <FontAwesomeIcon icon={ faHeartbeat } size={64} color={'red'}/>                            
                            </InternBorder>
                            {children ?? label}
                        </BtnText>
                    </ContainerBtn>
                </BorderCircle>
            </View>

        )        
}

export default PanicButtonImage;