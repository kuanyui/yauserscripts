const fs = require('fs')

const oriLines = fs.readFileSync('README.md').toString().split('\n')
const newLines = []
const formattedFileLines = fs.readdirSync('src').map((fileName) => `- [${fileName}](https://github.com/kuanyui/yauserscripts/raw/master/src/${fileName})`)

let stage = 0
for (const ol of oriLines) {
    if (stage === 0) {
        if (ol.startsWith('<!-- link start -->')) {
            newLines.push(ol)
            Array.prototype.push.apply(newLines, formattedFileLines)
            stage = 1
        } else {
            newLines.push(ol)
        }
    } else if (stage === 1) {
        if (ol.startsWith('<!-- link end -->')) {
            newLines.push(ol)
            stage = 2
        }
    } else {
        newLines.push(ol)
    }
}

fs.writeFileSync('README.md', newLines.join('\n'), { encoding: 'utf8', mode: '666' })