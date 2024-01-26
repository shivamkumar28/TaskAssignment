import { StyleSheet } from "react-native";
import { Colors } from "../../constant";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16
    },
    imgView: {
        width: '100%',
        height: 260,
        borderRadius: 16,
        overflow: 'hidden',
        marginTop: 16
    },
    fullView: {
        width: '100%',
        height: '100%'
    },
    details: {
        paddingVertical: 16,
        width: '100%',
    },
    nameView: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 2,
        backgroundColor: '#F6F6F6',
        marginBottom: 16
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.black
    },
    gender: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.black
    },
    location: {
        fontSize: 16,
        color: Colors.black
    },
    subDetails: {
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 2,
        backgroundColor:
            '#F6F6F6'
    },
    label: {
        fontSize: 18,
        color: Colors.black
    },
    value: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.black
    },
    green: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8
    }
})