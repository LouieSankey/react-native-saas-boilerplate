import { ScrollView } from 'react-native'
import UpgradeOptions from '../shared/screens/pricing'
import { StripeProduct } from '../shared/sharedUtils/types'

const UpgradeOptionsWrapper = () => {
  const products = mockData()

  const purchaseProduct = async () => {
    console.log('this will purchase the product for mobile')
  }

  return (
    <ScrollView>
      <UpgradeOptions
        products={products}
        purchaseProduct={purchaseProduct}
      ></UpgradeOptions>
    </ScrollView>
  )
}

export default UpgradeOptionsWrapper
const mockData = () => {
  //this will be replaced with similar products from ios or android
  const products: StripeProduct[] = [
    {
      id: 'prod_123',
      default_price: '',
      object: 'product',
      active: true,
      name: 'Free Tier',
      metadata: {
        price: '0',
        1: 'Feature 1',
        2: 'Feature 2',
        3: 'Feature 3'
      },
      updated: 1623033169,
      created: 1623033169
    },
    {
      id: 'prod_456',
      default_price: '7',
      object: 'product',
      active: true,
      name: 'Pro Tier',
      metadata: {
        price: '15',
        1: 'Feature 1',
        2: 'Feature 2',
        3: 'Feature 3'
      },
      updated: 1623033169,
      created: 1623033169
    },
    {
      id: 'prod_789',
      default_price: '14',
      object: 'product',
      active: true,
      name: 'Unlimited',
      metadata: {
        price: '20',
        1: 'Feature 1',
        2: 'Feature 2',
        3: 'Feature 3'
      },
      updated: 1623033169,
      created: 1623033169
    }
  ]
  return products
}
