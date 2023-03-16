// @ts-ignore
import { createStyled } from '@emotion/primitives-core'
import { CustomButton } from '../ui/buttons'
import {
  StyleSheet,
  Text,
  View
  // @ts-ignore
} from 'react-native-alias'

const PricingCard = ({
  screenSize,
  price,
  name,
  features
}: {
  screenSize: string
  price: string
  name: string
  features: string[]
}) => {
  const onPress = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    console.log(e)
  }
  return (
    <Card screenSize={screenSize}>
      <Title>{name}</Title>
      <Price>{price}</Price>
      {features.map((feature) => (
        <Feature key={feature}>{feature}</Feature>
      ))}
      <SelectButtonWrapper>
        <CustomButton
          textColor={'white'}
          backgroundColor={'blue'}
          onPress={onPress}
        >
          Select
        </CustomButton>
      </SelectButtonWrapper>
    </Card>
  )
}

const styled = createStyled(StyleSheet)

const Card = styled(View)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin-bottom: 16px;
  padding: 16px;
  max-width: 100%;
`

const Title = styled(Text)`
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

const Price = styled(Text)`
  color: black;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`

const Feature = styled(Text)`
  color: black;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`

const SelectButtonWrapper = styled(View)`
  margin-top: auto;
`

export default PricingCard
