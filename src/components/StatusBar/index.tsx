import React from 'react';
import {StatusBar} from 'react-native';

export function Bar() {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
  );
}
