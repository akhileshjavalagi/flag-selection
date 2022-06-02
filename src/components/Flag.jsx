import React, {useState} from 'react'
import { Box, Select, Image, Icon, Text } from '@chakra-ui/react'
import { FiFlag } from 'react-icons/fi';

import {  Flex, Button} from '@chakra-ui/react'
export default function Flag() {
            const [color, setColor] = useState('gray')
            const handleChange = (e) => {
                console.log(e.target.value);
                setColor(e.target.value)
            }
  return (
    <>
    <Box h="400px">
       <Flex justifyContent="space-between" borderRadius="10px"  bgColor="grey" ml="50px" w="90%"> 
            <Box  w="30px" h="30px"><Image w="100%" h="100%" src="https://www.pngfind.com/pngs/m/504-5045962_loading-symbol-logo-ancient-asian-peace-symbol-hd.png"></Image></Box>
            <Box w="30px" h="30px"><Image src="https://i.dlpng.com/static/png/6362773_preview.png"></Image></Box>
            <Box w="30px" h="30px"><Image src="data:image/png;base64,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"></Image></Box>
       </Flex>
       <Box mb="100px" maxW='80%' borderRadius='20px' m='auto' h='500px' mt='100px' boxShadow='dark-lg' rounded='md' bg='white'>
        <Box borderRadius='20px' boxShadow='dark-lg' p='6' rounded='md' bg='white' h='40%'>
            <Box w={150} h={150}><Text>Likelihood</Text>
            <Icon as={FiFlag} w={100} h={100} p='2' color={color} border='1px' borderRadius='50%'/>
                <Select onChange={handleChange}>
                    <option></option>
                    <option value='black'>Low</option>
                    <option value='red'>Medium</option>
                    <option value='green'>High</option>
                    <option value='yellow'>Critical</option>
                    <option value='gray'>Clear</option>
                </Select>
            </Box>
        </Box>
        <Box>
        </Box>
      </Box>
    </Box>
    </>
  )
}
