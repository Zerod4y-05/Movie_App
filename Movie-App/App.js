import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputForm from "./InputForm";
import FilmList from "./FilmList";

export default function App() {
    return (
        <View style={styles.container}>
            <FilmList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",

        justifyContent: "center",
        alignItems: "center",
    },
});
