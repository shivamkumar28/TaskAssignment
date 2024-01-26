import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { Colors, Screens } from "../../constant"
import { useEffect } from "react"
import { getCharater } from "../../provider/api-services"
import { useDispatch, useSelector } from "react-redux"
import { updateCharaterList } from "../../redux/general.slice"
import { showToast } from "../../utilities"
import { Loader } from "../../components"

const Home = ({ navigation }: any) => {
    const disptach = useDispatch()
    const charaterList = useSelector((state: any) => state.general.charaterList)

    useEffect(() => {
        getCharaterList()
    }, [])

    const getCharaterList = () => {
        getCharater().then((res: any) => {
            disptach(updateCharaterList(res.results))
        }).catch((e: any) => {
            console.log('error-', e)
            showToast(e?.message || "Something Went Wrong")
        })
    }

    const onCardPress = (id: number) => {
        navigation.navigate(Screens.details, { characterId: id })
    }

    const renderList = ({ item, index }: any) => {
        return <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => onCardPress(item.id)} activeOpacity={0.6}>
            <View style={styles.card}>
                <View style={styles.imgView}>
                    <Image source={{ uri: item.image }} style={styles.fullView} />
                </View>
                <View style={styles.detailView}>
                    <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                    <View style={styles.status}>
                        <View style={{ ...styles.green, backgroundColor: item.status == "Alive" ? Colors.green : Colors.grey }}></View>
                        <Text style={styles.species}>{`${item.status} - ${item.species}`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    }

    return <View style={styles.container}>
        <FlatList
            data={charaterList}
            renderItem={renderList}
            keyExtractor={(item: any) => item?.id}
            numColumns={2}
            style={{ flex: 1, }}
            contentContainerStyle={{ paddingHorizontal: 4, paddingVertical: 4 }}
        />
        {charaterList.length == 0 && <Loader size={"large"} color={Colors.black} />}
    </View>
}

export default Home