/* globals afterEach, beforeEach, it, describe, expect */
import axios from 'axios'

describe('google.com', () => {

  let response
  
  beforeEach(async () => {
    response = await axios.get('http://www.google.com')
  })

  afterEach(async () => {
  })
  
  describe('homepage', () => {
    it('returns an HTTP 200', async () => {
      expect(response.status).toBe(200)
    })

    it('has a title', async () => {
      expect(response.data).toContain('<title>Google</title>')
    })
  })

})
