export type Project = {
  slug: string
  name: string
  client: string
  type: string
  channels: string
  year: string
  master: string
  delivery: string
  image: string
  imageAlt: string
  storyboard: string
  storyboardAlt: string
  lead: string
  body: string[]
}

export const projects: Project[] = [
  {
    slug: 'toyota-land-cruiser-200',
    name: 'Toyota Land Cruiser 200',
    client: 'Toyota',
    type: 'Special Edition Campaign',
    channels: 'Display / Video / Social / DOOH',
    year: '2026',
    master: '300 × 600 / 4 sec',
    delivery: 'Multi-format campaign system',
    image: '/projects/toyota-lc200-keyvisual.webp',
    imageAlt: 'Black Toyota Land Cruiser 200 climbing a rocky mountain ridge under dramatic clouds',
    storyboard: '/projects/toyota-lc200-storyboard.webp',
    storyboardAlt: 'Six-frame animation storyboard for the Toyota Land Cruiser 200 digital campaign',
    lead: 'A cinematic key visual turned into a disciplined, scalable display system.',
    body: [
      'The creative idea was pure scale: a Land Cruiser arriving through weather, rock and distance. We kept that cinematic tension intact while translating the image into a compact digital sequence — atmosphere, terrain, arrival, product presence, message and brand.',
      'The 300 × 600 master established the campaign’s timing and hierarchy in four seconds. From there, the system was designed for landscape, square, vertical, mobile and large-format placements across display, video, social and DOOH. Every crop protects the vehicle silhouette, headline impact and Toyota end frame rather than simply shrinking the original composition.',
      'Production covered layout logic, motion direction, asset preparation, copy-safe areas and platform-ready delivery. The result is one recognisable campaign across a fragmented media plan — faster to produce, easier to review and consistent wherever it runs.',
    ],
  },
  {
    slug: 'toyota-land-cruiser-prado',
    name: 'Toyota Land Cruiser Prado',
    client: 'Toyota',
    type: 'Adventure Campaign',
    channels: 'Display / Video / Social / DOOH',
    year: '2026',
    master: '300 × 600 / 10 sec',
    delivery: 'Responsive motion family',
    image: '/projects/toyota-prado-keyvisual.webp',
    imageAlt: 'Black Toyota Land Cruiser Prado crossing timber in a sunlit forest',
    storyboard: '/projects/toyota-prado-storyboard.webp',
    storyboardAlt: 'Six-frame animation storyboard and format map for the Toyota Land Cruiser Prado campaign',
    lead: 'One forest narrative, rebuilt for every screen without losing its atmosphere.',
    body: [
      'For Prado, the campaign starts quietly. Light wakes the forest, the terrain appears, and the vehicle enters as part of the landscape rather than as a cut-out product shot. The motion builds confidence through detail: ground, wheel, grille, message and finally the brand.',
      'A ten-second 300 × 600 master became the reference for a full placement family. The media plan combined vertical display, landscape inventory, mobile units, square social assets, video and DOOH. Instead of treating each size as a separate artwork, we defined responsive rules for subject position, depth, copy scale and the Toyota brand panel.',
      'That system let the campaign move quickly from creative approval to production. Formats share the same story and visual rhythm, while each one is composed for its own viewing distance, crop and technical limits. The campaign feels authored — not batch-resized.',
    ],
  },
]
