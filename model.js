var networkWeightStart = networkWeight = 20000000

var balance1Start = balance1 = 1000000
var balance2Start = balance2 = 100000
var balance3Start = balance3 = 10000
var balance4Start = balance4 = 1000

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

console.log('|--------------------------------------------------------------|')
console.log('| Staker          |', 'Balance Start |', 'Balance End |', 'Percent Gain |')
console.log('|--------------------------------------------------------------|')
console.log('| balance1        |', balance1Start + '       |', balance1 + '     |', Math.round((balance1/balance1Start-1)*10000)/100 + '%       |')
console.log('| balance2        |', balance2Start + '        |', balance2 + '      |', Math.round((balance2/balance2Start-1)*10000)/100 + '%       |')
console.log('| balance3        |', balance3Start + '         |', balance3 + '       |', Math.round((balance3/balance3Start-1)*10000)/100 + '%       |')
console.log('| balance4        |', balance4Start + '          |', balance4 + '        |', Math.round((balance4/balance4Start-1)*10000)/100 + '%        |')
console.log('| network weight  |', networkWeightStart + '      |', networkWeight + '    |', Math.round((networkWeight/networkWeightStart-1)*10000)/100 + '%       |')
console.log('|--------------------------------------------------------------|')
