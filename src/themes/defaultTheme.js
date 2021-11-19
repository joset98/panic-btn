import {
    DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: '#ffffff',
        text: '#333333'
    }
}

export default CustomDefaultTheme;