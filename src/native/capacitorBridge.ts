import { Capacitor } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { globalStore } from '../store/useStudyStore';

let initialized = false;

export async function initNativeShell(): Promise<void> {
  if (initialized || !Capacitor.isNativePlatform()) return;
  initialized = true;

  try {
    await StatusBar.setStyle({ style: Style.Light });
    if (Capacitor.getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: '#FBF8F1' });
    }
  } catch (err) {
    console.warn('StatusBar init skipped:', err);
  }

  try {
    await CapApp.addListener('backButton', () => {
      const handled = globalStore.handleNativeBack();
      if (!handled) {
        CapApp.exitApp();
      }
    });
  } catch (err) {
    console.warn('Back button listener init skipped:', err);
  }

  try {
    await SplashScreen.hide({ fadeOutDuration: 250 });
  } catch (err) {
    console.warn('SplashScreen hide skipped:', err);
  }
}

export async function triggerLightHaptic(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await Haptics.impact({ style: ImpactStyle.Light });
  } catch {
    // Ignore unsupported haptic hardware
  }
}
