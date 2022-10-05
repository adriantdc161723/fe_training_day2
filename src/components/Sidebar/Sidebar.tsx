import React from "react";
import "./Sidebar.style.css";
import {
    Text,
    Stack,
    Avatar, 
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
  } from '@chakra-ui/react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Stack direction='row' p='1.5'>
                <Avatar name='Adrian Dela Cruz' size='2xl' src=""/>
            </Stack>
            <Accordion>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bolder'>
                        Educational Background
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <strong>Studied Bachelor of Science in Information Technology </strong>
                        @ Nueva Ecija University of Science and Technolofy (NEUST)
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bolder'>
                            Work Experience
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                            2 Years Layout Artist/Graphic Designer @ Louarc Printing
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bolder'>
                            Text Stack
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Knowledgeable in HTML, CSS, Fundamental of PHP, Fundamentals of Database Systems Javascript, Javascript Frameworks (Jquery, ReactJs), CSS Frameworks(Bootstrap)
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bolder'>
                            Motto
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text fontSize='4xl'>Be yourself. Everyone else is already taken.</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </aside>
    )
}


export default Sidebar;