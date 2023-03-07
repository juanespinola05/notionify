import { SvgListType } from '../types'

const svgList: SvgListType = {
  emotion: {
    neutral: [
      ['normal_eyes', 'open_mouth'],
      ['normal_eyes', 'normal_smile_1'],
      ['cynic_eyes', 'normal_smile_1']
    ],
    happiness: [
      ['thin_eyes', 'open_mouth'],
      ['normal_eyes', 'open_mouth'],
      ['normal_eyes', 'normal_smile_1'],
      ['thin_eyes', 'normal_smile_1']
    ],
    sadness: [
      ['sad_eyes', 'sad_mouth'],
      ['thin_eyes', 'sad_mouth']
    ],
    anger: [
      ['angry_eyes', 'angry_mouth'],
      ['angry_eyes', 'sad_mouth'],
      ['angry_eyes', 'hate_mouth']
    ],
    contempt: [
      ['cynic_eyes', 'hate_mouth']
    ],
    disgust: [
      ['closed_eyes', 'angry_mouth'],
      ['normal_eyes', 'angry_mouth']
    ],
    fear: [],
    surprise: []
  },
  glasses: {
    reading_glasses: [
      ['glasses'],
      ['stylish_glasses'],
      ['rounded_glasses']
    ],
    no_glasses: [],
    sunglasses: [
      ['sunglasses']
    ]
  },
  facial_hair: {
    '': [],
    beard_mustache: [
      ['3_beard', '3_mustache']
    ],
    beard_mustache_sideburns: [
      ['3_beard', '3_mustache', '4_sideburns']
    ],
    beard_short: [
      ['3_beard_1'],
      ['3_beard_2'],
      ['3_beard_3'],
      ['3_beard_4'],
      ['3_beard_5'],
      ['3_beard_6'],
      ['3_beard_7'],
      ['3_beard_8']
    ],
    beard_sideburns: [
      ['3_beard', '4_sideburns']
    ]
  },
  gender: {
    male: [
      ['1_head_1'],
      ['1_head_2'],
      ['1_head_3'],
      ['1_head_4'],
      ['1_head_5'],
      ['1_head_6'],
      ['1_head_7'],
      ['1_head_8']
    ],
    female: [
      ['1_head_4'],
      ['1_head_5'],
      ['1_head_6']
    ]
  },
  head: {
    bald: [
      []
    ],
    female_large: [
      ['3_hair_3'],
      ['3_hair_6'],
      ['3_hair_9'],
      ['3_hair_19'],
      ['3_hair_20'],
      ['3_hair_21'],
      ['3_hair_27'],
      ['3_hair_28'],
      ['3_hair_29'],
      ['3_hair_30'],
      ['3_hair_31'],
      ['3_hair_32']
    ],
    bald_short: [
      ['3_hair_23']
    ],
    male_large: [
      ['3_hair_29'],
      ['3_hair_16']
    ],
    male_cut_average_thick: [
      ['3_hair_4'],
      ['3_hair_8'],
      ['3_hair_12'],
      ['3_hair_18']
    ],
    male_cut_average_average: [
      ['3_hair_17'],
      ['3_hair_14'],
      ['3_hair_25']
    ],
    male_cut_receding: [
      ['3_hair_4'],
      ['3_hair_12'],
      ['3_hair_15'],
      ['3_hair_24'],
      ['3_hair_25']
    ],
    male_cut_thick_thick: [
      ['3_hair_22'],
      ['3_hair_2']
    ],
    male_cut_thin_thin: [
      ['3_hair_1'],
      ['3_hair_10'],
      ['3_hair_23'],
      ['3_hair_24']
    ],
    male_cut_wavy: [
      ['3_hair_22'],
      ['3_hair_2']
    ],
    default: [
      ['3_hair_4'],
      ['3_hair_8'],
      ['3_hair_12'],
      ['3_hair_18']
    ]
  }
}

export default svgList
