'use client'

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Flex
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={'white'}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={'white'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Login
        </Heading>
        <FormControl id="email">
          <Stack spacing={4}>
            <Input
              placeholder="Email Address"
              _placeholder={{ color: 'gray.500' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              _placeholder={{ color: 'gray.500' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Stack>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'black'}
            color={'white'}
            _hover={{
              bg: 'gray.800',
            }}
            onClick={handleLogin}
            isLoading={isLoading}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
