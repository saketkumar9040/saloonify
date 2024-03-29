import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#ffffff",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4c4c4c",
        height: "35%",
        padding: 20,
    },
    saloonImage: {
        width: 200,
        height: 200,
        resizeMode:"contain"
    },
    bookNowButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 50,
        elevation: 10,
        gap: 10,
    },
    bookNowText: {
        fontSize: 13,
        fontWeight: "700"
    }
});

export default styles;