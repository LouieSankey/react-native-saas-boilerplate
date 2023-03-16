// import { StripeProduct } from '@/src/pages/account'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
  // @ts-ignore
} from 'react-native-alias'

// @ts-ignore
import { createStyled } from '@emotion/primitives-core'
// @ts-ignore

import { Dimensions } from 'react-native-alias'
import { useEffect, useState, useLayoutEffect } from 'react'

// { products }: { products: StripeProduct[] }

const UpgradeOptionsWrapper = () => {
  // const sortedProducts = products.sort(
  //   (a, b) => a.metadata.price - b.metadata.price
  // )
  // const theme = useTheme()

  const [screenSize, setScreenSize] = useState('mobile')

  useEffect(() => {
    const handleResize = ({ window }: { window: any }) => {
      const { width } = Dimensions.get('window')

      console.log(width)
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }
    handleResize(window)
  }, [window])

  return (
    // <Section>
    //   <Grid>
    //     {sortedProducts.map((product, index) => (
    //       <PricingCard
    //         key={product.name}
    //         height='600px'
    //         border='1px white solid'
    //         data={{
    //           price: '$' + product.metadata.price,
    //           name: product.name,
    //           features: Object.entries(product.metadata)
    //             .filter(([key, value]) => key !== 'price')
    //             .map(([key, value]) => value)
    //         }}
    //         icon={SiMarketo}
    //         button={
    //           <ActionButton
    //             variant='outline'
    //             borderWidth='2px'
    //             product={product}
    //             // sessionId={''}
    //           >
    //             Upgrade
    //           </ActionButton>
    //         }
    //       />
    //     ))}
    //   </Grid>
    // </Section>
    // const PricingCards = () => {
    //   return (
    // <Section>
    <Grid screenSize={screenSize}>
      <Card screenSize={screenSize}>
        <Title>Basic</Title>
        <Price>$10/month</Price>
        <SelectButton title='Select'>Select</SelectButton>
      </Card>
      <Card screenSize={screenSize}>
        <Title>Premium</Title>
        <Price>$20/month</Price>
        <SelectButton title='Select'>Select</SelectButton>
      </Card>
      <Card screenSize={screenSize}>
        <Title>Ultimate</Title>
        <Price>$30/month</Price>
        <SelectButton title='Select'>Select</SelectButton>
      </Card>
    </Grid>
  )
}

const styled = createStyled(StyleSheet)

interface ScreenSize {
  screenSize: 'mobile' | 'tablet' | 'desktop'
}

interface ScreenOptions {
  mobile: string
  tablet: string
  desktop: string
}

const mediaQuery = (size: ScreenSize, screen: ScreenOptions) => {
  switch (size.screenSize) {
    case 'mobile':
      console.log('mobile')
      return screen.mobile
    case 'tablet':
      console.log('tablet')

      return screen.tablet
    case 'desktop':
      console.log('desktop')

      return screen.desktop
    default:
      break
  }
}

const Grid = styled(View)`
  height: ${(size: ScreenSize) =>
    mediaQuery(size, { mobile: '600px', tablet: '700px', desktop: '500px' })};
  display: grid;
  grid-template-columns: ${(size: ScreenSize) =>
    mediaQuery(size, {
      mobile: 'repeat(1, minmax(0, 1fr))',
      tablet: 'repeat(1, minmax(0, 1fr))',
      desktop: 'repeat(3, minmax(0, 1fr))'
    })};
  gap: ${(size: ScreenSize) =>
    mediaQuery(size, { mobile: '24px', tablet: '24px', desktop: '8px' })};
`

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

const SelectButton = styled(Text)`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
`

export default UpgradeOptionsWrapper
