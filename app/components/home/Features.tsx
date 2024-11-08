'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'


interface LanguageCardProps {
  icon: React.ElementType;
  heading: string;
  description: string;
  href: string;
}

const Card = ({ heading, description, icon, href }: LanguageCardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Link href={href}>
        <Stack align={'start'} spacing={2}>
          <Box mt={2}>
            <Icon as={icon} w={10} h={10} color="pink.500" />
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Link>
    </Box>
  )
}
export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Choose your language
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>
      <Container maxW={'5xl'} mt={12}>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={8}>
          <Card
            icon={FaJs}
            heading={'JavaScript'}
            description={'The language of the web.'}
            href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
          />
          <Card
            icon={FaPython}
            heading={'Python'}
            description={'Versatile for data science, web, and scripting.'}
            href={'https://www.python.org/'}
          />
          <Card
            icon={FaJava}
            heading={'Java'}
            description={'Robust and widely used for enterprise applications.'}
            href={'https://www.java.com/'}
          />
          <Card
            icon={FaHtml5}
            heading={'HTML5'}
            description={'The structure of web pages.'}
            href={'https://developer.mozilla.org/en-US/docs/Web/HTML'}
          />
          <Card
            icon={FaCss3Alt}
            heading={'CSS3'}
            description={'Styles and layouts for the web.'}
            href={'https://developer.mozilla.org/en-US/docs/Web/CSS'}
          />
          <Card
            icon={FaPhp}
            heading={'PHP'}
            description={'Popular for server-side web development.'}
            href={'https://www.php.net/'}
          />
          <Card
            icon={FaReact}
            heading={'React'}
            description={'A JavaScript library for building user interfaces.'}
            href={'https://reactjs.org/'}
          />
          <Card
            icon={FaDatabase}
            heading={'SQL'}
            description={'Language for managing data in databases.'}
            href={'https://en.wikipedia.org/wiki/SQL'}
          />
        </SimpleGrid>
      </Container>

    </Box>
  )
}


