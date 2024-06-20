import { useEffect, useState } from "react";
import { PlanetsProps, getPlanetInfo } from "../../services/planetsApi/planetsApi";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

const PlanetsTest = () => {
  const [planetData, setPlanetData] = useState<PlanetsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getPlanetInfo("Neptune");
      setPlanetData(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch planet data');
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={planetData}
        renderItem={({item}) => (
        <View key={item.name} style={styles.planetContainer}>
          <Text style={styles.planetName}>{item.name}</Text>
          <Text>Mass: {item.mass}</Text>
          <Text>Radius: {item.radius}</Text>
          <Text>Period: {item.period}</Text>
          <Text>Semi-major Axis: {item.semi_major_axis}</Text>
          <Text>Temperature: {item.temperature}</Text>
          <Text>Distance (light years): {item.distance_light_year}</Text>
          <Text>Host Star Mass: {item.host_star_mass}</Text>
          <Text>Host Star Temperature: {item.host_star_temperature}</Text>
        </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  planetContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  planetName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PlanetsTest;