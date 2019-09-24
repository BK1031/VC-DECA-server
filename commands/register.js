const Discord = require('discord.js');
var admin = require('firebase-admin');

var db = admin.database().ref();

var emails = `
a.balakrishnan@warriorlife.net
aaliyah.brown@warriorlife.net -
aaron.waltz@warriorlife.net -
aditya.sanghani@warriorlife.net
Alex.Gu@warriorlife.net
alexander.belaire@warriorlife.net -
alexander.coney@warriorlife.net -
alexander.murgulescu@warriorlife.net
alice.duong@warriorlife.net
allene.yue@warriorlife.net -
allison.dao@warriorlife.net -
allyson.chiu@warriorlife.net -
alvin.le@warriorlife.net -
amber.lao@warriorlife.net -
an.maheshwari@warriorlife.net
an.maheshwari@warriorlife.net
ananyamaheshwari22@gmail.com
andrew.daryoush@warriorlife.net
andrewn.zhang@warriorlife.net -
andy.tran@warriorlife.net -
angela.he@warriorlife.net
angela.li@warriorlife.net
ani.zhang@warriorlife.net
anna.kim@warriorlife.net
annika.baktha@warriorlife.net
anushka.narasani@warriorlife.net
Arnav.gattani@warriorlife.net -
ashley.chou@warriorlife.net
athena.nguyen@warriorlife.net -
avani.agarwal@warriorlife.net -
bharat.kathi@warriorlife.net -
bhavya.yarlagadda@warriorlife.net -
brayden.crabb@warriorlife.net -
brayden.tam@warriorlife.net
Bryce.chen@warriorlife.net -
ByungKwan.Shim@warriorlife.net
candicenicole.chan@warriorlife.net -
carissa.nelson@warriorlife.net -
caroline.yu@warriorlife.net
catherine.lu@warriorlife.net -
cathy.chang@warriorlife.net -
cathy.tran@warriorlife.net
chanel.hong@warriorlife.net
charles.murphy@warriorlife.net
charlie.liu@warriorlife.net
chelsey.wang@warriorlife.net
chengliang.zhao@warriorlife.net
claire.pham@warriorlife.net
cole.pacheco@warriorlife.net - 
colin.fujikawa@warriorlife.net -
Connor.Toreson@warriorlife.net
cyrus.clement@warriorilife.net
david.bai@warriorlife.net
david.lewis@warriorlife.net
derek.tan@warriorlife.net -
dhruv.jha@warriorlife.net -
Ding.Weng@warriorlife.net
diya.hituvalli@warriorlife.net -
edgarrey.gabriel@warriorlife.net -
elisa.zhang@warriorlife.net
elise.lee@warriorlife.net -
Elizabeth.Jiang@warriorlife.net
emily.guan@warriorlife.net
emily.lan@warriorlife.net
emma.v.zhang@gmail.com
ethan.stewart@warriorlife.net -
fredrik.thorbecke@warriorlife.net
gautam.rajan@warriorlife.net -
gisellekate.roque@warriorlife.net -
grant.klenske@warriorlife.net
gregory.lee@warriorlife.net
guan.alex@gmail.com
guanzhou.zheng@warriorlife.net
hannah.thomas@warriorlife.net -
hao200545@163.com
holly.zheng@warriorlife.net
Ian.lau@warriorlife.net
irene.yoon@warriorlife.net
isabella.levkovic@warriorlife.net -
Isabella.v@warriorlife.net
ivan.rivera@warriorlife.net
jackson.watts@warriorlife.net
jacky.quan@warriorlife.net -
jai.gulati@warriorlife.net -
james.quan@warriorlife.net -
james.zhang@warriorlife.net -
janelle.lee@warriorlife.net
jaron.kong@warriorlife.net
jason.shi@warriorlife.net -
jay.tripathi@warriorlife.net
jayden.allegakoen@warriorlife.net -
jazylette@gmail.com
jennifer.song@warriorlife.net -
jeremy.elvander@warriorlife.net
jiaqi.shen@warriorlife.net
jihoon.kim@warriorlife.net
jingzhi.hu@warriorlife.net
joanna.tan@warriorlife.net
john.nuzum@warriorlife.net
jonah.wu@warriorlife.net
jonathan.xia@warriorlife.net -
joshua.huang@warriorlife.net
joshua.minami@warriorlife.net -
justin.morgan@warriorlife.net -
kai.kang@warriorlife.net
kai.vostermans@warriorlife.net
kaitlyn.ould@warriorlife.net
Kaiyuan.cheng@warriorlife.net
kareena.patel@warriorlife.net
kartik.adimulam@warriorlife.net -
kashyap.chaturvedula@warriorlife.net -
katarina.clifford@warriorlife.net
kathalyn.do@warriorlife.net -
kathalyndo2004@gmail.com
kayla.huffman@warriorlife.net -
kayla.kelsall@warriorlife.net -
kevin.huang@warriorlife.net -
khushi.loomba@warriorlife.net
kian.kojouri@warriorlife.net -
kimberly.hostetter@warriorlife.net
krish.chhablani@warriorlife.net
kyle.dunn@warriorlife.net
leon.yee@warriorlife.net - 
lillian.hao@warriorlife.net
lilly.metz@warriorlife.net
Luke.h.oh@gmail.com
madiha.smallcombe@warriorlife.net
mae.ngo@warriorlife.net
malar_gj@hotmail.com
marcus.lee@warriorlife.net -
martin.liu@warriorlife.net -
max.zhuang@warriorlife.net
maya.trujillo@warriorlife.net -
mckenzie.diep@warriorlife.net -
meghan.duong@warriorlife.net
mia.zhang@warriorlife.net
micah.kim@warriorlife.net -
minhthi.nguyen@warriorlife.net -
mira.pande@warriorlife.net
mohan.singhal@warriorlife.net -
myron.chan@warriorlife.net -
natalie.hong@warriorlife.net
natalyn.nguyen@warriorlife.net
navya.singh@warriorlife.net
nikhil.patel@warriorlife.net
nikhita.sujan@warriorlife.net -
nikita.mahadik@warriorlife.net -
nithin.saravanan@warriorlife.net
noah.sakaitani@warriorlife.net
pauline.rogers@warriorlife.net
pierson.perrizo@warriorlife.net
prathik.kakarlamudi@warriorlife.net
rachel.hu@warriorlife.net -
raj.khera@warriorlife.net -
raj.sadafule@warriorlife.net -
ramon.rosas@warriorlife.net -
raymond.kuan@warriorlife.net
raymond.yap@warriorlife.net
Rebecca.Arabia@warriorlife.net -
renee.huang@warriorlife.net
ria.dutta@warriorlife.net -
riddhi.kasralikar@warriorlife.net
riya.duddi@warriorlife.net
ronit.randhawa@warriorlife.net
roshan.bellary@warriorlife.net
rucha.mehendale@warriorlife.net -
ryan.hsieh@warriorlife.net
ryan.zhang@warriorlife.net -
ryane.li@warriorlife.net -
rylee.bao@warriorlife.net
saad.syed@warriorlife.net -
safa.suhail@warriorlife.net
samantha.lee@warriorlife.net -
samara.vachani@warriorlife.net
samira.sadarangani@warriorlife.net
samuel.jebaraj@warriorlife.net
sean.sparks@warriorlife.net
seoeun.kim@warriorlife.net
serena.pei@warriorlife.net -
shannon.hui@warriorlife.net
sharanya.munro@warriorlife.net
shenghao.guo@warriorlife.net
Sheryl.Hsu@warriorlife.net -
shiv.mistry@warriorlife.net
shivani.dudyala@warriorlife.net
shiyu.gu@warriorlife.net
shreya.kumar@warriorlife.net
silverjuniper0@gmail.com
simran.mohanty@warriorlife.net -
siyona.roychoudhury@warriorlife.net -
sohum.agrawal@warriorlife.net
spencer.chi@warriorlife.net
spencer.he@warriorlife.net -
sumira.naroola@warriorlife.net -
taejong.kim@warriorlife.net -
tanay.appannagari@warriorlife.net
Taoyang.Jia@warriorlife.net -
Tevin.Wang@warriorlife.net -
thienan.hoang@warriorlife.net
thomas.hale@warriorlife.net
tiffany.nguyen@warriorlife.net -
timothy.chiang@warriorlife.net
tony.zhou@warriorlife.net
vaishali.nair@warriorlife.net -
vaishnavi.tatipamula@warriorlife.net
victoriaytso@gmail.com
wenjie.jiang@warriorlife.net -
wentao.zhang@warriorlife.net
willow.metz@warriorlife.net
winston.li@warriorlife.net -
xi.ye@warriorlife.net -
xiang.l@warriorlife.net
xiangzhen.meng@warriorlife.net -
xiaohan.sun@warriorlife.net -
xuan.zhang@warriorlife.net
yangyang.gu@warriorlife.net
yanni.zhong@warriorlife.net
yash.rao@warriorlife.net -
yejoon.yun@warriorlife.net -
yifei.wang@warriorlife.net
yimeng.han@warriorlife.net
yitian.li@warriorlife.net -
Yixiao.Zeng@warriorlife.net -
yuecheng.liu@warriorlife.net
zachary.barcelos@warriorlife.net
zachary.mcgee@warriorlife.net -
rhea.salian@warriorlife.net
`

