import { Box, Text, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { EditContext } from './EditEvents';

function TimelineCard({id, time, title, desc, isLast, data}) {
    const [cardTime, setCardTime] = useState("");
    const [cardTitle, setCardTitle] = useState("");
    const [cardDesc, setCardDesc] = useState("");
    const {setModalTime, setModalTitle, setModalDesc, onOpen, onClose, isOpen, setModalID} = useContext(EditContext);

    useEffect(() => {
        setCardTime(time)
        setCardTitle(title)
        setCardDesc(desc)
    }, [])

    function openModal() {
        if (isOpen) {
            onClose()
        } else {
            onOpen();
            setModalTime(cardTime);
            setModalTitle(cardTitle);
            setModalDesc(cardDesc);
            setModalID(id);
        }
        
    }

    return ( 
        <Flex w="100%" h="25vh"  >
            <Flex flexDirection="column" w="10%" alignItems="center" >
                <Box className='dot' h="15px" w="15px" borderRadius="15px" bgColor="blackAlpha.400" ></Box>
                <Box className='line' h="100%" w="4px" bgColor="blackAlpha.400" hidden={isLast} ></Box>
            </Flex>
            <Flex flexDirection="column" w="90%" my="1%" >
                <Flex h="20%" >
                    <Text borderRadius="25px" marginLeft="4%" h="100%" color="white" bgColor="blue.300" px="2%"> {cardTime[0]} to {cardTime[1]} </Text>
                </Flex>
                <Flex 
                    flexDirection="column" 
                    h="80%" px="3%" mx="2%" 
                    borderRadius="25px" boxShadow="2px 2px 3px gray" 
                    textAlign="left" 
                    onClick={openModal} >
                    <Heading> {data.eventName} </Heading>
                    <Text> {cardDesc} </Text>
                </Flex>
            </Flex>
        </Flex> 
    );
}

export default TimelineCard;