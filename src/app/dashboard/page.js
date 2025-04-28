'use client'

import { Box, Text, Drawer, DrawerContent, useDisclosure, useColorModeValue } from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'
import Header from '@/components/Header'
import CustomerMaintenanceForm from '@/components/CustomerMaintenanceForm'

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedPage, setSelectedPage] = useState('Dashboard')

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar onClose={onClose} setSelectedPage={setSelectedPage} display={{ base: 'none', md: 'block' }} />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} setSelectedPage={setSelectedPage} />
        </DrawerContent>
      </Drawer>

      {/* Header */}
      <Header onOpen={onOpen} />

      {/* Main Content */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {selectedPage === 'Customer Maintenance' && <CustomerMaintenanceForm />}
        {selectedPage === 'Unit Maintenance' && <UnitMaintenance />}
        {selectedPage === 'Transaction Dashboard' && <TransactionDashboard />}
        {selectedPage === 'Dashboard' && <DashboardHome />}
      </Box>
    </Box>
  )
}

function UnitMaintenance() {
  return (
    <Box p="4" bg="white" rounded="md" shadow="md">
      <Text fontSize="xl">Unit Maintenance Content</Text>
    </Box>
  )
}

function TransactionDashboard() {
  return (
    <Box p="4" bg="white" rounded="md" shadow="md">
      <Text fontSize="xl">Transaction Dashboard Content</Text>
    </Box>
  )
}

function DashboardHome() {
  return (
    <Box p="4" bg="white" rounded="md" shadow="md">
      <Text fontSize="xl">Welcome to the Dashboard</Text>
    </Box>
  )
}
