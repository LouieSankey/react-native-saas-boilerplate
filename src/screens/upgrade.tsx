import { ScrollView } from 'react-native'
import UpgradeOptions from '../shared/screens/upgrade'
import { StripeProduct } from '../shared/util/types'

const UpgradeOptionsWrapper = () => {
  const products = mockData()

  return (
    <ScrollView>
      <UpgradeOptions products={products}></UpgradeOptions>
    </ScrollView>
  )
}

export default UpgradeOptionsWrapper
const mockData = () => {
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
