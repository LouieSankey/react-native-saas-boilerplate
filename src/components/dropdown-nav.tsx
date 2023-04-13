import React, { useState } from 'react'
// @ts-ignore
import { createStyled } from '@emotion/primitives-core'
// @ts-ignore
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { Box, Center, CheckIcon, Select } from 'native-base'

const DropdownNavigation = ({
  options,
  onSelect
}: {
  options: any
  onSelect: any
}) => {
  const [option, setOption] = React.useState('')

  return (
    <Center>
      <Box w='100%'>
        <Select
          selectedValue={option}
          minWidth='200'
          accessibilityLabel='Choose Service'
          placeholder='Choose Service'
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size='5' />
          }}
          mt={1}
          onValueChange={(itemValue) => onSelect(itemValue)}
        >
          {options.map((option: any) => (
            <Select.Item label={option} value={option} />
          ))}
        </Select>
      </Box>
    </Center>
  )
}

const styled = createStyled(StyleSheet)

const Container = styled(View)`
  position: relative;
  width: 100%;
`

const Button = styled(TouchableOpacity)`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  text-align: center;
  font-size: 16px;
`

const ButtonText = styled(Text)`
  font-size: 16px;
`

const Dropdown = styled(View)`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 1px 2.2px rgba(0, 0, 0, 0.22);
  z-index: 1;
`

const Option = styled(TouchableOpacity)`
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: left;
`

const OptionText = styled(Text)`
  font-size: 16px;
  padding: 10px;
`

export default DropdownNavigation
