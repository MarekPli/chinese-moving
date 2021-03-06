let pressed = false;
let keysRectans = new Object()
let tabRectans = new Array()
let spacePosX = 100
let cssTop = '200px'
let xPos = spacePosX
let printText = ''
let fileText = ''
let checkedOrdered = false
let rectan = document.getElementsByClassName('rectan')[0]
let lines = document.getElementsByClassName('lines')[0]
lines.innerHTML = 'Wybierz linię tekstu'
let commonf = document.querySelector(['input[id="commonf"]']).checked
let blackshadow = document.querySelector(['input[id="blackshadow"]']).checked
let topequal = document.querySelector(['input[id="topequal"]']).checked
let mixing = document.querySelector(['input[id="mixing"]']).checked
let currentLine = document.querySelector(['input[name="dronerange"]']).value
let pinyinChecked = document.querySelector(['input[name="pinyin"]']).checked
let translateChecked = document.querySelector(['input[name="translate"]']).checked
const arrPinyin = pinyinStr.split('\n')
const arrTranslate = translateStr.split('\n')
let currentPinyin = new Array(8)
let currentTranslate = new Array(8)
document.querySelector('#reading_file').addEventListener('click', function (e) {
    // e.target.innerHTML = "Plik wybrany"
    let file = document.getElementById('file').files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        fileText = printText = reader.result
        printCharacters(false)
    }
    // e.target.innerHTML = "Plik wczytany"
    // e.target.disabled = true
})

addxPos = (i) => {
    // reformat and ++ for next
    let r = xPos + 'px'
    xPos += spacePosX
    if (i == 3)
        xPos += spacePosX / 2
    return r
}

isInTable = (table, limit, x) => {
    for (let i = 0; i < limit; i++) {
        if (table[i] == x) return true
    }
    return false
}

equateTops = () => {
    let tabIndexes = []
    // Wczytanie listy
    for (let i = 0; i < tabRectans.length; i++) {
        tabIndexes.push(parseInt(tabRectans[i].style.left))
    }
    // posortowanie listy
    for (let i = 0; i < tabIndexes.length; i++) {
        for (let j = 0; j < tabIndexes.length; j++) {
            if (tabIndexes[i] < tabIndexes[j]) {
                temp = tabIndexes[i]
                tabIndexes[i] = tabIndexes[j]
                tabIndexes[j] = temp
            }
        }
    }
    // posortowanie numerów listy właściwej
    for (let i = 0; i < tabIndexes.length; i++) {
        for (let j = 0; j < tabRectans.length; j++) {
            if (tabIndexes[i] + 'px' == tabRectans[j].style.left) {
                if (!isInTable(tabIndexes, i, j)) {
                    tabIndexes[i] = j
                    break
                }
            }
        }
    }
    // wyrównywanie 
    xPos = spacePosX
    for (let i = 0; i < tabIndexes.length; i++) {
        tabRectans[tabIndexes[i]].style.top = cssTop
        tabRectans[tabIndexes[i]].style.left = addxPos(i)
    }
}
chooseLine = () => {
    let checks = document.querySelector(['input[name="drone"]:checked']).value
    switch (checks) {
        case "losowo":
            currentLine = Math.floor(Math.random() * 125)
            break
        case "previous":
            if (currentLine > 0)
                currentLine--
            break
        case "next":
            if (currentLine < 124)
                currentLine++
            break
        case "range":
            let m = document.querySelector(['input[name="dronerange"]']).value
            currentLine = Math.floor(Math.random() * m)
            break
    }
}

updatePinyin = () => {
    let arr = arrPinyin[currentLine].split(" ")
    arr.forEach((element, idx) => {
        currentPinyin[idx] = element
    })
}

updateTranslate = () => {
    let arr = arrTranslate[currentLine].split("|")
    arr.forEach((element, idx) => {
        currentTranslate[idx] = element
    })
}

