import { Image, Text, View } from "react-native"
import { styles } from "./style"
import { Colors } from "../../constant"
import moment from "moment"
import { Loader } from "../../components"
import { useGetCharaterById } from "../../utilities/getAllCharacterQuery"

const Details = ({ route }: any) => {
    const { data, isLoading } = useGetCharaterById(route?.params?.characterId)

    /**
     * Render Image View
     * @returns ReactNode
     */
    const imageView = () => {
        return <View style={styles.imgView}>
            <Image source={{ uri: data?.image }} style={styles.fullView} />
        </View>
    }

    /**
     * render Charater details
     * @returns ReactNode
     */
    const detailView = () => {
        return <View style={styles.details}>
            <View style={styles.nameView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.name}>{data?.name || ''}</Text>
                    </View>
                    <Text style={styles.gender}>{data?.gender || ''}</Text>
                </View>
                <Text style={styles.location}>{data?.location?.name || ''}</Text>
            </View>
            <View style={styles.subDetails}>
                <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.label}>{'Status:'}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.status}>
                                <View style={{ ...styles.green, backgroundColor: data?.status == "Alive" ? Colors.green : Colors.grey }}></View>
                                <Text style={styles.value}>{`${data?.status || ''} - ${data?.species || ''}`}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>{'Episodes:'}</Text>
                        <Text style={styles.value}>{data?.episode?.length || 0}</Text>
                    </View>
                </View>
                <Text style={styles.label}>{'Created Date:'}</Text>
                <Text style={styles.value}>{!!data?.created ? moment(data?.created).format('YYYY-MM-DD') : ''}</Text>
            </View>
        </View>
    }

    return <View style={styles.container}>
        {imageView()}
        {detailView()}
        {isLoading && <Loader size={"large"} color={Colors.black} />}
    </View>
}

export default Details