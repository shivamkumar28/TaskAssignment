import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NavigationConfig from "../config/navigation-config"
import { Screens } from "../constant"
import Home from "../modules/home"
import Details from "../modules/details"

const Stack = createNativeStackNavigator()

const InitialNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={NavigationConfig}>
            <Stack.Screen name={Screens.home} component={Home} />
            <Stack.Screen name={Screens.details} component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default InitialNavigation