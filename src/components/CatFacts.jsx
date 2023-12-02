import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const CatFacts = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      setFact('Failed to load cat fact.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? <Text>Loading...</Text> : <Text>{fact}</Text>}
      <Button title="Get New Fact" onPress={fetchCatFact} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  // Add more styles as needed
});

export default CatFacts;