var infoEmails = `
gautam.rajan@warriorlife.net
derek.tan@warriorlife.net
Bryce.chen@warriorlife.net
spencer.he@warriorlife.net
Tevin.Wang@warriorlife.net
winston.li@warriorlife.net
martin.liu@warriorlife.net
micah.kim@warriorlife.net
lillian.hao@warriorlife.net
serena.pei@warriorlife.net
allison.dao@warriorlife.net
jazylette@gmail.com
myron.chan@warriorlife.net
bharat.kathi@warriorlife.net
natalie.hong@warriorlife.net
emma.v.zhang@gmail.com
malar_gj@hotmail.com
andrew.daryoush@warriorlife.net
spencer.chi@warriorlife.net
krish.chhablani@warriorlife.net
cathy.chang@warriorlife.net
brayden.crabb@warriorlife.net
sharanya.munro@warriorlife.net
kai.vostermans@warriorlife.net
noah.sakaitani@warriorlife.net
ananyamaheshwari22@gmail.com
roshan.bellary@warriorlife.net
Alex.Gu@warriorlife.net
a.balakrishnan@warriorlife.net
guan.alex@gmail.com
cathy.tran@warriorlife.net
cathy.chang@warriorlife.net
kayla.huffman@warriorlife.net
chelsey.wang@warriorlife.net
pierson.perrizo@warriorlife.net
zachary.mcgee@warriorlife.net
ronit.randhawa@warriorlife.net
kashyap.chaturvedula@warriorlife.net
shiv.mistry@warriorlife.net
andrewn.zhang@warriorlife.net
leon.yee@warriorlife.net
wenjie.jiang@warriorife.net
bharat.kathi@warriorlife.net
allene.yue@warriorlife.net
serena.pei@warriorlife.net
jay.tripathi@warriorlife.net
Ian.lau@warriorlife.net
joshua.huang@warriorlife.net
avani.agarwal@warriorlife.net
aaliyah.brown@warriorlife.net
pauline.rogers@warriorlife.net
Tevin.Wang@warriorlife.net
saad.syed@warriorlife.net
simran.mohanty@warriorlife.net
irene.yoon@warriorlife.net
yash.rao@warriorlife.net
kevin.huang@warriorlife.net
yanni.zhong@warriorlife.net
andy.tran@warriorlife.net
yuecheng.liu@warriorlife.net
bhavya.yarlagadda@warriorlife.net
dhruv.jha@warriorlife.net
ronit.randhawa@warriorlife.net
samira.sadarangani@warriorlife.net
shiv.mistry@warriorlife.net
hannah.thomas@warriorlife.net
jay.tripathi@warriorlife.net
kathalyndo2004@gmail.com
ryane.li@warriorlife.net
Kaiyuan.cheng@warriorlife.net
catherine.lu@warriorlife.net
jennifer.song@warriorlife.net
kartik.adimulam@warriorlife.net
athena.nguyen@warriorlife.net
spencer.chi@warriorlife.net
alexander.belaire@warriorlife.net
navya.singh@warriorlife.net
shenghao.guo@warriorlife.net
allyson.chiu@warriorlife.net
krish.chhablani@warriorlife.net
carissa.nelson@warriorlife.net
a.balakrishnan@warriorlife.net
maya.trujillo@warriorlife.net
brayden.tam@warriorlife.net
jihoon.kim@warriorlife.net
diya.hituvalli@warriorlife.net
Yixiao.Zeng@warriorlife.net
Arnav.gattani@warriorlife.net
kian.kojouri@warriorlife.net
alvin.le@warriorlife.net
cathy.tran@warriorlife.net
xiaohan.sun@warriorlife.net
holly.zheng@warriorlife.net
joshua.minami@warriorlife.net
ivan.rivera@warriorlife.net
raj.khera@warriorlife.net
elise.lee@warriorlife.net
seoeun.kim@warriorlife.net
minhthi.nguyen@warriorlife.net
ani.zhang@warriorlife.net
john.nuzum@warriorlife.net
khushi.loomba@warriorlife.net
guanzhou.zheng@warriorlife.net
samuel.jebaraj@warriorlife.net
shiyu.gu@warriorlife.net
lilly.metz@warriorlife.net
mohan.singhal@warriorlife.net
jonathan.xia@warriorlife.net
anushka.narasani@warriorlife.net
madiha.smallcombe@warriorlife.net
david.bai@warriorlife.net
xuan.zhang@warriorlife.net
mia.zhang@warriorlife.net
gisellekate.roque@warriorlife.net
vaishnavi.tatipamula@warriorlife.net
wenjie.jiang@warriorlife.net
candicenicole.chan@warriorlife.net
natalyn.nguyen@warriorlife.net
jonah.wu@warriorlife.net
shreya.kumar@warriorlife.net
riddhi.kasralikar@warriorlife.net
chanel.hong@warriorlife.net
raymond.kuan@warriorlife.net
anna.kim@warriorlife.net
annika.baktha@warriorlife.net
kai.kang@warriorlife.net
samantha.lee@warriorlife.net
wentao.zhang@warriorlife.net
Ding.Weng@warriorlife.net
rucha.mehendale@warriorlife.net
kayla.huffman@warriorlife.net
max.zhuang@warriorlife.net
charles.murphy@warriorlife.net
yitian.li@warriorlife.net
nikhil.patel@warriorlife.net
tanay.appannagari@warriorlife.net
kyle.dunn@warriorlife.net
safa.suhail@warriorlife.net
bryce.chen@warriorlife.net
kevin.huang@warriorlife.net
vaishali.nair@warriorlife.net
shiv.mistry@warriorlife.net
yifei.wang@warriorlife.net
kimberly.hostetter@warriorlife.net
prathik.kakarlamudi@warriorlife.net
xiang.l@warriorlife.net
aaron.waltz@warriorlife.net
jeremy.elvander@warriorlife.net
raymond.yap@warriorlife.net
ByungKwan.Shim@warriorlife.net
irene.yoon@warriorlife.net
colin.fujikawa@warriorlife.net
jacky.quan@warriorlife.net
james.quan@warriorlife.net
diya.hituvalli@warriorlife.net
edgarrey.gabriel@warriorlife.net
seoeun.kim@warriorlife.net
sumira.naroola@warriorlife.net
caroline.yu@warriorlife.net
thienan.hoang@warriorlife.net
kaitlyn.ould@warriorlife.net
Yanni.zhong@warriorlife.net
claire.pham@warriorlife.net
meghan.duong@warriorlife.net
an.maheshwari@warriorlife.net
angela.he@warriorlife.net
emily.guan@warriorlife.net
shannon.hui@warriorlife.net
alexander.murgulescu@warriorlife.net
zachary.barcelos@warriorlife.net
shivani.dudyala@warriorlife.net
fredrik.thorbecke@warriorlife.net
katarina.clifford@warriorlife.net
taejong.kim@warriorlife.net
alexander.coney@warriorlife.net
william.le@warriorlife.net
Alex.Gu@warriorlife.net
allene.yue@warriorlife.net
allison.dao@warriorlife.net
amber.lao@warriorlife.net
an.maheshwari@warriorlife.net
andrewn.zhang@warriorlife.net
angela.li@warriorlife.net
avani.agarwal@warriorlife.net
bharat.kathi@warriorlife.net
bhavya.yarlagadda@warriorlife.net
bryce.chen@warriorlife.net
chengliang.zhao@warriorlife.net
colin.fujikawa@warriorlife.net
david.lewis@warriorlife.net
david.lewis@warriorlife.net
derek.tan@warriorlife.net
elisa.zhang@warriorlife.net
Elizabeth.Jiang@warriorlife.net
emily.lan@warriorlife.net
ethan.stewart@warriorlife.net
grant.klenske@warriorlife.net
guanzhou.zheng@warriorlife.net
Ian.lau@warriorlife.net
Isabella.v@warriorlife.net
jacky.quan@warriorlife.net
jay.tripathi@warriorlife.net
jayden.allegakoen@warriorlife.net
jingzhi.hu@warriorlife.net
joanna.tan@warriorlife.net
joshua.huang@warriorlife.net
joshua.minami@warriorlife.net
kai.kamng@warriorlife.net
kai.vostermans@warriorlife.net
kashyap.chaturvedula@warriorlife.net
kathalyn.do@warriorlife.net
kayla.kelsall@warriorlife.net
leon.yee@warriorlife.net
lillian.hao@warriorlife.net
lilly.metz@warriorlife.net
Luke.h.oh@gmail.com
marcus.lee@warriorlife.net
martin.liu@warriorlife.net
micah.kim@warriorlife.net
myron.chan@warriorlife.net
natalie.hong@warriorlife.net
navya.singh@warriorlife.net
nikhil.patel@warriorlife.net
nithin.saravanan@warriorlife.net
noah.sakaitani@warriorlife.net
pauline.rogers@warriorlife.net
pierson.perrizo@warriorlife.net
prathik.kakarlamudi@warriorlife.net
rachel.hu@warriorlife.net
raj.sadafule@warriorlife.net
ramon.rosas@warriorlife.net
renee.huang@warriorlife.net
ria.dutta@warriorlife.net
ronit.randhawa@warriorlife.net
ronit.randhawa@warriorlife.net
roshan.bellary@warriorlife.net
ryan.hsieh@warriorlife.net
saad.syed@warriorlife.net
samara.vachani@warriorlife.net
sean.sparks@warriorlife.net
serena.pei@warriorlife.net
shenghao.guo@warriorlife.net
Sheryl.Hsu@warriorlife.net
shiyu.gu@warriorlife.net
simran.mohanty@warriorlife.net
sohum.agrawal@warriorlife.net
spencer.he@warriorlife.net
tanay.appannagari@warriorlife.net
Tevin.Wang@warriorlife.net
tiffany.nguyen@warriorlife.net
vaishali.nair@warriorlife.net
victoriaytso@gmail.com
willow.metz@warriorlife.net
winston.li@warriorlife.net
xi.ye@warriorlife.net
xiaohan.sun@warriorlife.net
yangyang.gu@warriorlife.net
yitian.li@warriorlife.net
Yixiao.Zeng@warriorlife.net
zachary.mcgee@warriorlife.net
nikita.mahadik@warriorlife.net
catherine.lu@warriorlife.net
`;

