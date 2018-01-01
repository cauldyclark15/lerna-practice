import React from 'react';
import { storiesOf } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';
import ImageComponent from '../';

storiesOf('Universal Components', module).add('Image Component', () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImageComponent</Text>
      <View style={styles.example}>
        <Text style={styles.exampleTitle}>Example</Text>
        <View style={styles.exampleWrapper}>
          <ImageComponent
            source={{ uri: '//via.placeholder.com/140x90' }}
            width={140}
            height={90}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  example: {
    borderColor: '#dddddd',
    borderWidth: 1,
    display: 'inline-flex',
    flex: 0,
    padding: 16,
  },
  exampleTitle: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  exampleWrapper: {
    width: '100%',
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