chooseCharfile = () => {
    let charType = document.querySelector(['input[name="character"]:checked']).value
    switch (charType) {
        case "trad":
            printText = traditStr
            break
        case "simple":
            printText = simpleStr
            break
        case "charfile":
            printText = fileText
            break
    }
    // if printText empty, no results, previous remains
    printCharacters(false)
}

printCharacters = (random = true) => {
    // line = Math.floor(Math.random() * 125)
    // let plus = 10 * line
    if (random) {
        chooseLine()
        updatePinyin()
        updateTranslate()
    }
    let modulus = 9
    if (printText.length == 1250)
        modulus = 10;

    let plus = modulus * currentLine
    xPos = spacePosX
    for (let i = plus; i < tabRectans.length + plus; i++) {
        let j = i - plus
        if (printText) { // może być undefined przed wczytaniem pliku
            tabRectans[j].innerHTML = printText[i]
            if (pinyinChecked)
                tabRectans[j].innerHTML += `<div class="pinyin"> ${currentPinyin[j]} </div>`
            if (translateChecked)
                tabRectans[j].innerHTML += `<div class="translate"> ${currentTranslate[j]} </div>`
        }

        if (!random)
            continue
        randomColor(tabRectans[j])
        tabRectans[j].style.top = cssTop
        tabRectans[j].id = 'id' + xPos
        tabRectans[j].style.left = addxPos(j)
    }
    if (!random)
        return
    // document.querySelector('.pinyin').innerHTML = arrPinyin[currentLine]
    // tabColor.forEach((_, idx, tabColor) => {
    //     tabColor[idx] = Math.floor(Math.random() * 255)
    // });

    let line = (currentLine + 1) * 2 - 1
    lines.innerHTML = "Wypisano linie: " + line + ' oraz ' + (line + 1) + '.'
    if (mixing)
        mixingLine()
}

mixingLine = () => {
    for (let i = 0; i < tabRectans.length; i++) {
        clearBorder(tabRectans[i])
        let j = Math.floor(Math.random() * tabRectans.length)
        if (i == j) continue
        let left_tmp = tabRectans[i].style.left
        let top_tmp = tabRectans[i].style.top
        tabRectans[i].style.left = tabRectans[j].style.left
        tabRectans[i].style.top = tabRectans[j].style.top
        tabRectans[j].style.left = left_tmp
        tabRectans[j].style.top = top_tmp
    }
}

orderCheck = (e) => {
    let buf = 0
    if (checkedOrdered)
        e.target.style.boxShadow = "3px 3px silver"
    // e.target.style.boxShadow:hov = "3px 3px silver"
    // box - shadow: 4 px 4 px gray;
    else
        e.target.style.boxShadow = "0 0"
    tabRectans.forEach(el => {
        let left = parseInt(el.style.left)
        if (left < buf && !checkedOrdered) {
            el.style.borderWidth = "6px"
            el.style.borderStyle = "solid"
            el.style.borderColor = "red"
        } else {
            clearBorder(el)
            buf = left
        }
    })
    checkedOrdered = !checkedOrdered
}

clearBorder = el => {
    if (el.style.borderColor == "")
        return
    el.style.borderWidth = "0"
    el.style.borderStyle = ""
    el.style.borderColor = ""
}
setFontCommon = el => {
    if (commonf) {
        el.style.fontSize = "3.5em"
        el.style.fontFamily = "'Times New Roman', Times, serif";
    } else {
        el.style.fontSize = "4em";
        el.style.fontFamily = "SimSun, 'Times New Roman', Times, serif";
    }
}

setFontShadow = el => {
    if (blackshadow)
        el.style.textShadow = '1px 1px black';
    else
        el.style.textShadow = '1px 1px beige';
}

colorComplement = n => {
    return (n + 128) % 255
}

