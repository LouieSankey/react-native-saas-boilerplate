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
import PricingCard from '../components/pricingCard'

const UpgradeOptions = ({ products }: { products: StripeProduct[] }) => {
  const screenSize = useScreenSize()
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
  const onPress = (e: any) => {
    console.log(e.target.value)
  }
  return (
    <PricingCard
      screenSize={screenSize}
      name={name}
      price={price}
      features={features}
    />
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

export default UpgradeOptions