var infoFirstNames = `
gautam
Derek
Bryce
Spencer
Tevin
Winston
Martin
Micah
Lillian
Serena
Allison
Jaiden
Myron
Bharat
Natalie
Emma
cyrus
Andrew 
Spencer
Krish
Cathy
Brayden
Sharanya
Kai
Noah
Ananya
Roshan
Alex
Advay
Emily
Cathy
Cathy
Kayla
Chelsey
Pierson
Zachary
Ronit 
Kashyap
Shiv
Andrew
Leon
Wenjie
Bharat
Allene
Serena
Jay 
Ian
Joshua
Avani
Aaliyah
Pauline
Tevin
Saad
Simran Mohanty
Irene
Yash
Kevin
Yanni
Andy
Yuecheng
Bhavya
Dhruv 
Ronit
samira
Shiv
Hannah
Jay
Kathalyn
Ryane
Kaiyuan
Catherine
Jennifer
kartik
Athena
Spencer
Alexander
Navya
Shenghao
Allyson 
Krish
Carissa
Advay
Maya
Brayden
Jihoon
Diya
Yixiao
Arnav
kian
Alvin
Cathy
Xiaohan
Holly
Joshua
Ivan
Raj
Elise
Ashley
Minhthi
Ani
John
Khushi
Guanzhou
Samuel
Shiyu 
Lilly
Mohan
Jonathan
Anushka
Madiha
David
Xuan
Mia
Giselle
Vaishnavi
Wenjie
Candice 
natalyn
Jonah
Shreya
Riddhi
Chanel
Raymond
Anna
Annika
Kai
Samantha
Wentao
Daniel
Rucha
Kayla
Max
Charlie
Yitian
Nikhil
Tanay
Kyle
Safa
Bryce
Kevin
Vaishali 
Shiv
Yifei
Kim
Prathik
Xiang
Aaron
Jeremy
Raymond
ByungKwan
Irene
Colin
Jacky
James
Diya 
Edgar
Ashley
Sumira
Caroline
Thienan
Kaitlyn
Yanni 
Claire
Meghan
Ananya
Angela
Emily
Shannon 
Victor
Zach
Shivani
Fredrik
Katarina
taejong 
Alex
William
Alex
Allene
Allie
Amber
Ananya
Andrew
Angela
Avani
Bharat
Bhavya
Bryce
Chengliang
Colin
David
David
Derek
Elisa
Elizabeth
Emily
Ethan
Grant
Guanzhou
Ian
Isabella
Jacky
Jay
Jayden
Jingzhi
joanna
Joshua
Joshua
Kai
Kai
Kashyap
Kathalyn 
Kayla
Leon
Lillian
Lilly
Luke
Marcus
Martin
Micah
Myron
Natalie
Navya
Nikhil
Nithin
noah 
Pauline
Pierson
Prathik
Rachel
Raj
Ramon
Renee
Ria 
Ronit
Ronit
Roshan 
Ryan
Saad
Samara
Sean
Serena
Shenghao
Sheryl
Cece
Simran
Sohum
Spencer
Tanay
Tevin
Tiffany
Vaishali 
Victoria
Willow 
Winston
Xi
Xiaohan
Yangyang 
Ethan
Yixiao
Zachary
Nikita
Catherine
`

