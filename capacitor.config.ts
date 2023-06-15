import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'drp23',
  webDir: 'dist',
  server: {
    url: 'http://10.0.2.2:5174/',
  }
};

export default config;
