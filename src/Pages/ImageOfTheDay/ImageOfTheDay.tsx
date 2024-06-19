import { useEffect, useState } from "react"
import { ApodImageryProps, getApodRandomImagery } from "../../services/apodApi/apodApi"
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import styles from "./ImageOfTheDayStyles";

const ImageOfTheDay = () => {
  const [apodData, setApodData] = useState<ApodImageryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await getApodRandomImagery();
      setApodData(data);
    } catch (err) {
      setError("Failed to fetch APOD imagery");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
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
      <FlatList
        data={apodData}
        keyExtractor={(item) => item.date}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.explanation}>{item.explanation}</Text>
            <Text style={styles.copyright}>{item.copyright}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ImageOfTheDay