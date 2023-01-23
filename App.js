import { StyleSheet, Text, View } from "react-native";
import FlatListDemo from "./components/FlatListDemo";
// import FlatListDemo from "./components/FlatListDemo";
import FlatListSections from "./components/FlatListSelector";
// import Scroller from "./components/Scroller";


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>React NAtive</Text>
    {/* <FlatListDemo /> */}
      {/* <Scroller /> */}
      {/* <FlatListDemo /> */}
      <FlatListSections />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "yellow",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
