import React from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const TechDetails = () => {
  const route = useRoute();
  const { tech } = route.params;
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://google.com.br/search?q=${tech.id}` }}
    />
  );
};

export default TechDetails;
