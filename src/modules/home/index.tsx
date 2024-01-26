import { Button, View } from "react-native"
import { styles } from "./style"
import { Screens } from "../../constant"

const Home = ({ navigation }: any) => {

    const navigateToDetail = () => {
        navigation.navigate(Screens.details)
    }

    return <View style={styles.container}>
        <Button title="Navigate" onPress={navigateToDetail} />
    </View>
}

export default Home