import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Alert, View, PixelRatio, Button, TouchableOpacity, Pressable } from "react-native";
import { theme } from "./theme";

export default function App() {
    const handleDelete = () => {
        Alert.alert(
            "Are you sure u want to delete this?",
            "it will be gone for good!",
            [
                {
                    text: "yes",
                    onPress: () => console.log("ok, deleted"),
                    style: "destructive",
                },
                {
                    text: "cancel",
                    onPress: () => console.log("cancelled"),
                    style: "cancel",
                },
            ]
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>Coffee</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDelete}
                    activeOpacity={0.1}>
                    <Text
                        style={styles.buttonText}
                    >Delete</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#1a759f",
        paddingHorizontal: 8,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemText: {
        fontSize: 48,
        fontWeight: "200",
    },
    button: {
        backgroundColor: theme.colorBlack,
        borderRadius: 15,
        padding: 10,
    },
    buttonText: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: theme.colorWhite,
        fontSize: 38,
        letterSpacing: 1,
    }
});
