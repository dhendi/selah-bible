import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.selah.bible',
  appName: 'Selah',
  webDir: 'dist',
  backgroundColor: '#FBF8F1',
  ios: {
    contentInset: 'never',
    backgroundColor: '#FBF8F1',
  },
  android: {
    backgroundColor: '#FBF8F1',
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#FBF8F1',
      showSpinner: false,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#FBF8F1',
    },
  },
};

export default config;
