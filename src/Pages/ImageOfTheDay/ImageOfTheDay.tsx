import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./ImageOfTheDayStyles";
import { ApodImageryProps, getApodTodayImagery } from "../../services/apodApi/apodApi";


const ImageOfTheDay = () => {
  const [apodData, setApodData] = useState<ApodImageryProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

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

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

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
      {apodData && (
        <>
          <Text style={styles.title}>{apodData.title}</Text>
          <Image source={{ uri: apodData.url }} style={styles.image} />
          <View style={styles.explanationContainer}>
            <Text style={styles.explanation}>
              {expanded ? apodData.explanation : `${apodData.explanation.substring(0, 280)}...`}
            </Text>
            <TouchableOpacity onPress={toggleExpand}>
              <Text style={styles.readMoreButtonText}>
                {expanded ? "Mostrar menos" : "Ler mais"}
              </Text>
            </TouchableOpacity>
          </View>
          {apodData.copyright && (
            <Text style={styles.copyright}>© {apodData.copyright}</Text>
          )}
        </>
      )}
    </View>
  );
}

export default ImageOfTheDay;