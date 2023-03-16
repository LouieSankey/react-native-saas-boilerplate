import {
  StyleSheet,
  Text,
  View
  // @ts-ignore
} from 'react-native-alias'
// @ts-ignore
import { createStyled } from '@emotion/primitives-core'
import { useScreenSize } from '../hooks/useScreenSize'
import { getMedia } from '../ui/responsive-css-helpers'
import { ScreenSize, StripeProduct } from '../util/types'
import { CustomButton } from '../ui/buttons'

const UpgradeOptions = ({ products }: { products: StripeProduct[] }) => {
  const screenSize = useScreenSize()

  console.log(products)

  const sortedProducts = products.sort(
    (a, b) => a.metadata.price - b.metadata.price
  )

  return (
    <Grid screenSize={screenSize}>
      {sortedProducts.map((product, index) => (
        <Card
          key={product.name}
          screenSize={screenSize}
          price={'$' + product.metadata.price + '/Month'}
          name={product.name}
          features={Object.entries(product.metadata)
            .filter(([key, value]) => key !== 'price')
            .map(([key, value]) => value)}
        />
      ))}
    </Grid>
  )
}

const Card = ({
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
  return (
    <PricingCard screenSize={screenSize}>
      <Title>{name}</Title>
      <Price>{price}</Price>
      {features.map((feature) => (
        <Feature key={feature}>{feature}</Feature>
      ))}
      <SelectButton textColor={'white'} backgroundColor={'blue'}>
        Select
      </SelectButton>
    </PricingCard>
  )
}

const styled = createStyled(StyleSheet)

const Grid = styled(View)`
  height: ${(size: ScreenSize) =>
    getMedia(size, { mobile: '900px', tablet: '900px', desktop: '300px' })};
  display: grid;
  grid-template-columns: ${(size: ScreenSize) =>
    getMedia(size, {
      mobile: 'repeat(1, minmax(0, 1fr))',
      tablet: 'repeat(1, minmax(0, 1fr))',
      desktop: 'repeat(3, minmax(0, 1fr))'
    })};
  gap: ${(size: ScreenSize) =>
    getMedia(size, { mobile: '24px', tablet: '24px', desktop: '8px' })};
`

const PricingCard = styled(View)`
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

const SelectButton = styled(CustomButton)`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
  margin-top: auto;
`

export default UpgradeOptions
