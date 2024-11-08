import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack minH={'100vh'} spacing={4} m={'auto'} py={20}>
        <Flex p={8} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'pink.400'}>Forgot password?</Link>
              </Stack>
              <Link href='/' as={NextLink}>
                <Button colorScheme={'pink'} variant={'solid'} >
                  Sign in
                </Button>
              </Link>

            </Stack>
          </Stack>
        </Flex>

      </Stack>
    </Flex>
  );
}