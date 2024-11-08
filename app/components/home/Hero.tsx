import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={700}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Slay your first<br />
            <Text as={'span'} color={'pink.400'}>
              interview
            </Text>
          </Heading>
          <Text color={'gray.500'} fontWeight={500}>
            Prepare to the interview for IT company by using our platform. Get full access to premium
            resources , join mock interview sessions , talk with experinced mentors , ask your questions
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'pink'}
              bg={'pink.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'pink.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>

          </Stack>
        </Stack>
      </Container>
    </>
  );
}