var infoLastNames = `
rajan
Tan
Chen
He
Wang
Li
Liu
Kim
Hao
Pei
Dao
Windell
Chan
Kathi
Hong
Zhang
clement
Daryoush
Chi
Chhablani
Chang
Crabb
Munro
Vostermans
Sakaitani
Maheshwari
Bellary
Gu
Balakrishnan
Guan
Tran
Chang
Huffman
Wang
Perrizo
McGee
Randhawa
Chaturvedula
Mistry
Zhang
Yee
Jiang
Kathi
Yue
Pei
Tripathi
Lau
Huang
Agarwal
Brown
Rogers
Wang
Syed
Mohanty
Yoon
Rao
Huang
Zhong
Tran
Liu
Yarlagadda 
Jha
Randhawa
Sadarangani 
Mistry
Thomas
Tripathi
Do
Li
Cheng
Lu
Song
adimulam
Nguyen
Chi
Belaire
Singh
Guo
Chiu
Chhablani
Nelson
Balakrishnan 
Trujillo
Tam
Kim
Hituvalli
Zeng
Gattani
kojouri
Le
Tran
Sun
Zheng
Minami
Rivera
Khera
Lee
Kim
Nguyen
Zhang
Nuzum
Loomba
Zheng
Jebaraj
Gu
Metz
Singhal
Xia
Narasani
Smallcombe
Bai
Zhang
Zhang
Roque
Tatipamula
Jiang
Chan
nguyen
Wu
Kumar
Kasralikar 
Hong
Kuan
Kim
Baktha
Kang
Lee
Zhang
Weng
Mehendale
Huffman
Zhuang
Murphy
Li
Patel
Appannagari
Dunn
Suhail
Chen
Huang
Nair
Mistry
Wang
Hostetter
Kakarlamudi 
Li
Waltz
Elvander
Yap
Shim
Yoon
Fujikawa
Quan
Quan
Hituvalli
Gabriel
Kim
Naroola
Yu
Hoang
Ould
Zhong 
Pham
Duong
Maheshwaei
He
Guan
Hui 
Murgulescu
Barcelos
Dudyala
Thorbecke
Clifford
Kim
Coney
Le
Gu
Yue
Dao
Lao
Maheshwari
Zhang
Li
Agarwal
Kathi
Yarlagadda
Chen
Zhao
Fujikawa
Lewis
Lewis
Tan
Zhang
Jiang
Lan
Stewart
Klenske
Zheng
Lau
Villanueva
Quan
Tripathi
Allegakoen
Hu
tan
Huang
Minami
Kang
Vostermans 
Chaturvedula
Do
Kelsall
Yee
Hao
Metz
Oh
Lee
Liu
Kim
Chan
Hong
Singh
Patel
Saravanan
sakaitani
Rogers
Perrizo
Kakarlamudi
Hu
Sadafule 
Rosas
Huang
Dutta 
Randhawa
Randhawa
Bellary
Hsieh
Syed
Vachani
Sparks
Pei
Guo
Hsu
Gu
Mohanty
Agrawal
He
Appannagari
Wang
Nguyen
Nair
Tso
Metz
Li
Ye
Sun
Gu
Li
Zeng
McGee
Mahadik
Lu
`

