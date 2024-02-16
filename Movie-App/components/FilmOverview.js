import { Text, View, ScrollView, StyleSheet, Pressable, Image, Dimensions } from "react-native";

export default function FilmOverview({ film, back, deleteFilm, editFilm }) {
    if (film == undefined || film.title === undefined) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.title}>
                    This is what happens when you find a stranger in the Alps!
                </Text>
                <Text>In other Words: There is no data for This Film</Text>
                <Pressable style={styles.button} onPress={back}>
                    <Text>Back</Text>
                </Pressable>
            </View>
        );
    }

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    return (
        <View style={{ width: screenWidth, height: screenHeight }}>
            <ScrollView style={styles.scrollConatainer}>
                <Text style={styles.title}>{film.title}</Text>
                <Image source={film.poster} style={styles.filmPoster} />
                <Text style={styles.description}>{film.description}</Text>
            </ScrollView>
            <View style={styles.bottomBar}>
                <Pressable style={styles.button} onPress={deleteFilm}>
                    <Text>Delete</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={back}>
                    <Text>Back</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    scrollConatainer: {
        flex: 1,
        flexDirection: "column",
        padding: 8,
    },

    title: {
        fontSize: 24,
        textAlign: "center",
    },

    filmPoster: {
        maxWidth: "100%",
        maxHeight: "80%",
    },

    description: {
        textAlign: "center",
    },

    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },

    button: {
        width: "49%",
        margin: 0,
        padding: 8,
        borderRadius: 8,

        display: "flex",
        textAlign: "center",
        backgroundColor: "#e01616",
        elevation: 3,
    },
});
