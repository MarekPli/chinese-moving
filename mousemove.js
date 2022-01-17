let pressed = false;
let keysRectans = new Object()
let tabRectans = []
let spacePosX = 100
let cssTop = '200px'
let xPos = spacePosX
let fileText = ''
let checkedOrdered = false
let rectan = document.getElementsByClassName('rectan')[0]
let lines = document.getElementsByClassName('lines')[0]
let commonf = document.querySelector(['input[id="commonf"]']).checked
let blackshadow = document.querySelector(['input[id="blackshadow"]']).checked
let topequal = document.querySelector(['input[id="topequal"]']).checked
let mixing = document.querySelector(['input[id="mixing"]']).checked
let currentLine = 90
lines.innerHTML = 'Wybierz linię tekstu'


document.querySelector('#reading_file').addEventListener('click', function (e) {
    // e.target.innerHTML = "Plik wybrany"
    let file = document.getElementById('file').files[0]
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        fileText = reader.result
        printCharacters()
    }
    // e.target.innerHTML = "Plik wczytany"
    // e.target.disabled = true
})

addxPos = (i) => {
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
    return currentLine
}

printCharacters = () => {
    let line = chooseLine()
    // line = Math.floor(Math.random() * 125)
    // let plus = 10 * line
    let modulus = 9
    if (fileText.length == 1250)
        modulus = 10;

    let plus = modulus * line
    xPos = spacePosX
    for (let i = plus; i < tabRectans.length + plus; i++) {
        let j = i - plus
        if (fileText) // może być undefined przed wczytaniem pliku
            tabRectans[j].innerHTML = fileText[i]
        // setFontFamily(tabRectans[j])
        let colors = randomColor()
        tabRectans[j].style.backgroundColor = colors[0]
        tabRectans[j].color = colors[1]
        tabRectans[j].style.top = cssTop
        tabRectans[j].id = 'id' + xPos
        tabRectans[j].style.left = addxPos(j)
    }
    line = (line + 1) * 2 - 1
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

randomColor = () => {
    let tabColor = []
    for (let i = 0; i < 3; i++)
        tabColor.push(Math.floor(Math.random() * 255))
    let returnTab = []
    let s1 = "rgb(" + tabColor[0] + "," + tabColor[1] + "," + tabColor[2] + ")";
    let s2 = "rgb(" + colorComplement(tabColor[0]) + "," + colorComplement(tabColor[1]) + "," + colorComplement(tabColor[2]) + ")";
    returnTab.push(s1)
    returnTab.push(s2)
    return returnTab
}

addToTable = () => {
    elem = document.createElement('div')
    rectan.appendChild(elem)
    let colors = randomColor()
    elem.style.backgroundColor = colors[0]
    elem.style.color = colors[1]
    elem.style.left = xPos + 'px'
    elem.id = 'id' + xPos
    xPos += spacePosX
    elem.addEventListener('mousedown', e => pressed = e.target.id)
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

const tradit = `天地玄黃宇宙洪荒
日月盈昃辰宿列張
寒來暑往秋收冬藏
閏餘成歲律呂調陽
雲騰致雨露結為霜
金生麗水玉出崑岡
劍號巨闕珠稱夜光
果珍李柰菜重芥薑
海鹹河淡鱗潛羽翔
龍師火帝鳥官人皇
始製文字乃服衣裳
推位讓國有虞陶唐
弔民伐罪周發殷湯
坐朝問道垂拱平章
愛育黎首臣伏戎羌
遐邇壹體率賓歸王
鳴鳳在樹白駒食場
化被草木賴及萬方
蓋此身髮四大五常
恭惟鞠養豈敢毀傷
女慕貞絜男效才良
知過必改得能莫忘
罔談彼短靡恃己長
信使可覆器欲難量
墨悲絲染詩贊羔羊
景行維賢克念作聖
德建名立形端表正
空谷傳聲虛堂習聽
禍因惡積福緣善慶
尺璧非寶寸陰是競
資父事君曰嚴與敬
孝當竭力忠則盡命
臨深履薄夙興溫凊
似蘭斯馨如松之盛
川流不息淵澄取映
容止若思言辭安定
篤初誠美慎終宜令
榮業所基籍甚無竟
學優登仕攝職從政
存以甘棠去而益詠
樂殊貴賤禮別尊卑
上和下睦夫唱婦隨
外受傅訓入奉母儀
諸姑伯叔猶子比兒
孔懷兄弟同氣連枝
交友投分切磨箴規
仁慈隱惻造次弗離
節義廉退顛沛匪虧
性靜情逸心動神疲
守真志滿逐物意移
堅持雅操好爵自縻
都邑華夏東西二京
背邙面洛浮渭據涇
宮殿盤鬱樓觀飛驚
圖寫禽獸畫彩仙靈
丙舍傍啟甲帳對楹
肆筵設席鼓瑟吹笙
升階納陛弁轉疑星
右通廣內左達承明
既集墳典亦聚群英
杜稿鐘隸漆書壁經
府羅將相路俠槐卿
戶封八縣家給千兵
高冠陪輦驅轂振纓
世祿侈富車駕肥輕
策功茂實勒碑刻銘
磻溪伊尹佐時阿衡
奄宅曲阜微旦孰營
桓公匡合濟弱扶傾
綺迴漢惠説感武丁
俊乂密勿多士寔寧
晉楚更霸趙魏困橫
假途滅虢踐土會盟
何遵約法韓弊煩刑
起翦頗牧用軍最精
宣威沙漠馳譽丹青
九州禹跡百郡秦并
嶽宗恆岱禪主云亭
雁門紫塞雞田赤城
昆池碣石鉅野洞庭
曠遠綿邈岩岫杳冥
治本於農務茲稼穡
俶載南畝我藝黍稷
税熟貢新勸賞黜陟
孟軻敦素史魚秉直
庶幾中庸勞謙謹敕
聆音察理鑒貌辨色
貽厥嘉猷勉其祗植
省躬譏誡寵增抗極
殆辱近恥林皋幸即
兩疏見機解組誰逼
索居閑處沉默寂寥
求古尋論散慮逍遙
欣奏累遣慼謝歡招
渠荷的歷園莽抽條
枇杷晚翠梧桐早凋
陳根委翳落葉飄颻
游鵾獨運凌摩絳霄
耽讀玩市寓目囊箱
易輶攸畏屬耳垣牆
具膳餐飯適口充腸
飽飫烹宰饑厭糟糠
親戚故舊老少異糧
妾御績紡侍巾帷房
紈扇圓潔銀燭煒煌
晝眠夕寐藍筍象床
弦歌酒宴接杯舉觴
矯手頓足悦豫且康
嫡後嗣續祭祀烝嘗
稽顙再拜悚懼恐惶
箋牒簡要顧答審詳
骸垢想浴執熱願涼
驢騾犢特駭躍超驤
誅斬賊盜捕獲叛亡
布射僚丸嵇琴阮嘯
恬筆倫紙鈞巧任釣
釋紛利俗並皆佳妙
毛施淑姿工顰妍笑
年矢每催曦暉朗曜
璇璣懸斡晦魄環照
指薪修祜永綏吉劭
矩步引領俯仰廊廟
束帶矜莊徘徊瞻眺
孤陋寡聞愚蒙等誚
謂語助者焉哉乎也
`


for (i = 0; i < 8; i++)
    addToTable()

fileText = tradit
printCharacters()