var infoGrades = `
11th
12th
10th
10th
10th
10th
12th
12th
11th
10th
12th
9th
11th
11th
10th
9th
9th
10th
10th
10th
11th
10th
9th
10th
10th
9th
9th
10th
9th
9th
9th
11th
10th
10th
10th
11th
9th
11th
9th
11th
10th
11th
11th
10th
10th
10th
11th
10th
11th
12th
11th
10th
12th
12th
9th
12th
11th
9th
10th
11th
10th
11th
9th
10th
9th
10th
10th
10th
10th
11th
10th
10th
11th
10th
10th
11th
9th
9th
10th
10th
12th
9th
11th
9th
12th
10th
11th
12th
11th
12th
9th
11th
11th
10th
9th
10th
11th
10th
11th
10th
11th
10th
10th
9th
9th
9th
11th
10th
11th
10th
9th
9th
10th
12th
9th
11th
10th
10th
9th
10th
9th
10th
12th
9th
11th
12th
11th
10th
10th
11th
10th
9th
11th
10th
9th
10th
11th
11th
10th
11th
10th
9th
10th
11th
11th
10th
11th
10th
10th
11th
9th
11th
11th
11th
10th
12th
10th
10th
11th
11th
10th
9th
9th
11th
9th
11th
9th
12th
9th
11th
9th
12th
10th
12th
10th
11th
10th
10th
12th
12th
9th
11th
10th
11th
11th
10th
10th
11th
11th
9th
9th
12th
12th
9th
9th
10th
11th
10th
11th
10th
11th
10th
11th
10th
9th
10th
10th
12th
10th
11th
10th
12th
10th
11th
9th
10th
10th
12th
12th
11th
10th
9th
9th
10th
10th
11th
10th
11th
12th
12th
11th
9th
12th
9th
9th
9th
11th
12th
10th
11th
10th
9th
10th
9th
12th
9th
10th
10th
10th
11th
10th
10th
9th
10th
10th
11th
11th
10th
11th
11th
11th
10th
`

