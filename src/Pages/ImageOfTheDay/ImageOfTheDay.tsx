import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import styles from "./ImageOfTheDayStyles";
import { ApodImageryProps, getApodTodayImagery } from "../../services/apodApi/apodApi";
import { translateText, summarizeText } from "../../utils/textUtils/textUtils";

const ImageOfTheDay = () => {
  const [apodData, setApodData] = useState<ApodImageryProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await getApodTodayImagery();
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
      {
        apodData && (
          <>
            <Text style={styles.title}>{apodData.title}</Text>
            <Image source={{ uri: apodData.url }} style={styles.image} />
            <View style={styles.explanationContainer}>
              <Text style={styles.explanation}>{apodData.explanation}</Text>
            </View>
            {apodData.copyright && (
              <Text style={styles.copyright}>© {apodData.copyright}</Text>
            )}
          </>
        )
      }
    </View>
  );
}

export default ImageOfTheDay;
