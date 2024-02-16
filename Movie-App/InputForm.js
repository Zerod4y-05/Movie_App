import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function InputForm({ handleSubmit }) {
    const [filmName, setFilmName] = useState("");
    const [description, setDescription] = useState("");

    const handleFilmNameChange = (text) => {
        setFilmName(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handleFormSubmit = () => {
        handleSubmit({ title: filmName, description: description });
        setFilmName("");
        setDescription("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter film name"
                value={filmName}
                onChangeText={handleFilmNameChange}
            />
            <TextInput
                style={styles.input}
                multiline={true}
                placeholder="Enter Description"
                value={description}
                onChangeText={handleDescriptionChange}
            />
            <Button title="Submit" onPress={handleFormSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        maxWidth: "100%",
        marginBottom: 20,
    },
});
