export const FEATURES = [
  {
    key: 0,
    desc: 'Auto-Scalable Architecture',
    image: 'Auto-Scalable-Architecture@2x.png'
  },
  {
    key: 1,
    desc: 'Easy-to-use API',
    image: 'API@2x.png'
  },
  {
    key: 2,
    desc: 'H264, HEVC, VP9, ProRes',
    image: 'ProRes@2x.png'
  },
  {
    key: 3,
    desc: 'DRM & Encryption',
    image: 'DRM@2x.png'
  },
  {
    key: 4,
    desc: 'HLS & MPEG-DASH',
    image: 'MPEG-DASHJ@2x.png'
  },
  {
    key: 5,
    desc: 'Multi-CDN',
    image: 'Multi-CDN@2x.png'
  },
]

export const COMPANIES = [
  {
    key: 0,
    name: 'Small Competitor',
    isZod: false,
    price: '$500',
    units: [
      {
        unitPrice: '$0.01',
        unitDesc: '1080p'
      },
      {
        unitPrice: '$0.04',
        unitDesc: '4k'
      },
      {
        unitPrice: 'N/A',
        unitDesc: '8k'
      },
    ],
    examples: []
  },
  {
    key: 1,
    name: 'logo.png',
    isZod: true,
    price: '$888',
    units: [
      {
        unitPrice: '$0.005',
        unitDesc: '1080p'
      },
      {
        unitPrice: '$0.02',
        unitDesc: '4k'
      },
      {
        unitPrice: '$0.05',
        unitDesc: '8k'
      },
    ],
    examples: [
      'AV1',
      'VR',
    ]
  },
  
  {
    key: 2,
    name: 'Big Competitor',
    isZod: false,
    price: '$1000+',
    units: [
      {
        unitPrice: '$0.03',
        unitDesc: '1080p'
      },
      {
        unitPrice: 'N/A',
        unitDesc: '8k'
      },
    ],
    examples: ['Big Brand Name']

  },
  
]
export const PROCESS = [
  {
    key: 1,
    image: 'cloud.png',
    desc: 'Get a unique referral link'
  },
  {
    key: 2,
    image: 'user.png',
    desc: 'Get people registered using your link'
  },
  {
    key: 3,
    image: 'transfer.png',
    desc: '26% of their spend gets you equivalent in ZOD tokens'
  },
]