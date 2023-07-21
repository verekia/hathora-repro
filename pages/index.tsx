import { useEffect } from 'react'

import { HathoraConnection } from '@hathora/client-sdk'

const IndexPage = () => {
  useEffect(() => {
    const connect = new HathoraConnection('123', null)
  }, [])

  return <div>index</div>
}

export default IndexPage