module.exports = {
	name: 'register',
	description: 'Generate csv for new deca members',
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
            var targetID = "";
            console.log(args);
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
            var emailList = emails.split('\n');
            var infoEmailList = infoEmails.split('\n')
            var firstNameList = infoFirstNames.split('\n')
            var lastNameList = infoLastNames.split('\n')
            var gradeList = infoGrades.split('\n')
            var idk = "";
            emailList.forEach(element => {
                if (!element.includes('-')) {
                    var returnString = `"","`;
                    var index = infoEmailList.indexOf(element);
                    if (infoEmailList.indexOf(element) == -1) {
                        idk += element;
                    }
                    else {
                        returnString += firstNameList[index]
                        returnString += `","","`
                        returnString += lastNameList[index]
                        returnString += `","","`
                        returnString += gradeList[index]
                        returnString += `","Opt-Out","Opt-Out","Chapter Member","","","","","","0"`
                        console.log(returnString);
                    }
                }
            });
            console.log(idk);
            // console.log(snapshot.ref.path.pieces_[1]);
            // db.child("testing").push().set("Server - Admin").then(() => {
            //     db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
            //         "author": "VC DECA Bot",
            //         "color": "#0073CE",
            //         "date": "",
            //         "message": "Test value uploaded: 'Server - Admin'",
            //         "nsfw": false,
            //         "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
            //         "role": "Bot",
            //         "type": "text",
            //         "userID": "bot1"
            //     });
            // });
        }
        else {
            // Console time!
            var emailList = emails.split('\n');
            var infoEmailList = infoEmails.split('\n')
            var firstNameList = infoFirstNames.split('\n')
            var lastNameList = infoLastNames.split('\n')
            var gradeList = infoGrades.split('\n')
            var idk = "";
            emailList.forEach(element => {
                if (!element.includes('-')) {
                    var returnString = `"","`;
                    var index = infoEmailList.indexOf(element);
                    if (infoEmailList.indexOf(element) == -1) {
                        idk += element;
                    }
                    else {
                        returnString += firstNameList[index]
                        returnString += `","","`
                        returnString += lastNameList[index]
                        returnString += `","","`
                        returnString += gradeList[index].split('th')[0]
                        returnString += `","Opt-Out","Opt-Out","Chapter Member","","","","","","0"`
                        console.log(returnString);
                    }
                }
            });
            console.log(idk);
        }
	},
};