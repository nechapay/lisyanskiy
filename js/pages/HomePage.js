const HomePage = {
  name: 'HomePage',
  template:
    '<div id="map" class="map-container">' +
      '<div class="map">' +
        '<svg\n' +
        '   xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
        '   xmlns:cc="http://creativecommons.org/ns#"\n' +
        '   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
        '   xmlns:svg="http://www.w3.org/2000/svg"\n' +
        '   xmlns="http://www.w3.org/2000/svg"\n' +
        '   xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
        '   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n' +
        '   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n' +
        '   width="598.66394"\n' +
        '   height="593.01941"\n' +
        '   viewBox="0 0 598.66394 593.01943"\n' +
        '   version="1.1"\n' +
        '   id="svg8"\n' +
        '   inkscape:version="0.92.3 (unknown)"\n' +
        '   sodipodi:docname="map.svg">\n' +
        '  <defs id="defs2">' +
        '    <pattern id="imagePlace1" x="0" y="-25" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="64" height="64" xlink:href="./img/place1.png"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imagePlace2" x="90" y="-112" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/place2.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imagePlace3" x="-15" y="2" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/place3.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imagePlace4" x="50" y="-38" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/place4.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imagePlace5" x="7" y="-20" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/place5.jpg"></image>\n' +
        '    </pattern>' +
        '    <pattern id="imagePlace6" x="13" y="-18" height="128" width="128"\n' +
        '             patternUnits="userSpaceOnUse">\n' +
        '      <image x="0" y="0" width="46" height="46" xlink:href="./img/place6.jpg"></image>\n' +
        '    </pattern>' +
        '  </defs>' +
        '  <image\n' +
        '     y="-2.220446e-16"\n' +
        '     x="0"\n' +
        '     id="image877"\n' +
        '     xlink:href="./img/map.jpg"\n' +
        '     preserveAspectRatio="none"\n' +
        '     height="290.01941"\n' +
        '     width="597.66394" />\n' +
        '  <g\n' +
        '     inkscape:label="Layer 1"\n' +
        '     inkscape:groupmode="layer"\n' +
        '     id="layer1"\n' +
        '     transform="translate(-2.2886286,-1.8243716)" />\n' +
        '  <circle\n' +
        '     id="place1"\n' +
        '     cx="540"\n' +
        '     cy="20"\n' +
        '     r="8"\n' +
        '     class="interacted place1"' +
        '     @click="handleClick(\'place1\')"/>\n' +
        '  <circle\n' +
        '     id="place2"\n' +
        '     cx="580"\n' +
        '     cy="20"\n' +
        '     r="8"' +
        '     class="interacted place2"' +
        '     @click="handleClick(\'place2\')"/>\n' +
        '  <circle\n' +
        '     id="place3"\n' +
        '     cx="550"\n' +
        '     cy="95"\n' +
        '     r="6"' +
        '     class="interacted place3"' +
        '     @click="handleClick(\'place3\')"/>\n' +
        '  <circle\n' +
        '     id="place4"\n' +
        '     cx="560"\n' +
        '     cy="95"\n' +
        '     r="6"\n' +
        '     class="interacted place4"' +
        '     @click="handleClick(\'place4\')"/>\n' +
        '  <circle\n' +
        '     id="place5"\n' +
        '     cx="555"\n' +
        '     cy="105"\n' +
        '     r="6"\n' +
        '     class="interacted place5"' +
        '     @click="handleClick(\'place5\')"/>\n' +
        '  <circle\n' +
        '     id="place6"\n' +
        '     cx="540"\n' +
        '     cy="185"\n' +
        '     r="8"\n' +
        '     class="interacted place6"' +
        '     @click="handleClick(\'place6\')"/>\n' +
        '  <circle\n' +
        '     id="place7"\n' +
        '     cx="540"\n' +
        '     cy="185"\n' +
        '     r="8"\n' +
        '     class="interacted place7"' +
        '     @click="handleClick(\'place7\')"/>\n' +
        '  <circle\n' +
        '     id="place8"\n' +
        '     cx="540"\n' +
        '     cy="185"\n' +
        '     r="8"\n' +
        '     class="interacted place8"' +
        '     @click="handleClick(\'place8\')"/>\n' +'  <circle\n' +
        '     id="place9"\n' +
        '     cx="555"\n' +
        '     cy="105"\n' +
        '     r="6"\n' +
        '     class="interacted place9"' +
        '     @click="handleClick(\'place9\')"/>\n' +
        '  <circle\n' +
        '     id="place9"\n' +
        '     cx="540"\n' +
        '     cy="185"\n' +
        '     r="8"\n' +
        '     class="interacted place9"' +
        '     @click="handleClick(\'place9\')"/>\n' +
        '  <circle\n' +
        '     id="place10"\n' +
        '     cx="540"\n' +
        '     cy="185"\n' +
        '     r="8"\n' +
        '     class="interacted place10"' +
        '     @click="handleClick(\'place10\')"/>\n' +
        '  <circle\n' +
        '     id="place11"\n' +
        '     cx="540"\n' +
        '     cy="185"\n' +
        '     r="8"\n' +
        '     class="interacted place11"' +
        '     @click="handleClick(\'place11\')"/>\n' +
        '  <circle\n' +
        '     id="place12"\n' +
        '     cx="540"\n' +
        '     cy="185"\n' +
        '     r="8"\n' +
        '     class="interacted place12"' +
        '     @click="handleClick(\'place12\')"/>\n' +
        '</svg>' +
      '</div>' +
      '<div :class="infoClass">' +
        '<transition name="fade">' +
          '<div v-if="isInfo" class="card mb-3">\n' +
          '  <img class="card-img-top" :src="activePlace.src" :alt="activePlace.title">\n' +
          '  <div class="card-body">\n' +
          '    <h5 class="card-title">{{activePlace.title}}</h5>\n' +
          '    <p v-html="activePlace.description" class="card-text"></p>\n' +
          '    <button role="button" class="btn btn-outline-primary" @click="hidePlace">Закрыть</button>' +
          '  </div>\n' +
          '</div>' +
        '</transition>' +
      '</div>' +
    '</div>',
  data () {
    return {
      places: {
          place1: {
              description: 'Является самым крупным островом Кадьякского архипелага и вторым по величине островом ' +
                'США после острова Гавайи (крупнейшего острова Гавайских островов). От Аляски Кадьяк отделён ' +
                'проливом Шелихова. Ландшафт Кадьяка весьма гористый, а его высшая точка достигает 1353 м.' +
                'Климат острова не очень приятен.  Даже летом мало тёплых дней. Зима походит на нашу осень. Лето ' +
                'часто ветреное и дождливое. До прибытия русских, кроме петрушки лука горчицы и огуречной травы ' +
                'никаких растений не было. Теперь там выращивают картофель, репу, редьку, чеснок и капусту. ' +
                'С успехом на острове вырос и яровой хлеб. Среди животных число обитателей не слишком велико. ' +
                'Они состоят из медведей, лисиц, горностаев, собак и мышей. Множество птиц. Много белой и красной рыбы. ' +
                'Число жителей острова не более 4000 человек. Кадьякцы среднего роста, широколицые и широкоплечие. ' +
                'Цвет кожи имеют красновато-смуглый. Одежду здешних жителей составляют парки и камлейки, сшитые ' +
                'из шкур морских птиц. Ходят почти всегда босые, исключая весьма холодного времени, когда они ' +
                'надевают сапоги. Нежный пол здесь также привязан к щегольству и украшениям, как и в Европе. ' +
                'Раньше они делали тату. Самой дорогой вещью является янтарь. Его носят в ушах вместо серег. ' +
                'Пища здешних жителей состоит из рыбы и разного рода морских животных. Кадьякцы до прибытия ' +
                'русских не имели никакой установленной веры, а признавали доброе и злое существа. Теперь они ' +
                'почти все христиане. О первом заселении острова никто из них ничего основательно сказать не может, ' +
                'а каждый старик сплетает особую сказку по своему вкусу.',
              src: './img/place1.png',
              title: 'Остров Кадьяк'
          },
          place2: {
              description: 'Сразу же за вокзалом начинается зеленый парк им. Меньшикова. Перед ним установлен, в честь трудовых' +
                  ' и боевых подвигов железнодорожников, Памятник-Паровоз. Этот паровоз в годы ВОВ вместе с советскими' +
                  ' наступающими войсками прошел не одну тысячу километров, приближая Победу. Одним из первых паровоз СО17-12' +
                  ' доставил воинский состав в освобожденный Донбасс, в числе первых «ступил» на правый берег Днепра и ' +
                  '10 мая 1945г. доставил эшелон в поверженный Берлин. Гудок героического паровоза СО 1712 ознаменовал победу ' +
                  'над фашизмом. Паровоз - легенда стал памятником и застыл у выхода из каменного тоннеля. Сегодня он символ и ' +
                  'визитная карточка города.',
              src: './img/place2.jpg',
              title: 'Ново-Архангельск (о. Ситка)'
          },
          place3: {
              description: 'На центральной площади города, носящей имя знаменитого полководца Жукова, можно посмотреть на вечный' +
                  ' огонь и памятник, установленный в знак благодарности и вечной памяти воинам - землякам, погибшим в годы ' +
                  'революции, гражданской и Великой Отечественной войн. Мемориальный комплекс установлен в 1959г., а в 1990г. ' +
                  'у памятника были установлены мемориальные плиты с именами погибших в годы Великой Отечественной войны тихоречан.',
              src: './img/place3.jpg',
              title: 'Остров Лисянского'
          },
          place4: {
              description: 'В годы войны 40 авиационный истребительный гвардейский полк был грозой фашистов. С воздушными боями он' +
                  ' прошел фронтовой путь от Тирасполя до Гудермеса, а затем от Кубани до Берлина. За годы войны летчики полка ' +
                  'сбили 468 самолетов, уничтожили 1479 единиц наземной боевой техники, почти 19,5 тысяч солдат и офицеров ' +
                  'противника. Героическое прошлое авиаполка олицетворяется сейчас в крылатой серебристой машине, навечно застывшей' +
                  ' на взлете. Этот памятник, также стал еще одним символом Тихорецка, ведь военный аэродром у нас существует еще ' +
                  'с довоенных времен, и мы уже не представляем наш город без гула самолетов, без людей, одетую в летную форму. ' +
                  'Установка памятника была приурочена к Дню рождения Тихорецка в год его 127-летия.',
              src: './img/place4.jpg',
              title: 'Никер'
          },
          place5: {
              description: 'Уроженец Тихорецка Дмитрий Ильич Козлов, - ученик и сподвижник С.П. Королёва, дважды Герой ' +
                  'Социалистического Труда, конструктор ракеты-носителя корабля «Восток», на котором совершил полет в космос ' +
                  'первый космонавт планеты Земля, гражданин СССР, Ю.А. Гагарин. Знаменитому земляку посвящена скульптурная ' +
                  'композиция и макет ракетоносителя «Восток».',
              src: './img/place5.jpg',
              title: 'Бюст Д.И.Козлова и макет ракетоносителя «Восток»'
          },
          place6: {
              description: 'Авария на Чернобыльской АЭС, произошедшая 26 апреля 1986 года. является самой крупной техногенной ' +
                  'катастрофой в мире. Последствия аварии коснулись 17 государств. Масштабы катастрофы могли быть намного больше, ' +
                  'если бы не мужество ликвидаторов, которые ценой своих жизней спасали человечество. Подвигу 314 жителям ' +
                  'Тихорецка, принявшим участие в ликвидации последствий аварии на ЧАЭС, посвящен мемориал, который представляет ' +
                  'собой четыре пятиметровые гранитные плиты. Венчает их гнездо аистов. Фигуры птиц изготовил из металла местный ' +
                  'мастер кузнечного дела Николай Языков',
              src: './img/place6.jpg',
              title: 'Маркизские острова'
          }
      },
      isInfo: false,
      activePlace: null
    }
  },
  computed: {
    infoClass: function () {
      return {
        'info': true,
        'info_active': this.isInfo
      }
    }
  },
  methods: {
    handleClick(placeName) {
      if (!this.isInfo) {
        this.showPlace(this.places[placeName])
      }
    },
    showPlace(place) {
      this.activePlace = place
      this.isInfo = true

      setTimeout(() => {
        document.getElementById('map').scrollTo(0, 0)
      }, 400)
    },
    hidePlace() {
      this.isInfo = false
      this.activePlace = null
    }
  }
}
