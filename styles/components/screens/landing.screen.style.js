import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../../common/appColors.styles";

const screenHeight = Dimensions.get('window').height;

export const landingStyles = StyleSheet.create({
    container: {
        height: '100%'
    },
    image: {
        height: screenHeight
    },
    loginContainer: {
        width: 300,
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 10,
        marginRight: 20,
        marginTop: 40,
        height: 230,
        borderColor: appColors.lightGray,
        borderRadius: 5,
        opacity: 0.9,
        backgroundColor: appColors.white
    },
    welcomeContainer: {
        justifyContent: 'center',
        flex: 1,
        height: 10,
    },
    welcomeText: {
        borderColor: appColors.lightGray,
        borderRadius: 5,
        opacity: 0.8,
        backgroundColor: appColors.white,
        fontWeight: 'bold',
        fontSize: 40,
        padding: 10,
        position: 'absolute',
        bottom: 150,
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        color: appColors.black
    }
})