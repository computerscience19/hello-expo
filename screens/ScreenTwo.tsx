import { Button, Center, Text } from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export default function ScreenTwo() {
const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Center bg='$blue300' w='$full' h='$full' gap={10}>
        <Text>Screen 2</Text>
        <Button onPress={() => navigation.goBack()}>
            <Text>Go Back</Text>
        </Button>
        <Button onPress={() => navigation.navigate("One")}>
            <Text>Go To Screen1</Text>
        </Button>
        <Button onPress={() => navigation.navigate("Three")}>
            <Text>Go To Screen3</Text>
        </Button>
    </Center>
  );

}

