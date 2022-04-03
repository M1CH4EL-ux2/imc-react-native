import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6fc2f2",
        height:"100%",
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        padding: 50
    },
    labels: {
        fontSize:18,
        color:"#141414",
        marginBottom:2
    },
    inputs: {
        padding:5,
        backgroundColor:"rgba(255, 255, 255, .1)",
        marginBottom: 20,
        borderRadius: 5
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
    }
});

export default styles;