import { StyleSheet } from "react-native";
import { Colors } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    itemContainer: {
        flex: 1,
        margin: 8,
        height: 230,
    },
    card: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: Colors.white,
        elevation: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    imgView: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden'
    },
    fullView: {
        width: '100%',
        height: '100%',
    },
    detailView: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'space-around',
        paddingVertical: 8
    },
    name: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.black
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5
    },
    green: {
        width: 8,
        height: 8,
        borderRadius: 5,
    },
    species: {
        fontSize: 12,
        color: Colors.black
    }
})