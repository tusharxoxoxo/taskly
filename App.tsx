import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingListItems } from "./components/shoppingListItems";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItems name="Coffee" />
      <ShoppingListItems name="Sugar" />
      <ShoppingListItems name="Tea" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
