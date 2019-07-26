/* globals afterEach, beforeEach, it, describe, expect */
import axios from 'axios'

import { getIP } from './helpers/ipify.js'

describe('ipify.com', () => {

  it('returns an ip', async () => {
    const ip = await getIP()
    expect(ip).toEqual('75.98.200.98')
  })

})
