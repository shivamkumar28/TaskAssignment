import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { Colors, Screens } from "../../constant"
import { Loader } from "../../components"
import { useGetAllCharacter } from "../../utilities/getAllCharacterQuery"

const Home = ({ navigation }: any) => {
    const { isLoading, data } = useGetAllCharacter()

    /**
     * It will redirect to detail screen
     * @param id;
     */
    const onCardPress = (id: number) => {
        navigation.navigate(Screens.details, { characterId: id })
    }

    /**
     * render charater list
     * @param {item,index}
     * @returns
     */
    const renderList = ({ item, index }: any) => {
        return <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => onCardPress(item.id)} activeOpacity={0.7}>
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
            data={data}
            renderItem={renderList}
            keyExtractor={(item: any) => item?.id}
            numColumns={2}
            style={{ flex: 1, }}
            contentContainerStyle={{ paddingHorizontal: 4, paddingVertical: 4 }}
        />
        {isLoading && <Loader size={"large"} color={Colors.black} />}
    </View>
}

export default Home