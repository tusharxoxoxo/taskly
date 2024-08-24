import { StyleSheet, Alert, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";

type Props = {
  name?: string;
};

export function ShoppingListItems({ name }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure u want to delete ${name}?`,
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
      ],
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleDelete}
        activeOpacity={0.1}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
});
