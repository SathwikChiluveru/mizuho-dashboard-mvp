'use client'

import {
  Box,
  CloseButton,
  Collapse,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { FiLayers, FiTrendingUp, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const LinkItems = [
  { name: 'Static Modules', icon: FiLayers, dropdown: ['Customer Maintenance', 'Unit Maintenance'] },
  { name: 'Transaction Modules', icon: FiTrendingUp, dropdown: ['Transaction Dashboard'] },
]

function Sidebar({ onClose, setSelectedPage, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Mizuho
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      {LinkItems.map((link) => (
        <DropdownNavItem key={link.name} icon={link.icon} label={link.name} dropdownItems={link.dropdown} setSelectedPage={setSelectedPage} />
      ))}
    </Box>
  )
}

function DropdownNavItem({ icon, label, dropdownItems, setSelectedPage }) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        onClick={onToggle}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{ color: 'white' }}
            as={icon}
          />
        )}
        <Text flex="1">{label}</Text>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pl="12" py="2">
          {dropdownItems.map((item, index) => (
            <Box
              as="button"
              key={index}
              display="block"
              py="1"
              fontSize="sm"
              textAlign="left"
              w="full"
              _hover={{ color: 'cyan.500' }}
              onClick={() => setSelectedPage(item)}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  )
}

export default Sidebar
