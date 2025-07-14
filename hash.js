

import crypto from 'crypto'
import { create } from 'domain'



const hash=crypto.createHash('sha256').update('Hello World').digest('hex')
console.log(hash)



