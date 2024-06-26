import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { MarsPhotosProps, Photo, getMarsPhotos } from "../../services/MarsPhotosAPI/MarsPhotosAPI";
import styles from "./MarsPhotosStyles";

const MarsPhotosPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data: MarsPhotosProps = await getMarsPhotos();
        setPhotos(data.photos);
      } catch (err) {
        setError("Failed to fetch Mars Rover Photos");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vislumbre o que espera por você em Marte!</Text>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <Image source={{ uri: item.img_src }} style={styles.image} />
            <Text style={styles.subtitle}>Rover: {item.rover.name}</Text>
            <Text style={styles.subtitle}>{item.camera.full_name}</Text>
            <Text style={styles.subtitle}>{item.earth_date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MarsPhotosPage;
