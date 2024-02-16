import React, { useState } from 'react';
import { View, TextInput, Text, StatusBar, StyleSheet, Button } from 'react-native';

export default function App() {
  const [filmName, setFilmName] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleFilmNameChange = (text) => {
    setFilmName(text);
  };

  const handleButtonPress = () => {
    setShowInput(!showInput);
  };

  return (
    <View style={styles.container}>
      {showInput && (
        <TextInput
          style={styles.input}
          placeholder="Enter film name"
          onChangeText={handleFilmNameChange}
          value={filmName}
        />
      )}
      <Text>{filmName}</Text>
      <Button title={showInput ? 'Hide Input' : 'Show Input'} onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 300,
    marginBottom: 20,
  },
});
