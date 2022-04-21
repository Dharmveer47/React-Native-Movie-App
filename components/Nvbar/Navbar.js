import { Text, View, StyleSheet,Button } from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.container}>
        <View>
          <Ionicons name="ios-menu" size={30} color="black" />
        </View>
        <View>
          <Text style={styles.title}>Movie-Space</Text>
        </View>
        <View>
          <Feather name="bell" size={30} color="black" />
        </View>
      </View>
      <View style={styles.DropDown}>
        <Text style={styles.DropDownText}>Movies</Text>
        <Text style={styles.DropDownText}>Tv Shows</Text>
        <Text style={styles.DropDownText}>People</Text>
        <Text style={styles.DropDownText}>My List</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  Maincontainer: {
    elevation: 20,
  },
  DropDown: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "60%",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,

    // alignSelf: "center",
  },
  DropDownText: {
    textAlign: "center",
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    fontSize: 15,
    marginTop: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  container: {
    marginTop: 0,
    paddingTop: 25,
    zIndex: 10,
    padding: 10,
    backgroundColor: "#e6e6e6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 5, height: 2 },
    shadowRadius: 8,
    elevation: 20,
    // position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "gray",
  },
});
