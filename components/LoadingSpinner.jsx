import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';

const LoadingSpinner = () => (
  <ActivityIndicator animating={true} size={'large'} color={'blue'} />
);

export default LoadingSpinner;