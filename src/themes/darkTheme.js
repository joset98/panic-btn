import { DarkTheme as PaperDarkTheme } from 'react-native-paper';

import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: '#333333',
        text: '#ffffff'
    }
}

export default CustomDarkTheme;
