import React, { useState } from "react";
import "./Yanglik.css";
import img from "./img/yol' belgi.jpg"
import img1 from "./img/raqam.jpg"
import img2 from "./img/elektr.jpg"
import img3 from "./img/tuman.jpg"
import img4 from "./img/radar.jpg"
import img5 from "./img/sotish.jpg"
import img6 from "./img/mast.jpg"
import img7 from "./img/taxi.jpg"
import img8 from "./img/elekton mashnina.jpg"
import Footer from "../Footer/Footer";



const App = () => {
  const newsData = [
    {
      image: img,
      author: "Temur Titorov",
      title: "O'zbekistonda yangi yo'l belgisi joriy etilmoqda",
      date: "Bugun, 10:31",
      description:
        " Shu bois endilikda shaharlar va boshqa aholi punktlarining ko‘chalarida, davlat va mahalliy ahamiyatga molik avtomobil yo‘llarining yoritilgan hamda yuqori tezlik soatiga 30 kilometrgacha cheklov joriy qilingan uchastkalarida, turar joy dahalaridagi ko‘rinish cheklangan chorrahalarda, bolalar maydonchalari hamda ta’lim tashkilotlari oldidagi yo‘l uchastkalarida, ommaviy dam olish joylari, stadionlar, vokzallar, savdo markazlari va boshqa odam ko‘p to‘planadigan joylarda, ko‘chalarning 1.21. «Bolalar» yo‘l belgisi ta’siridagi qismlariga «Baland piyodalar o‘tish joylari» yo‘l belgisi hamda yo‘l yotiq chiziqlari o‘rnatiladi.  O‘zbekistonda yo‘llarda xavfsizlikni oshirishga qaratilgan “Baland piyodalar o‘tish joyi” yangi yo‘l belgisi joriy etiladi. Bu haqda Vazirlar Mahkamasining joriy yil 30 noyabr kuni qabul qilingan “Yo‘l harakati qoidalariga piyodalar xavfsizligini ta’minlashga qaratilgan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida”gi qarorida so‘z boradi.",
    },
    {
      image: img1,
      author: "Temur Titorov",
      title: "Yangi rekord: O'zbekistonda eng qimmat davlat raqami...",
      date: "25 Dekabr, 19:23",
      description:
      "Avtomobil uchun raqam quymalari qariyb 1 mlrd so‘mga sotildi! O‘zbekistonda 2024-yil 24-dekabrda avtoraqam narxining yangi rekordi o‘rnatildi: 13-dekabrda boshlang‘ich narxi 337 500 000 so‘m bo‘lgan kim oshdi savdosiga qo‘yilgan 01 888 BBB raqami hayratlanarli 965 250 000 so‘mga sotildi. Bu uni mamlakat tarixidagi eng qimmat raqamga aylantiradi. 965 250 000 so‘m 2024-yil oxiriga kelib 74 840 AQSH dollariga teng bo‘ldi. Bu mablag‘ga yuqori toifadagi avtomobil, Toshkentda 3 xonali kvartira yoki bir nechta o‘rta toifali mashinalarni xarid qilish mumkin.Noyob raqamlar doimo haydovchilar e’tiborini tortib kelgan, 888, 777, 222 kabi yuqori raqamli kombinatsiyalar esa omad va nufuz ramzi hisoblanadi. Aynan shu sababli bunday raqamlar kim oshdi savdolarida qizg‘in raqobat predmetiga aylanadi. Ilgari Avtoelon.uz saytida O‘zbekistonda nufuzli raqamlar qancha turishligi va ularning kombinatsiyalari qanday baholanishi haqida xabar berilgan edi.75 000 dollarga qanday avtomobillar sotilishini bu yerdan bilib olishingiz mumkin.",
    },
    {
      image: img2,
      author: "Temur Titorov",
      title: "Toshkentda elektr quvvatlash shoxobchalarini o‘chirib, demontaj qilishga majburlamoqda",
      date: "27 Dekabr, 10:00",
      description:
        "Stansiyalarning aksariyati savdo markazlari, supermarketlar va mehmonxonalarga tegishli transformatorlarga ulangan. Operatorlar bu inshootlar egalariga elektr energiyasi uchun haq to‘laydilar, biroq davlat idoralari bunday ulanishlarni noqonuniy deb hisoblaydi, chunki stansiyalar joylashgan yer maydonlari bino egalariga tegishli emas.Davlat idoralari nima deyapti Energetika vazirligi zaryadlash stansiyalari faoliyatiga hech qanday cheklov joriy etmaganini va elektromobil infratuzilmasini rivojlantirishni qo‘llab-quvvatlayotganini ma’lum qildi.Kadastr agentligi ba’zi stansiyalar belgilangan maqsadda foydalanilmayotgan yerlarda o‘rnatilganini aytmoqda. Bunday hollarda qonunga ko‘ra uskunalar demontaj qilinishi, stansiya egalari esa javobgarlikka tortilishi lozim.Tadbirkorlar nima deyapti Quvvatlash stansiyalarini boshqaradigan kompaniyalar barcha qonunbuzarliklarni bartaraf etishga tayyor ekanliklarini bildirmoqda, biroq qonuniylashtirish jarayoni hamon noaniq. Operatorlarning ta’kidlashicha, ular vaziyatni tuzatishga tayyor bo‘lsalar-da, ularga aniq yechimlar taklif etilmayapti.Masalan, elektr ta’minoti korxonalari stansiyalarni bevosita o‘z tarmoqlariga ulashni talab qilmoqda.",
    },
    {
        image: img3,
        author: "Temur Titorov",
        title: "Tumanda haydash paytida nimalarni bilish kerak",
        date: "28 Dekabr, 18:00",
        description:
          "Dekabr oyi boshida Toshkentni qalin tuman qopladi, bu hatto aeroportdagi reyslarning kechikishiga sabab bo‘ldi.Yo‘llarda bu hodisa ko‘pincha yilning sovuq paytida yuz beradi va ayniqsa haydovchilar uchun jiddiy xavf tug‘diradi. Sayohatlarni qanday qilib xavfsizroq qilish mumkin? Yo‘lga chiqishdan oldin avtomobilda nimalarni tekshirish kerak: - Barcha yoritish moslamalarining ishlashini: kunduzgi yoritgichlar, gabarit chiroqlar va faralar, to‘xtash signallari, burilish ko‘rsatkichlari va tumanga qarshi faralarni.- Shamollatish tizimi va konditsionerni. Ishlab chiqaruvchining tavsiyalariga mos kelishini tekshiring.Tumandagi asosiy xavflar Tuman sayohat uchun bir nechta jiddiy qiyinchiliklar tug‘diradi, bular: 1. Ko‘rishning og’irlashishi. Yo‘lni faqat bir necha metr oldinga ko‘rish mumkin bo‘ladi. 2. Oynalarning parlanishi. Namlik avtomobilning ham ichki, ham tashqi qismida qatlam hosil qiladi va ko‘rinishni yomonlashtiradi. 3. Sirpanchiq yo‘l. Qoplamadagi namlik g‘ildiraklar bilan yo‘l orasidagi ilashishni kamaytiradi, sovuq paytlarda esa yupqa muz qatlami - muzlama hosil bo‘lishiga olib kelishi mumkin. 4. Mo‘ljalni yo‘qotish. Hatto tanish yo‘l ham harakatlanish uchun qiyin bo‘lib qoladi.",
      },
      {
        image: img5,
        author: "Temur Titorov",
        title: "Avtomobilni xarid qilgandan so‘ng rasmiylashtirish qanchaga tushadi",
        date: "28 Dekabr, 11:00",
        description:
          "Yangi egasining transportni YHXB Ro’yxatdan O'tkazish va Imtihon olish bo‘limida ro‘yxatdan o‘tkazish va davlat raqamlarini olish uchun 10 kalendar kuni mavjud. Avtomobilni ro‘yxatdan o‘tkazish xarajatlari  Avtomobilni ro‘yxatdan o‘tkazish - 2 565 000 so‘m. Texnik pasportni berish - 262 500 so‘m. Yangi davlat raqamlarini berish - 1 312 500 so‘m. YHXBda jami to‘lov - 4 140 000 so‘m.Agar avtomobil qo‘ldan sotib olingan bo‘lsa, ya’ni avval mamlakatda ro‘yxatdan o‘tkazilgan bo‘lsa, notariusda oldi-sotdi shartnomasini rasmiylashtirishga ketadigan xarajatlar: Notarial boj - 1 125 000 so‘m. Gerb yig‘imi - 37 500 so‘m. Taqiqni tekshirish - 56 250 so‘m. Konsultatsiya - 18 750 so‘m. Shartnoma tayyorlash - 37 500 so‘m. Notariusda jami - 1 275 000 so‘m. Foydalanishda bo‘lgan avtomobilni rasmiylashtirishga ketadigan umumiy xarajatlar 5 415 000 so‘mni tashkil etadi.. Barcha to‘lovlarni to‘lov xizmatlari orqali onlayn amalga oshirish mumkin. Bank bo‘limiga kvitansiya bilan borib, naqd pul to‘lash shart emas.",
      },
      {
        image: img8,
        author: "Temur Titorov",
        title: "O'zbekistonda soatiga 30 kilometrga radarlar o'rnatila boshlandi",
        date: "2 Dekabr, 19:00",
        description:
          "Maktablar yaqinida tezlik oshirilishini qayd etuvchi yangi tizimlarning sinov testlari boshlandi.Yo‘l harakati xavfsizligi xizmati tezlik cheklovi 30 km/soat bo‘lgan hududlarda qoidabuzarliklarni qayd etishga mo‘ljallangan maxsus qurilmalarni o‘rnatdi. Hozircha tajriba Navoiy shahrida o‘tkazilmoqda va ehtimol O‘zbekistonning boshqa hududlariga ham kengaytiriladi.Radarlar o‘rnatilishi mumkin bo‘lgan joylar:— Maktablar, bolalar maydonlari va dam olish zonalari yaqinida.— Turar-joy mavzelaridagi ko‘chalar va ko‘rish cheklangan chorrahalarda.— Stadionlar, vokzallar, savdo markazlari va boshqa jamoat inshootlari yaqinida.— 1.21  belgisi o‘rnatilgan yo‘l qismlarida.Bu chora-tadbirlar xavfsizlikni oshirishga qaratilganini tushunish muhim. Eslatib o‘tamiz, O‘zbekistonda yo‘l-transport hodisalaridan vafot etganlar soni o‘sishda davom etmoqda va jiddiy darajada yuqori qolmoqda. Biroq, yo‘l harakati qoidalariga rioya qilinsa, bu yangiliklar tashvishga sabab bo‘lmasligi kerak.Tezlik oshirganligi uchun jarimalar mavjudligi haqida qayerda tez bilib olish mumkinligini bu yerda o‘qing.",
      },
      {
        image: img6,
        author: "Temur Titorov",
        title: "O‘zbekistonda mast holatda transport vositasini boshqarganlik uchun qanday jazo belgilangan?",
        date: "27 Dekabr, 21:00",
        description:
          "Yangi yil bayrami arafasida barcha haydovchilarga eslatma. Mast holatda transport vositasini boshqarish yoki mast odamga haydashni topshirish qonunning jiddiy buzilishi hisoblanadi va buning uchun qat’iy jazolar belgilangan. Bundan tashqari, bunday harakatlar yo‘lda og‘ir oqibatlarga olib kelishi mumkin. Jarimalar va jazolar Tibbiy ko‘rikdan o‘tishni rad etish: BHMning 15 baravari (5 625 000 so‘m) va 1,5 yildan 3 yilgacha haydovchilik guvohnomasidan mahrum qilish. Mast holatda haydash: BHMning 25 baravari (9 375 000 so‘m) va 1,5-3 yilga haydovchilik huquqidan mahrum qilish. Transport vositasini boshqarishni mast holatdagi shaxsga topshirish: BHMning 25 baravari (9 375 000 so‘m). Haydovchilik guvohnomasisiz haydash: BHMning 40 baravari (15 000 000 so‘m) va 15 sutkagacha qamoq jazosi. Avtoelon.uz alkogol yoki giyohvand moddalar ta’sirida transport vositasini boshqarishdan voz kechishga qat’iy chorlab, murojaat qiladi. O‘zingiz va atrofdagilarning hayotini asrang! O‘zingizni ehtiyot qiling!",
      },
      {
        image: img7,
        author: "Temur Titorov",
        title: "O‘zbekiston hukumati Yandex.Taxi narxlarini pasaytirishni talab etdi",
        date: "28 Dekabr, 13:00",
        description:
          "Haydovchilarni xursand qilmaydigan yangilik. O‘zbekiston Raqobat qo‘mitasi Yandex Go UB kompaniyasiga yo‘lovchi tashish xizmatlari narxlarini qayta ko‘rib chiqish va narxlarning keskin tebranishlarini bartaraf etish talabi bilan rasmiy ogohlantirish yo‘lladi. Bu kompaniyaning bozordagi hukmron mavqei va Raqobat to‘g‘risidagi qonunni monopol yuqori narxlar o‘rnatish orqali buzish ehtimoli bilan bog‘liq. Dekabr oyining boshidan beri, ayniqsa Toshkentda, yo‘lovchi tashish narxlarining sezilarli darajada oshgani kuzatilmoqda. Bu esa foydalanuvchilar orasida norozilik to‘lqinini keltirib chiqardi. Yandex Go vakillari ta’kidlashicha, narxlar mavjud avtomobillar soni, talab darajasi, ob-havo sharoitlari va boshqa omillarni hisobga olgan holda avtomatik tarzda shakllanadi.",
      },
      {
        image: img4,
        author: "Temur Titorov",
        title: "Xiaomi elektromobillarini eksportga jo‘natishga tayyorgarlik ko‘rilmoqda",
        date: "26 Dekabr, 01:00",
        description:
          "Brend nafaqat smartfonlar va elektr choynaklar ishlab chiqarishi haqida Xitoydan tashqarida ham bilishadi. Biroq, hozircha g‘ildirakli mahsulotlardan rasman foydalanish huquqi faqat xitoyliklarning o‘zlariga berilgan. Xiaomi avtomobil bo‘limi elektromobillarni Xitoydan tashqariga eksport qilishga faol tayyorgarlik ko‘rmoqda. Kompaniya allaqachon brendni xorijiy bozorlarda ilgari surish bilan shug‘ullanadigan mutaxassislar jamoasini shakllantirmoqda. Hozircha Xiaomi xorijdagi talab va foydalanish xususiyatlarini tahlil qilish uchun avtomobillarning kichik partiyalarini sotishni yo‘lga qo‘yishni rejalashtirmoqda. Asosiy e’tibor konsernning vakolatxonalari mavjud bo‘lgan mamlakatlarga qaratiladi. Hozirda bunday vakolatxonalar butun dunyo bo‘ylab 100 ga yaqin. Qaysi davlatlar birinchi bo‘lib elektromobillarni qabul qilishi rasman ma’lum qilinmagan. Ammo ekspertlar bu qanday model bo‘lishini taxmin qilmoqdalar: asosiy nomzod YU7 elektrokrossoveri bo‘lishi mumkin. U xalqaro bozorlarda ko‘proq talab qilinishi mumkin, garchi hali Xitoyda ham taqdim etilmagan bo‘lsa-da.",
      },
  ];

  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (news) => {
    setSelectedNews(news);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="news-container">
      <h1>O'zbekiston avtomobil yangiliklari</h1>
      <div className="news-grid">
        {newsData.map((news, index) => (
          <div key={index} className="news-card" onClick={() => openModal(news)}>
            <img src={news.image} alt="News" className="news-image" />
            <div className="news-info">
              <p className="news-author">🟣 {news.author}</p>
              <h3 className="news-title">{news.title}</h3>
              <p className="news-date">{news.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>
            <h2>{selectedNews.title}</h2>
            <img src={selectedNews.image} alt="News" className="modal-image" />
            <p className="modal-description">{selectedNews.description}</p>
            <div className="div-box"> 
            <p className="modal-author">🟣 {selectedNews.author}</p>
            <p className="modal-date">{selectedNews.date}</p>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
