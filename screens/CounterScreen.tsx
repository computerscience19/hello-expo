import {
    AddIcon,
    Button,
    ButtonIcon,
    Center,
    HStack,
    Input,
    InputField,
    RemoveIcon,
    Text,
    VStack,
  } from '@gluestack-ui/themed';
  import { useState } from 'react';
import NumberBoard from '../components/Counter/NumberBoard';
import NumberInput from '../components/Counter/NumberInput';
import NumberPreview from '../components/Counter/NumberPreview';

  export default function CounterScreen() {
    const [number, setNumber] = useState(0);
    const [inputnum, setInputNum] = useState(0)
  
    const handleAdd = () => {
      setNumber(number + inputnum);
      setInputNum(0);
    };
  
    const handleMinus = () => {
      setNumber(number - inputnum);
      setInputNum(0);
    };
  
    const handleChangeInputNumber = (inputStr: number) => {
      setInputNum(inputStr);

    };
  
    return (
      <Center width='$full' height='$full' bg='skyblue' gap={100}>
        <Text size='4xl' bold={true}>
          This is My Counter!
        </Text>
        <NumberBoard count={number}/>
        <VStack gap={30} alignItems='center'>
          <NumberInput inputNumber={inputnum} onChangeInputNumber={handleChangeInputNumber}/>
          <HStack justifyContent='center' gap={30}>
            <Button size='xl' action='negative' onPress={handleMinus}>
              <ButtonIcon size='xl' as={RemoveIcon} />
            </Button>
            <Button size='xl' action='positive' onPress={handleAdd}>
              <ButtonIcon size='xl' as={AddIcon} />
            </Button>
          </HStack>
          <NumberPreview count={number} inputNumber={inputnum}/>
        </VStack>
      </Center>
    );
  }

