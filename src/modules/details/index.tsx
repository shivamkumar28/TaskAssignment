import { Image, Text, View } from "react-native"
import { styles } from "./style"
import { useEffect } from "react"
import { Colors } from "../../constant"
import moment from "moment"
import { getCharaterId } from "../../provider/api-services"
import { useDispatch, useSelector } from "react-redux"
import { updateCharaterDetails } from "../../redux/general.slice"
import { showToast } from "../../utilities"
import { Loader } from "../../components"

const Details = ({ route }: any) => {
    const disptach = useDispatch()
    const charaterDetail = useSelector((state: any) => state.general.charaterDetail)

    useEffect(() => {
        const characterId = route.params.characterId
        getCharaterList(characterId)
        return () => {
            disptach(updateCharaterDetails({}))
        }
    }, [])

    /**
     * Call api for fetch charater detail by id
     * @param id
     */
    const getCharaterList = (id: number) => {
        getCharaterId(id).then((res: any) => {
            disptach(updateCharaterDetails(res))
            Object.values(res).length == 0 && showToast("Something Went Wrong")
        }).catch((e: any) => {
            console.log('err--', e)
            showToast(e?.message || "Something Went Wrong")
        })
    }

    /**
     * Render Image View
     * @returns ReactNode
     */
    const imageView = () => {
        return <View style={styles.imgView}>
            <Image source={{ uri: charaterDetail?.image }} style={styles.fullView} />
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
                        <Text style={styles.name}>{charaterDetail?.name || ''}</Text>
                    </View>
                    <Text style={styles.gender}>{charaterDetail?.gender || ''}</Text>
                </View>
                <Text style={styles.location}>{charaterDetail?.location?.name || ''}</Text>
            </View>
            <View style={styles.subDetails}>
                <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.label}>{'Status:'}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.status}>
                                <View style={{ ...styles.green, backgroundColor: charaterDetail?.status == "Alive" ? Colors.green : Colors.grey }}></View>
                                <Text style={styles.value}>{`${charaterDetail?.status || ''} - ${charaterDetail?.species || ''}`}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.label}>{'Episodes:'}</Text>
                        <Text style={styles.value}>{charaterDetail?.episode?.length || 0}</Text>
                    </View>
                </View>
                <Text style={styles.label}>{'Created Date:'}</Text>
                <Text style={styles.value}>{!!charaterDetail?.created ? moment(charaterDetail?.created).format('YYYY-MM-DD') : ''}</Text>
            </View>
        </View>
    }

    return <View style={styles.container}>
        {imageView()}
        {detailView()}
        {Object.values(charaterDetail).length == 0 && <Loader size={"large"} color={Colors.black} />}
    </View>
}

export default Details