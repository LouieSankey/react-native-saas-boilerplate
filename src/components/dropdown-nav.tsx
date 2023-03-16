import React, { useState } from 'react'
// @ts-ignore
import { createStyled } from '@emotion/primitives-core'
// @ts-ignore
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'

const DropdownNavigation = ({
  options,
  onSelect
}: {
  options: any
  onSelect: any
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelectOption = (option: any) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <Container>
      <Button onPress={() => setIsOpen(!isOpen)}>
        <ButtonText>{selectedOption || 'Select an option'}</ButtonText>
      </Button>
      {isOpen && (
        <Dropdown>
          {options.map((option: any) => (
            <Option key={option} onPress={() => handleSelectOption(option)}>
              <OptionText>{option}</OptionText>
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
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
