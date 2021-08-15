import { StyleSheet } from "react-native";
import { appColors } from "../../common/appColors.styles";

export const headerStyles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        borderBottomColor: appColors.lightGray,
        borderBottomWidth: 1,
        width: '100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 70
    },
    headerText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerParts: {
        flexDirection: 'column',
        fontWeight: 'bold',
        fontSize: 20
    },
    error: {
        color: appColors.red
    },
    help: {
        justifyContent: 'center',
        alignContent: 'flex-end'
    },
    footerText: {
        marginBottom: 4
    }
})