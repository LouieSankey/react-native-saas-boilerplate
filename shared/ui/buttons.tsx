import React, { useState } from 'react'
import { BaseButton, BaseButtonText } from '../auth/auth-styles'

interface ButtonProps {
  textColor: string
  backgroundColor: string
  onPress: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  children: React.ReactNode
}

export const CustomButton = ({
  textColor,
  backgroundColor,
  onPress,
  children
}: ButtonProps) => {
  return (
    <BaseButton backgroundColor={backgroundColor} onPress={onPress}>
      <BaseButtonText textColor={textColor}>{children}</BaseButtonText>
    </BaseButton>
  )
}
