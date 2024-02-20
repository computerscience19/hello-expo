import { Button, Center, Text } from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";


export default function ScreenOne() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Center bg='$green300' w='$full' h='$full' gap={10}>
        <Text>Screen 1</Text>
        <Button onPress={() => navigation.navigate("Two")}>
            <Text>Go To Screen2</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Three")}>
            <Text>Go To Screen3</Text>
        </Button>
        <Button onPress={() => navigation.navigate("webtoon")}>
            <Text>webtoonlist</Text>
        </Button>
    </Center>
  );

}

