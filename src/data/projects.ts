import type { LocalizedText } from '../lib/preferences'

export type Project = {
  slug: string
  name: string
  client: string
  type: LocalizedText
  channels: string
  year: string
  master: string
  delivery: LocalizedText
  image: string
  imageAlt: LocalizedText
  storyboard: string
  storyboardAlt: LocalizedText
  motionBanner?: {
    source: string
    poster: string
    label: LocalizedText
  }
  lead: LocalizedText
  body: { en: string[]; ru: string[] }
}

export const projects: Project[] = [
  {
    slug: 'toyota-land-cruiser-200',
    name: 'Toyota Land Cruiser 200',
    client: 'Toyota',
    type: { en: 'Special Edition Campaign', ru: 'Кампания специальной серии' },
    channels: 'Display / Video / Social / DOOH',
    year: '2026',
    master: '300 × 600 / 4 sec',
    delivery: { en: 'Multi-format campaign system', ru: 'Мультиформатная система кампании' },
    image: '/projects/toyota-lc200-keyvisual.png',
    imageAlt: {
      en: 'Black Toyota Land Cruiser 200 climbing a rocky mountain ridge under dramatic clouds',
      ru: 'Чёрный Toyota Land Cruiser 200 поднимается по горному хребту под драматичным небом',
    },
    storyboard: '/projects/toyota-lc200-storyboard.png',
    storyboardAlt: {
      en: 'Six-frame animation storyboard for the Toyota Land Cruiser 200 digital campaign',
      ru: 'Шестикадровая раскадровка анимации digital-кампании Toyota Land Cruiser 200',
    },
    motionBanner: {
      source: '/projects/toyota-lc200-banner.mp4',
      poster: '/projects/toyota-lc200-banner-poster.webp',
      label: {
        en: 'Looping Toyota Land Cruiser 200 vertical motion banner',
        ru: 'Зацикленный вертикальный моушн-баннер Toyota Land Cruiser 200',
      },
    },
    lead: {
      en: 'A cinematic key visual turned into a disciplined, scalable display system.',
      ru: 'Кинематографичный кей-вижуал, превращённый в точную и масштабируемую display-систему.',
    },
    body: {
      en: [
        'The creative idea was pure scale: a Land Cruiser arriving through weather, rock and distance. We kept that cinematic tension intact while translating the image into a compact digital sequence — atmosphere, terrain, arrival, product presence, message and brand.',
        'The 300 × 600 master established the campaign’s timing and hierarchy in four seconds. From there, the system was designed for landscape, square, vertical, mobile and large-format placements across display, video, social and DOOH. Every crop protects the vehicle silhouette, headline impact and Toyota end frame rather than simply shrinking the original composition.',
        'Production covered layout logic, motion direction, asset preparation, copy-safe areas and platform-ready delivery. The result is one recognisable campaign across a fragmented media plan — faster to produce, easier to review and consistent wherever it runs.',
      ],
      ru: [
        'Креатив строился на ощущении масштаба: Land Cruiser проходит сквозь непогоду, камень и расстояние. Мы сохранили кинематографическое напряжение исходного вижуала и собрали из него компактную digital-драматургию — атмосфера, рельеф, появление автомобиля, продукт, сообщение и бренд.',
        'Мастер 300 × 600 задал четырёхсекундный тайминг и визуальную иерархию всей кампании. Дальше система раскладывалась на горизонтальные, квадратные, вертикальные, мобильные и крупноформатные размещения для display, video, social и DOOH. Каждый кроп сохраняет силуэт автомобиля, ударность заголовка и финальный бренд-фрейм Toyota, а не просто уменьшает исходный макет.',
        'Мы проработали логику компоновки, моушн-направление, подготовку ассетов, безопасные зоны для копирайта и сборку файлов по спецификациям площадок. В результате один узнаваемый образ уверенно работает во всём сложном медиаплане — быстрее производится, проще согласуется и выглядит цельно в каждом формате.',
      ],
    },
  },
  {
    slug: 'toyota-land-cruiser-prado',
    name: 'Toyota Land Cruiser Prado',
    client: 'Toyota',
    type: { en: 'Adventure Campaign', ru: 'Имиджевая adventure-кампания' },
    channels: 'Display / Video / Social / DOOH',
    year: '2026',
    master: '300 × 600 / 10 sec',
    delivery: { en: 'Responsive motion family', ru: 'Адаптивная линейка motion-форматов' },
    image: '/projects/toyota-prado-keyvisual.webp',
    imageAlt: {
      en: 'Black Toyota Land Cruiser Prado crossing timber in a sunlit forest',
      ru: 'Чёрный Toyota Land Cruiser Prado преодолевает препятствие в залитом солнцем лесу',
    },
    storyboard: '/projects/toyota-prado-storyboard.webp',
    storyboardAlt: {
      en: 'Six-frame animation storyboard and format map for the Toyota Land Cruiser Prado campaign',
      ru: 'Раскадровка анимации и карта форматов кампании Toyota Land Cruiser Prado',
    },
    lead: {
      en: 'One forest narrative, rebuilt for every screen without losing its atmosphere.',
      ru: 'Одна история в лесу, пересобранная под каждый экран без потери атмосферы.',
    },
    body: {
      en: [
        'For Prado, the campaign starts quietly. Light wakes the forest, the terrain appears, and the vehicle enters as part of the landscape rather than as a cut-out product shot. The motion builds confidence through detail: ground, wheel, grille, message and finally the brand.',
        'A ten-second 300 × 600 master became the reference for a full placement family. The media plan combined vertical display, landscape inventory, mobile units, square social assets, video and DOOH. Instead of treating each size as a separate artwork, we defined responsive rules for subject position, depth, copy scale and the Toyota brand panel.',
        'That system let the campaign move quickly from creative approval to production. Formats share the same story and visual rhythm, while each one is composed for its own viewing distance, crop and technical limits. The campaign feels authored — not batch-resized.',
      ],
      ru: [
        'Кампания Prado начинается тихо. Свет пробуждает лес, проявляется рельеф, и автомобиль входит в кадр как часть пейзажа, а не как вырезанный продуктовый шот. Движение постепенно набирает уверенность через детали: земля, колесо, решётка, сообщение и, наконец, бренд.',
        'Десятисекундный мастер 300 × 600 стал эталоном для всей линейки размещений. Медиаплан объединял вертикальный display, горизонтальный инвентарь, mobile, квадратные social-форматы, video и DOOH. Вместо отдельного макета для каждого размера мы задали адаптивные правила для позиции автомобиля, глубины сцены, масштаба текста и бренд-панели Toyota.',
        'Система позволила быстро перейти от утверждённого креатива к раскатке. Все форматы держат одну историю и визуальный ритм, но каждый собран под свою дистанцию просмотра, кроп и технические ограничения. Поэтому кампания выглядит спроектированной, а не пакетно отресайзенной.',
      ],
    },
  },
  {
    slug: 'lada-vesta-sw-cross',
    name: 'LADA Vesta SW Cross',
    client: 'LADA',
    type: { en: 'Lifestyle Product Campaign', ru: 'Имиджевая продуктовая кампания' },
    channels: 'Display / Rich Media / Mobile',
    year: '2017',
    master: '300 × 600 / 4 frames',
    delivery: { en: 'Animated feature-led banner system', ru: 'Анимированная баннерная система о продукте' },
    image: '/projects/lada-vesta-sw-cross-keyvisual.png',
    imageAlt: {
      en: 'Orange LADA Vesta SW Cross driving along a coastal road beneath red hang gliders',
      ru: 'Оранжевая LADA Vesta SW Cross на прибрежной дороге под красными дельтапланами',
    },
    storyboard: '/projects/lada-vesta-sw-cross-storyboard.png',
    storyboardAlt: {
      en: 'Four-frame animation storyboard for the LADA Vesta SW Cross digital campaign',
      ru: 'Четырёхкадровая раскадровка digital-кампании LADA Vesta SW Cross',
    },
    lead: {
      en: 'An invitation to move, structured into a clear product story for every placement.',
      ru: 'Приглашение двигаться вперёд, собранное в ясную продуктовую историю для каждого размещения.',
    },
    body: {
      en: [
        '“Say yes to life” sets the emotional direction: an open coastal road, hang gliders, bright air and a Vesta SW Cross moving toward new horizons. The campaign takes one generous lifestyle scene and gives it a simple, legible digital narrative.',
        'The vertical master moves from the key visual to the reasons to choose the car: organised luggage space, multimedia with navigation and a rear-view camera, then heated front and rear seats. Each benefit has its own frame, yet the orange vehicle, open-road energy and LADA signature keep the system visually connected.',
        'We treated the work as a production system rather than a single banner: a clear entry frame, feature-led middle scenes, a recognisable closing image and layouts that protect the copy, product and brand at compact display sizes. The result is one campaign idea that stays readable while adapting to different placements.',
      ],
      ru: [
        '«Скажи жизни да!» задаёт эмоциональный вектор кампании: открытая прибрежная дорога, дельтапланы, воздух и Vesta SW Cross, движущаяся к новым горизонтам. Один большой lifestyle-вижуал мы превратили в простую и хорошо читаемую digital-историю.',
        'Вертикальный мастер проходит путь от key visual к причинам выбрать автомобиль: универсальный багажник с органайзером, мультимедиа с навигацией и камерой заднего вида, затем подогрев передних и задних сидений. Каждый аргумент получил свой кадр, а оранжевый автомобиль, энергия дороги и LADA-подпись связывают систему воедино.',
        'Мы собирали не одиночный баннер, а production-систему: ясный стартовый кадр, продуктовые сцены в середине, узнаваемый финал и компоновки, которые сохраняют копирайт, автомобиль и бренд на компактных display-размещениях. Так одна идея кампании остаётся читаемой при адаптации под разные площадки.',
      ],
    },
  },
]