randomColor = (elem) => {
    let tabColor = []
    for (let i = 0; i < 3; i++)
        tabColor.push(Math.floor(Math.random() * 255))
    let s1 = "rgb(" + tabColor[0] + "," + tabColor[1] + "," + tabColor[2] + ")";
    // for (let i = 0; i < 3; i++)
    // tabColor.forEach((_, idx, tabColor) => {
    //     tabColor[idx] = Math.floor(Math.random() * 255)
    // });
    // let s2 = "rgb(" + tabColor[0] + "," + tabColor[1] + "," + tabColor[2] + ")";
    let s2 = "rgb(" + colorComplement(tabColor[0]) + "," + colorComplement(tabColor[1]) + "," + colorComplement(tabColor[2]) + ")";
    elem.style.backgroundColor = s1
    elem.style.color = s2
    // elem.style.textShadow = '1px 1px ' + "rgb(" + colorComplement(tabColor[0]) + "," + colorComplement(tabColor[1]) + "," + colorComplement(tabColor[2]) + ")";
}

addToTable = () => {
    elem = document.createElement('div')
    rectan.appendChild(elem)
    randomColor(elem)
    elem.style.left = xPos + 'px'
    elem.id = 'id' + xPos
    xPos += spacePosX
    elem.addEventListener('contextmenu', e => e.preventDefault())
    elem.addEventListener('mousedown', e => {
        if (e.button == 0) {
            pressed = e.target.id
            tabRectans.forEach(el => {
                if (el.style.zIndex >= parseInt(7))
                    el.style.zIndex = "6"
            })
            e.target.style.zIndex = "7"
        } else if (e.button == 2) { // 'contextmenu'
            randomColor(e.target)
        }
    })
    keysRectans[elem.id] = elem
    tabRectans.push(elem)
    if (tabRectans.length == 4)
        xPos += spacePosX / 2
}

document.addEventListener('mouseup', e => {
    pressed = false
    window.getSelection().removeAllRanges();
    if (topequal)
        equateTops()
})

document.addEventListener('mousemove', e => {
    if (!pressed) return
    let rec = keysRectans[pressed]
    window.getSelection().removeAllRanges();

    rec.style.left = e.x - 40 + 'px'
    rec.style.top = e.y - 40 + 'px'
})

modifyRange = () => {
    document.querySelector('#range').checked = true
    let range = document.querySelector(['input[name="dronerange"]']).value
    range = (parseInt(range) + 1) * 2 - 2
    document.querySelector(['label[for="range"]']).innerText = "W zakresie od 1 do " + range

}
modifyMixing = () => {
    mixing = document.querySelector(['input[id="mixing"]']).checked
}

modifyTopEqual = (e) => {
    topequal = document.querySelector(['input[id="topequal"]']).checked
    // if (topequal)
    //     equateTops()
}
modifyFontCommon = () => {
    commonf = document.querySelector(['input[id="commonf"]']).checked
    for (let i = 0; i < tabRectans.length; i++)
        setFontCommon(tabRectans[i])
}
modifyFontShadow = () => {
    blackshadow = document.querySelector(['input[id="blackshadow"]']).checked
    for (let i = 0; i < tabRectans.length; i++)
        setFontShadow(tabRectans[i])
}

modifyPinyin = () => {
    pinyinChecked = document.querySelector(['input[name="pinyin"]']).checked
    printCharacters(false)
}
modifyTranslate = () => {
    translateChecked = document.querySelector(['input[name="translate"]']).checked
    printCharacters(false)
}

myExecute = () => {
    // let file = document.getElementById('file')
    // if (file.value) {
    //     let fi = fi.files[0]
    //     let reader = new FileReader()
    //     console.log(reader)
    // }
}
hoverOn = (e) => {
    e.target.style.boxShadow = '4px 4px gray'
}

hoverOff = (e) => {
    if (checkedOrdered)
        e.target.style.boxShadow = "0 0"
    else
        e.target.style.boxShadow = '3px 3px silver'
}

for (i = 0; i < 8; i++)
    addToTable()

modifyRange()
document.querySelector('#losowo').checked = true
printText = traditStr
printCharacters()