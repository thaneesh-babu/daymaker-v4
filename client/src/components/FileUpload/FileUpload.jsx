import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function FileUpload() {
    return (
    <Flex h="100vh" w="100vw" flexDirection="column" alignItems="center" justifyContent="space-evenly" bg="blackAlpha.300" >
        <Text fontSize={"7xl"} > Integrate Tasks Using Our Software Engine </Text>
        <Link to='/edit'>
            <Button w="100%"> Upload </Button>
        </Link>
    </Flex>   
    )
}