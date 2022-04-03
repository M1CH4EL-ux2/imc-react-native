import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   resultBox: {
      flex: 1,
      alignItems: "center",
      marginTop: 20
   },
   result: {
      marginTop: 5,
      fontSize: 35,
      borderRadius: 3,
      fontWeight: "bold"
   },
   boxShareButton: {
      margin: 20
   },
   shared: {
      backgroundColor: "#1877f2",
      borderRadius: 50,
      padding: 5
   },
   sharedText: {
      color: "#ffffff",
      fontWeight: "bold",
      paddingHorizontal: 20
   }
});

export default styles;