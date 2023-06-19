import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.drp23.app',
  appName: 'FoodBuddy',
  webDir: 'dist',
  server: {
    url: 'https://drp23.herokuapp.com/',
  }
};

export default config;
