import React, { useState, useEffect } from "react";
import { View, Text, Button, Pressable, ScrollView, StyleSheet, Alert } from "react-native";
import InputForm from "./InputForm";
import FilmOverview from "./components/FilmOverview";

export default function FilmList() {
    const [filmList, setFilmList] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [showOverview, setShowOverview] = useState(false);
    const [showList, setShowList] = useState(true);

    useEffect(() => {
        const Films = [
            {
                title: "The Godfather",
                description:
                    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                poster: require("./assets/img/TestPoster.jpg"),
            },
            { title: "2", description: "ASDASD" },
        ];
        setFilmList(Films);
    }, []);

    const handleSubmit = (filmData) => {
        setFilmList([...filmList, filmData]);
        setShowForm(false);
        setShowList(true);
    };

    const handleFormOpen = () => {
        setShowForm(true);
        setShowList(false);
    };

    const handleCancel = () => {
        setShowForm(false);
        setShowList(true);
    };

    const handleOverviewOpen = (index) => {
        setSelectedFilm(index);
        setShowOverview(true);
        setShowList(false);
    };

    const handleOverviewClose = () => {
        setShowOverview(false);
        setShowList(true);
    };

    const handleDeleteFilm = () => {
        Alert.alert("Film Löschen", "All those moments will be lost in time, like tears in rain.", [
            {
                text: "Abrechen",
                onPress: () => {},
                style: "cancel",
            },
            {
                text: "Löschen",
                onPress: () => {
                    const newList = filmList.filter((film, index) => index !== selectedFilm);
                    setFilmList(newList);
                    setShowOverview(false);
                    setShowList(true);
                },
            },
        ]);
    };

    return (
        <View>
            {showList && (
                <View style={styles.listContainer}>
                    <Pressable style={styles.button} onPress={handleFormOpen}>
                        <Text style={{ color: "#fff" }}>Add Film</Text>
                    </Pressable>
                    <ScrollView>
                        {filmList.map((film, index) => (
                            <Pressable
                                style={styles.filmListButton}
                                key={index}
                                onPress={() => handleOverviewOpen(index)}
                            >
                                <Text>Name: {film.title}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            )}

            {showForm && (
                <View>
                    <InputForm handleSubmit={handleSubmit} />
                    <Pressable style={styles.button} onPress={handleCancel}>
                        <Text style={{ color: "#fff" }}>Cancel</Text>
                    </Pressable>
                </View>
            )}

            {showOverview && (
                <View>
                    <FilmOverview
                        film={filmList[selectedFilm]}
                        back={handleOverviewClose}
                        deleteFilm={() => handleDeleteFilm(selectedFilm)}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        height: "80%",
    },

    button: {
        minWidth: "80%",
        maxWidth: "80%",
        marginLeft: "10%",
        marginRight: "10%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: 8,
        borderRadius: 3,
        elevation: 3,

        backgroundColor: "#2196F3",
        color: "#fff",
    },

    filmListButton: {
        minWidth: "80%",
        maxWidth: "80%",
        marginLeft: "10%",
        marginRight: "10%",

        padding: 8,
        marginTop: 8,
        marginBottom: 8,

        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: "#fff",
        borderColor: "black",
        elevation: 3,
    },
});
