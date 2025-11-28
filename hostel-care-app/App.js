import 'react-native-gesture-handler'; // Required for React Navigation
import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './src/navigation';
import colors from './src/utils/colors';

// Define a custom theme based on the app's color scheme
const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.PRIMARY,
    accent: colors.SECONDARY,
    background: colors.BACKGROUND_GREY,
    surface: colors.WHITE,
    text: colors.TEXT_DARK,
    error: colors.URGENT,
  },
};

/**
 * Main application component.
 * It wraps the application with necessary context providers (PaperProvider, SafeAreaProvider)
 * and renders the main navigation stack.
 */
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;