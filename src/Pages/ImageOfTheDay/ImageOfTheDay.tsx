import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./ImageOfTheDayStyles";
import { ApodImageryProps, getApodTodayImagery } from "../../services/apodApi/apodApi";

const ImageOfTheDay = () => {
  const [apodData, setApodData] = useState<ApodImageryProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const genericSpaceImg = 'https://media.gettyimages.com/id/802785154/pt/foto/northern-lights-and-milky-way-over-lake-mcdonald-glacier-national-park-montana.jpg?s=612x612&w=0&k=20&c=xNkx2oejQ_jfaXpL51V2juYjdj4bGr1NYB2Q57wRjnQ='

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

  const onBuffer = () => {
    console.log('onBuffer')
  }

  const onError = () => {
    console.log('onError')
  }

  return (
    <View style={styles.container}>
      {apodData && (
        <>
          <Text style={styles.title}>{apodData.title}</Text>
          {
            apodData.media_type === 'video' ?
              <Image source={{ uri: genericSpaceImg }} style={styles.image} />
            :
              <Image source={{ uri: apodData.url }} style={styles.image} />
          }          
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
