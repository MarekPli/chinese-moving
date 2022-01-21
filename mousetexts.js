const traditStr = `天地玄黃宇宙洪荒
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

const simpleStr =
    `天地玄黄宇宙洪荒
日月盈昃辰宿列张
寒来暑往秋收冬藏
闰余成岁律吕调阳
云腾致雨露结为霜
金生丽水玉出昆冈
剑号巨阙珠称夜光
果珍李柰菜重芥姜
海咸河淡鳞潜羽翔
龙师火帝鸟官人皇
始制文字乃服衣裳
推位让国有虞陶唐
吊民伐罪周发殷汤
坐朝问道垂拱平章
爱育黎首臣伏戎羌
遐迩一体率宾归王
鸣凤在竹白驹食场
化被草木赖及万方
盖此身发四大五常
恭惟鞠养岂敢毁伤
女慕贞洁男效才良
知过必改得能莫忘
罔谈彼短靡恃己长
信使可复器欲难量
墨悲丝染诗赞羔羊
景行维贤克念作圣
德建名立形端表正
空谷传声虚堂习听
祸因恶积福缘善庆
尺璧非宝寸阴是竞
资父事君曰严与敬
孝当竭力忠则尽命
临深履薄夙兴温凊
似兰斯馨如松之盛
川流不息渊澄取映
容止若思言辞安定
笃初诚美慎终宜令
荣业所基籍甚无竟
学优登仕摄职从政
存以甘棠去而益咏
乐殊贵贱礼别尊卑
上和下睦夫唱妇随
外受傅训入奉母仪
诸姑伯叔犹子比儿
孔怀兄弟同气连枝
交友投分切磨箴规
仁慈隐恻造次弗离
节义廉退颠沛匪亏
性静情逸心动神疲
守真志满逐物意移
坚持雅操好爵自縻
都邑华夏东西二京
背邙面洛浮渭据泾
宫殿盘郁楼观飞惊
图写禽兽画彩仙灵
丙舍傍启甲帐对楹
肆筵设席鼓瑟吹笙
升阶纳陛弁转疑星
右通广内左达承明
既集坟典亦聚群英
杜稿钟隶漆书壁经
府罗将相路侠槐卿
户封八县家给千兵
高冠陪辇驱毂振缨
世禄侈富车驾肥轻
策功茂实勒碑刻铭
磻溪伊尹佐时阿衡
奄宅曲阜微旦孰营
桓公匡合济弱扶倾
绮回汉惠说感武丁
俊乂密勿多士寔宁
晋楚更霸赵魏困横
假途灭虢践土会盟
何遵约法韩弊烦刑
起翦颇牧用军最精
宣威沙漠驰誉丹青
九州禹迹百郡秦并
岳宗泰岱禅主云亭
雁门紫塞鸡田赤城
昆池碣石钜野洞庭
旷远绵邈岩岫杳冥
治本于农务兹稼穑
俶载南亩我艺黍稷
税熟贡新劝赏黜陟
孟轲敦素史鱼秉直
庶几中庸劳谦谨敕
聆音察理鉴貌辨色
贻厥嘉猷勉其祗植
省躬讥诫宠增抗极
殆辱近耻林皋幸即
两疏见机解组谁逼
索居闲处沉默寂寥
求古寻论散虑逍遥
欣奏累遣戚谢欢招
渠荷的历园莽抽条
枇杷晚翠梧桐蚤凋
陈根委翳落叶飘摇
游鵾独运凌摩绛霄
耽读玩市寓目囊箱
易輶攸畏属耳垣墙
具膳餐饭适口充肠
饱饫烹宰饥厌糟糠
亲戚故旧老少异粮
妾御绩纺侍巾帷房
纨扇圆絜银烛炜煌
昼眠夕寐蓝笋象床
弦歌酒宴接杯举觞
矫手顿足悦豫且康
嫡后嗣续祭祀烝尝
稽颡再拜悚惧恐惶
笺牒简要顾答审详
骸垢想浴执热愿凉
驴骡犊特骇跃超骧
诛斩贼盗捕获叛亡
布射僚丸嵇琴阮啸
恬笔伦纸钧巧任钓
释纷利俗竝皆佳妙
毛施淑姿工颦妍笑
年矢每催曦晖朗曜
璇玑悬斡晦魄环照
指薪修祜永绥吉劭
矩步引领俯仰廊庙
束带矜庄徘徊瞻眺
孤陋寡闻愚蒙等诮
谓语助者焉哉乎也
`

const pinyinStr = `tiān dì xuán huáng yǔ zhòu hóng huāng
rì yuè yíng zè chén sù liè zhāng
hán lái shǔ wǎng qiū shōu dōng cáng
rùn yú chéng suì lǜ lǚ tiáo yáng
yún téng zhì yǔ lù jié wéi shuāng
jīn shēng lì shuǐ yù chū kūn gāng
jiàn hào jù quē zhū chēng yè guāng
guǒ zhēn lǐ nài cài zhòng jiè jiāng
hǎi xián hé dàn lín qián yǔ xiáng
lóng shī huǒ dì niǎo guān rén huáng
shǐ zhì wén zì nǎi fú yī cháng
tuī wèi ràng guó yǒu yú táo táng
diào mín fá zuì zhōu fā yīn tāng
zuò cháo wèn dào chuí gǒng píng zhāng
ài yù lí shǒu chén fú róng qiāng
xiá ěr yī tǐ shuài bīn guī wáng
míng fèng zài zhú bái jū shí cháng
huà bèi cǎo mù lài jí wàn fāng
gài cǐ shēn fà sì dà wǔ cháng
gōng wéi jū yǎng qǐ gǎn huǐ shāng
nǚ mù zhēn jié nán xiào cái liáng
zhī guò bì gǎi dé néng mò wàng
wǎng tán bǐ duǎn mí shì jǐ cháng
xìn shǐ kě fù qì yù nán liàng
mò bēi sī rǎn shī zàn gāo yáng
jǐng xíng wéi xián kè niàn zuò shèng
dé jiàn míng lì xíng duān biǎo zhèng
kōng gǔ chuán shēng xū táng xí tīng
huò yīn è jī fú yuán shàn qìng
chǐ bì fēi bǎo cùn yīn shì jìng
zī fù shì jūn yuē yán yǔ jìng
xiào dāng jié lì zhōng zé jìn mìng
lín shēn lǚ bó sù xīng wēn qìng
sì lán sī xīn rú sōng zhī shèng
chuān liú bù xī yuān chéng qǔ yìng
róng zhǐ ruò sī yán cí ān dìng
dǔ chū chéng měi shèn zhōng yí lìng
róng yè suǒ jī jí shèn wú jìng
xué yōu dēng shì shè zhí cóng zhèng
cún yǐ gān táng qù ér yì yǒng
yuè shū guì jiàn lǐ bié zūn bēi
shàng hé xià mù fū chàng fù suí
wài shòu fù xùn rù fèng mǔ yí
zhū gū bó shū yóu zǐ bǐ ér
kǒng huái xiōng dì tóng qì lián zhī
jiāo yǒu tóu fèn qiè mó zhēn guī
rén cí yǐn cè zào cì fú lí
jié yì lián tuì diān pèi fěi kuī
xìng jìng qíng yì xīn dòng shén pí
shǒu zhēn zhì mǎn zhú wù yì yí
jiān chí yǎ cāo hǎo jué zì mí
dū yì huà xià dōng xī èr jīng
bèi máng miàn luò fú wèi jù jīng
gōng diàn pán yù lóu guān fēi jīng
tú xiě qín shòu huà cǎi xiān líng
bǐng shè bàng qǐ jiǎ zhàng duì yíng
sì yán shè xí gǔ sè chuī shēng
shēng jiē nà bì biàn zhuàn yí xīng
yòu tōng guǎng nèi zuǒ dá chéng míng
jì jí fén diǎn yì jù qún yīng
dù gǎo zhōng lì qī shū bì jīng
fǔ luó jiàng xiàng lù xiá huái qīng
hù fēng bā xiàn jiā jǐ qiān bīng
gāo guān péi niǎn qū gǔ zhèn yīng
shì lù chǐ fù chē jià féi qīng
cè gōng mào shí lè bēi kè míng
pán xī yī yǐn zuǒ shí ā héng
yǎn zhái qū fù wēi dàn shú yíng
huán gōng kuāng hé jì ruò fú qīng
qǐ huí hàn huì yuě gǎn wǔ dīng
jùn yì mì wù duō shì shí níng
jìn chǔ gēng bà zhào wèi kùn hèng 
jiǎ tú miè guó jiàn tǔ huì méng
hé zūn yuē fǎ hán bì fán xíng
qǐ jiǎn pō mù yòng jūn zuì jīng
xuān wēi shā mò chí yù dān qīng
jiǔ zhōu yǔ jì bǎi jùn qín bìng
yuè zōng tài dài chàn zhǔ yún tíng
yàn mén zǐ sài jī tián chì chéng
kūn chí jié shí jù yě dòng tíng
kuàng yuǎn mián miǎo yán xiù yǎo míng
zhì běn yú nóng wù zī jià sè
chù zǎi nán mǔ wǒ yì shǔ jì
shuì shú gòng xīn quàn shǎng chù zhì
mèng kē dūn sù  shǐ yú bǐng zhí
shù jī zhōng yōng láo qiān jǐn chì
líng yīn chá lǐ  jiàn mào biàn sè
yí jué jiā yóu miǎn qí zhī zhí
xǐng gōng jī jiè chǒng zēng kàng jí
dài rǔ jìn chǐ lín gāo xìng jí
liǎng shū jiàn jī jiě zǔ shéi bī
suǒ jū xián chù chén mò jì liáo
qiú gǔ xún lùn sàn lǜ xiāo yáo
xīn zòu lèi qiǎn qī xiè huān zhāo
qú hé de lì yuán mǎng chōu tiáo
pí pá wǎn cuì wú tóng zǎo diāo
chén gēn wěi yì luò yè piāo yáo
yóu kūn dú yùn líng mó jiàng xiāo
dān dú wán shì yù mù náng xiāng
yì yóu yōu wèi zhǔ ěr yuán qiáng
jù shàn cān fàn shì kǒu chōng cháng
bǎo yù pēng zǎi jī yàn zāo kāng
qīn qī gù jiù lǎo shào yì liáng
qiè yù jì fǎng shì jīn wéi fáng
wán shàn yuán xié yín zhú wěi huáng
zhòu mián xī mèi lán sǔn xiàng chuáng
xián gē jiǔ yàn jiē bēi jǔ shāng
jiǎo shǒu dùn zú yuè yù qiě kāng
dí hòu sì xù jì sì zhēng cháng
qǐ sǎng zài bài sǒng jù kǒng huáng
jiān dié jiǎn yào gù dá shěn xiáng
hái gòu xiǎng yù zhí rè yuàn liáng
lǖ luó dú tè hài yuè chāo xiāng
zhū zhǎn zéi dào bǔ huò pàn wáng
bù shè liáo wán jī qín ruǎn xiào
tián bǐ lún zhǐ  jūn qiǎo rén diào
shì fēn lì sú bìng jiē jiā miào
máo shī shū zī gōng pín yán xiào
nián shǐ měi cuī xī huī lǎng yào
xuán jī xuán wò huì pò huán zhào
zhǐ xīn xiū hù yǒng suí jí shào
jǔ bù yǐn lǐng fǔ yǎng láng miào
shù dài jīn zhuāng pái huái zhān tiào
gū lòu guǎ wén yú méng děng qiào
wèi yǔ zhù zhě yān zāi hū yě
`

const translateStr = `Heavens|Earth|At the beginning|Barren|Uniwerse|World|Vast|Desert
Sun|Moon|Waxing|Setting|Stars|Constellations|Line-up|Spread
Winter|Comes|Summer|Goes|Autumn|Reap|Winter|Store
Intercalary month|Extra|Make up|Year|Sound tuner||Regulate or harmonise|Yang (and yin)
Clouds|Rise|Cause|Rain|Dew|Form|Become|Frost
Gold|Produced in|River Li|Water (river)|Jade|Produced in|Kunlun mountains|
Sword|Named|Juque||Pearl|Named|Night|Brillance
Fruit|Precious|Peaches, plums or apples||Vegetables|Important|Mustart greens|Ginger
Seas and oceans|Salty|Rivers|Plain|Scales|Submerge|Feathers|Fly
Dragon|Teacher|Fire|King|Birds (and animals)|Officials|Men|Emperor
Beginning|Created|Chinese characters||Continue|Wear|Upper body attire|Lower body attire
Reject|Official position|Give up|Country|There is|Yu (Shun)|Tao|Tang (Yao)
Comfort|People|Attack|Tyrant|Zhou Fa||Yin Tang|
Sit|Imperial court|Ask|Ways|Drop|Clasping hands|Just|Upright
Love|Bring up|Black (hair)|Head (means people)|Subject|Obey|Barbarian|Qiang tribe
Far|Near|One|Body|Lead|Guests|Return to|King
Chirping|Phoenix|At|Bamboo|White|Steed|Eat|Place
Changed|Touched|Grass|Tree|Depends|On time|Ten thousand|Direction
Cover|This|Body|Hair|Four|Great|Five|Normal
Respect|With|Bow|Feed and nurture|Should not|Dare|Destroy|That
Lady|Respect|Purity|Virtue|Man|Imitate|Abillity|Wisdom
Know|Wrongdoing|Must|Respect|Receive|Able|Do not|Forget
Do not|Gossip|Each other|Shortcoming|Do nto|Insist|Self|Good
Trustworthiness|||Tested| Talents or vessels|Desires|Difficult|Measure
Mo Zi|Grief|Silk|Discoloured|Poetry|Praise|Young|Lamb
Look up to|Trace|Onlly|Virtuous|Overcome|Thoughts|Act as|Saint
Virtue|Build|Reputation|Establish|Shape|Posture|Expression|Upright
Empty|Valley|Reverberate|Sound|Empty|Hall|Reverberate|Hearing
Calamity|Because|Evil|Accumulate|Fortune|Result of|Kindness|Reward (in this context)
Foot (measurement)|Jade|Not|Precious jewel|Inch|Time|Is|Fitght
Give gifts|Father|Service|King|Speak|Solemnt|Given|Respect
Filial piety|Ought to|Much|Effort|Loyal|Rule|Complete|Life
Reach|Deep|Steps|Thin ice layer|Morning|Rise early|Warm|Cool
Like|Orchid|This|Fragrance|Like|Pine tree|Of|Fluorish
River|Flow|No|Stop|Source (beginning)|Clear|Get|Reflection
Appearance|Actions|Like|Thought|Words|Diction|Calm|Sure
Sincere|Beginning|Honest|Kind|Careful|End|Ought to|Law
Fluorishing|Business|Thus|Foundation|Reference|Until|No|Limit
Learn|Excellent|Promoted|Official position|Take up|Post|Participate|Politics
Keep|As if|Gang tang tree||Gone|But|Good|Remembered
Music|Distinguish|Rich|Poor|Etiquette|Distinguish|Higher class|Lower class
Top|In harmony|Bottom|Agreeable|Husband|Sings|Wife|Follows
Outside|Receive|Master|Teachings|Home|Sustain|Mother (and father)|Ceremony
Every|Aunt|Elder uncle|Younger uncle|Same as brother’s son||Compare with own son|
Very|Love|Elder brother|Younger brother|Same|Breath|Link|Branches
Contact|Friend|Rely on|Friendship|Act|Polish|Advice|Manners
Compassion|Kindness|Hidden|Sadness|Hasty|Not|Principle|Depart
Moral integrity|Loyalty|Modesty|Forgiveness|Stop|Imperfection|Contradiction|Confusion
Nature|Quiet|Feeling|Calm|Mind|Move|Spirit|Tired
Integrity|Truth|Ambition|Contentment|Chase|Material things|Wish|More
Maintain|Hold ont|Charm, elegance|Virtue|Good|Reward; high position|Self|Obtain, own
Capital|Country, city, capital|Civilised|Large|East|West|Two|Capital
Back|Mang mountains (Henan)|Face|Luo river|Float|Wei river|According to|Source of Jing river
Palace|Hall|Encircled|Flourishing|Tower|Look up|Flying|Fright
Draw|Write|Birds|Animals|Draw|Colour|Immortals|Gods
A heavenly stem|House|Side|Open|First|Bed-curtain; tent|Opposite|Pillar
Set up|Double seat|Establish|Single seat|Play|Stringed instrument|Play|Reed pipe
Ascend|Stairs|Enter|Stairs in place|Hats|Move about|Resemble|Stars
Right|Connect through|Name of palace||Left|Reach|Name of palace|
Here|Collect|Articles|Classics|Also|Collect|Large crowd|Heroes
Du Du|Calligraphy|Zhong You|Writings|Paint|Book|Wall|Classic
Office, mansion|Gather|Generals|Ministers|Road|Heroes|Huai tree|Ministry
House|Honour bestowed by the emperor|a| Counties|High official’s house|provide with|Thousand|Soldiers
High|Hat|Accompany|Imperial carriage|Ride|Centre of the wheel|Shake|Tassel
Generations|Luck, wealth|Wasteful|Rich|Carriages|Ride|Stout horse|Light carriage
Plans|Merits|Abundant|Real|Instantly|Stelae|Carve|Inscription
River Pan||Yi Yin, minister of Shang Dynasty||Help|Time|A Heng, alias of Yi Yin|
Name of ancient place|Residence|Qufu province||Without|Refers to Duke of Zhou|How would|Tent
Huan Gong (Duke Huan)||Unified|meet|Help|Weak|Assist|Those in danger
Qi|Return|Han emperor Huidi|Gratitude|Rumour|Impression|Wu Ding, a king of Shang|
Wise men|Honest, diligent|Outstanding|Encourage|Many|Scholars|Make real|Peace
Jin|Chu kingdoms|Replace|Hegemony|Zhao|Wei|Surrounded|Lian Heng
Via|By way of|Conquer|State of Guo|Jiantu||Meet|Treaty to form alliance
He|Obey|Agreement|Punishment|Han Fei|Stranded|Harsh|Punishment
Bai Qi|Wang Jian|Lian Po|Li Mu|Use|Troops|Most|Clever and able
Announce|Power|Sand|Desert|Spread|Honour and reputation|Red|Green
Nine|Provinces|Da Yu|Trace|Hundred|Prefecture|Qin|Unify
Tall mountains|Respect|Mount Tai|Mountain|Chan (Meditation)|Monk|Pavilion|
Yanmen (an important pass)||Purple Gateway (Great Wall)||Jitian||Chicheng|
Kunming Lake||Jieshi Mountain||Juye lake||Dongting lake|
Vast and spacious|Distant|Appearing distant and vague||Rocks|Cave|Distant|Obscure
Control|Origin|By|Farmers|Affairs|Of|Planting|Harvesting
Beginning|Engage in|Field, farmland||I|Plant; cultivate|Grains|
Tax|Ripe|Offer|Newly-harvested crops|Encourage|Reward|Demoted and punished|
Meng Ke||Honest|Simple|Shi Yu||Honest|Upright
To get near; attain||Balanced; moderate||Hard work|Humility|Meticulousness|Honesty
Listen|Sound|Study|Reason|Observe|Face|Differentiate|Colour
Pass on|Others|Good|Plans|Encourage|Others|With care and respect|Plants (roots)
Watch|Bow|Mock|Satisfaction|Spoilt by success|Increase|Resist|Extreme
Danger|Disgrace|Near|Shame|Forest|Riverbank|Lucky|Immediately
Two|Shu|See|Opportunity|Give up an official post||Who|Force
Alone|House|Free|Place|Quiet|Silence|Lonely|Empty
Search|Ancient|Seek|Intellectual discourse|Scatter|Anxiety|Far|Carefree
Happiness|To gather; together|Tired|Expel|Sorrow|Decline|Happiness|Beckon
Lake|Lotus|Shining brightly||Garden|Full of grass|Pull|Weed
Loquat||Late|Green|Wu tong||Early|Wither
Old|Roots|Wither|Death|Falling|Leaves|drift; blow|
Wandering kun (large, stork-like bird)||Alone|Move|Fly|Purplished red|Fall|The misty regions of heaven
Indulge in|Studies|Frivolous|Marketplace|Satisfy|Eye|Case|Box
Easy; taken lightly||Smooth|Afraid|Ears; to have heard||Walls|
Provide|Meals|Food|Rice|Suits|()Flavour|Satisfy|Intestine
Satisfy|Hunger|Cook|Slaughter|Hungry|Dislike|Husk of rice grain|
Relatives and friends||Old acquaintances||Old|Young|Differ|Food
Concubine|Subordinate|Weave|Spin|Serve|Towel|A couple’s inner chamber|
Silk|Fan|Complete|Clean|Silver|Candle|Bright|Brillant
Day|Sleep|Evening|Sleep|Green (in this context)|Bamboo|Ivory|Bed
String instrument|Song|Wine|Dinner party|Receive|Cup|Lift up|Wine vessel
Hold|Hand|Stamp one’s foot||Happy|Glad|Also|Healthy
Children borne by the first wife||Descendant|Continue|Offering|Pay respect|Sacrifices offered in winter and autumn|
Prostrate|Forehead|Again|Pay homage|Reverence|Afraid|Scared|Surprised
Paper|Publications; documents|Brief|Concise|Thing back|Answer|Question|Detail
Dried bones|Dirty|Think|Wash|Result of|Hot|Wish|Cold
Donkey|Mule|Calf|Comestic animals|Surprised and frightened|Jump|Extraordinary|High
Punish|Kill|Thief|Robber|Arrest|Obtain|Rebel|Death
Lü Bu|Shoot|Xiong Yiliao (name of a person)|Ball|Ji Kang|Chinese string instrument|Ruan Ji|Whistle
Meng Tian|Brush|Cai Lun|Paper|Ma Jun|Skilful|Ren (surname of a person)|Fishing hook
Let go|Confusion (or numerous)|Benefit|Culture|Moving together|Are|Good; charming|Beautiful
Mao Qiang|Xi Shi|Virtuous beauty|Glamorous|Skilful|Frown|Beautiful|Smile
Year|Arrow|Everyone|Hasten|Early morning|Sunlight|High up|Shines brightly
North Star||High up|Rotate; revolve (resulting in change)|Last day of the lunar month|Moonlight|Encircle|Shines
Sign|Fireword|Repair|Blessings|Forever|Safe; peaceful;|Luck|Encouragement
Discipline|Steps|Look afar||Bow head|Look up|Corridor|Temple
Tighten|Belt|Feel proper||To pace up and down||Look up|Look afar
Alone|Ugly|Little|Knowledge|Stupidity||Of the same grade|Mock
Call|Language|Help|(person; here has no meaning)|Yan|Zai|Bu|Ye
`