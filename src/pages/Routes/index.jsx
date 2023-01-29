import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Conteiner } from './style';

import Login from '../CheckScreens/Login'
import SignUp from '../CheckScreens/SignUp'
import Screen1 from '../CheckScreens/Forgots/Screen1'
import Screen2 from '../CheckScreens/Forgots/Screen2';
import Screen3 from '../CheckScreens/Forgots/Screen3';
import Home from '../UserScreens/Home';

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Conteiner>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{
                            title: "",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name='SignUp'
                        component={SignUp}
                        options={{
                            title: "",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name='Screen1'
                        component={Screen1}
                        options={{
                            title: "",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name='Screen2'
                        component={Screen2}
                        options={{
                            title: "",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name='Screen3'
                        component={Screen3}
                        options={{
                            title: "",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name='Home'
                        component={Home}
                        options={{
                            title: "",
                            headerTransparent: true,
                            headerShown: false,
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </Conteiner>
    )
}
export default Routes;