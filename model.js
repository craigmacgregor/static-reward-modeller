var networkWeight = 20000000

var balance1 = 1000000
var balance2 = 100000
var balance3 = 10000
var balance4 = 1000

const blockReward = 2

const blocktime = 30 //seconds

const blocksYear = 60 / blocktime * 60 * 24 * 365


for (var i=0; i<blocksYear; i++) {

  networkWeight += 2

  if (i % (networkWeight/balance1) < 1) balance1 += 2
  if (i % (networkWeight/balance2) < 1) balance2 += 2
  if (i % (networkWeight/balance3) < 1) balance3 += 2
  if (i % (networkWeight/balance4) < 1) balance4 += 2

}

console.log('---------------------------')
console.log('balance1', balance1)
console.log('balance1', balance2)
console.log('balance1', balance3)
console.log('balance1', balance4)
console.log('network weight', networkWeight)
console.log('---------------------------')
