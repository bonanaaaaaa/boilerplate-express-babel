/**
 * The main config file for reading a config file from a CONFIG_PATH
 */

import fs from 'fs'
import stripJsonComments from 'strip-json-comments'

import testConfig from 'config/test'
import devConfig from 'config/development'

let config = {}

if (process.env.CONFIG_PATH) {
  const configFromPath = fs.readFileSync(`${process.env.CONFIG_PATH}`, 'utf-8')
  const appConfig = JSON.parse(
    stripJsonComments(configFromPath)
  )
  config = appConfig
} else {
  if (process.env.NODE_ENV &&
    ['development', 'test'].indexOf(process.env.NODE_ENV) < 0) {
    throw new Error('Required a config file')
  }
  if (process.env.NODE_ENV === 'development') {
    config = { ...devConfig }
  }
  config = { ...testConfig }
}

export default config
