import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';

const withLoading = (WrappedComponent: React.ComponentType, imageModules: any[]) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadImages = async () => {
        const imageAssets = imageModules.map(module => Asset.fromModule(module).downloadAsync());
        await Promise.all(imageAssets);
        setLoading(false);
      };

      loadImages();
    }, []);

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
