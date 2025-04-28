'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  ButtonGroup,
} from '@chakra-ui/react'

export default function CustomerMaintenanceForm() {
  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    customerType: '',
    actualLtv: '',
    desiredLtv: '',
    stopLoss: '',
  })

  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleClear = () => {
    setFormData({
      customerId: '',
      customerName: '',
      customerType: '',
      actualLtv: '',
      desiredLtv: '',
      stopLoss: '',
    })
  }

  const handleSave = () => {
    console.log('Saved:', formData)
    toast({
      title: 'Data Saved',
      description: "Customer data saved locally.",
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleSubmit = () => {
    console.log('Submitted:', formData)
    toast({
      title: 'Form Submitted',
      description: "Customer data submitted successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={1000}
      p={6}
      m="10px auto"
      as="form"
      bg="white"
    >
      <Flex direction="column" gap={4}>
        <FormControl>
          <FormLabel>Customer ID</FormLabel>
          <Input
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
            placeholder="Enter Customer ID"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Customer Name</FormLabel>
          <Input
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Enter Customer Name"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Customer Type</FormLabel>
          <Select
            name="customerType"
            value={formData.customerType}
            onChange={handleChange}
            placeholder="Select Customer Type"
          >
            <option value="Individual">Individual</option>
            <option value="Corporate">Corporate</option>
            <option value="SME">SME</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Actual LTV</FormLabel>
          <Input
            name="actualLtv"
            value={formData.actualLtv}
            onChange={handleChange}
            placeholder="Enter Actual LTV"
            type="number"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Desired LTV</FormLabel>
          <Input
            name="desiredLtv"
            value={formData.desiredLtv}
            onChange={handleChange}
            placeholder="Enter Desired LTV"
            type="number"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Stop Loss %</FormLabel>
          <Input
            name="stopLoss"
            value={formData.stopLoss}
            onChange={handleChange}
            placeholder="Enter Stop Loss %"
            type="number"
          />
        </FormControl>

        <ButtonGroup spacing={4} pt={4} justifyContent="center">
          <Button colorScheme="blue" variant="outline" onClick={handleSave}>
            Save
          </Button>
          <Button colorScheme="gray" onClick={handleClear}>
            Clear
          </Button>
          <Button colorScheme="green" onClick={handleSubmit}>
            Submit
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
