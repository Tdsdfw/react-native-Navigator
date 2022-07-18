import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { TouchableOpacity } from "react-native";
import { Text ,View} from "react-native";


const Stack = createNativeStackNavigator();
const headerLeft = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>Left</Text>
  </TouchableOpacity>
);
const headerTitle = ({children}) => (
  <View>
    <Text>{children}</Text>
  </View>
);
const headerRight = () => (
  <View>
    <Text>Right</Text>
  </View>
);

//Stack.Screen의 Props(title) 설정
function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title:'홈',
          headerStyle:{
            backgroundColor:'#29b6f6',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:20,
          },
        }}  
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen}
        options={({route})=>({
          title:`상세정보 - ${route.params.id}`,
          headerLeft,
          headerTitle,
          headerRight,
        })}
        />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

