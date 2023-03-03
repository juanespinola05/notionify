import { SvgListType } from '../types'

const svgList: SvgListType = {
  emotion: {
    neutral: [
      ['normal_eyes.svg', 'open_mouth.svg'],
      ['normal_eyes.svg', 'normal_smile_1.svg'],
      ['cynic-eyes.svg', 'normal_smile_1.svg']
    ],
    happiness: [
      ['thin_eyes.svg', 'open_mouth.svg'],
      ['normal_eyes.svg', 'open_mouth.svg'],
      ['normal_eyes.svg', 'normal_smile_1.svg'],
      ['thin_eyes.svg', 'normal_smile_1.svg']
    ],
    sadness: [
      ['sad_eyes.svg', 'sad_mouth.svg'],
      ['thin_eyes.svg', 'sad_mouth.svg']
    ],
    anger: [
      ['angry_eyes.svg', 'angry_mouth.svg'],
      ['angry_eyes.svg', 'sad_mouth.svg'],
      ['angry_eyes.svg', 'hate_mouth.svg']
    ],
    contempt: [
      ['cynic_eyes.svg', 'hate_mouth.svg']
    ],
    disgust: [
      ['closed_eyes.svg', 'angry_mouth.svg'],
      ['normal_eyes.svg', 'angry_mouth.svg']
    ],
    fear: [],
    surprise: []
  },
  glasses: {
    reading_glasses: [
      ['glasses.svg'],
      ['stylish_glasses.svg'],
      ['rounded_glasses.svg']
    ],
    no_glasses: [],
    sunglasses: []
  },
  facial_hair: {
    beard: [
      ['beard_1.svg']
    ],
    beard_moustache: [
      ['beard_4.svg']
    ],
    beard_sideburns: [
      ['beard_2.svg']
    ],
    beard_moustache_sideburns: [
      ['beard_3.svg']
    ],
    moustache: [
      ['moustache_1.svg'],
      ['moustache_2.svg'],
      ['moustache_3.svg'],
      ['moustache_4.svg']
    ],
    none: []
  },
  gender: {
    male: [
      ['head_1.svg'],
      ['head_2.svg'],
      ['head_3.svg'],
      ['head_4.svg'],
      ['head_5.svg'],
      ['head_6.svg'],
      ['head_7.svg'],
      ['head_8.svg']
    ],
    female: [
      ['head_4.svg'],
      ['head_5.svg'],
      ['head_6.svg']
    ]
  },
  head: {
    bald: [
      []
    ],
    female_large: [
      ['hair_3.svg'],
      ['hair_6.svg'],
      ['hair_9.svg'],
      ['hair_19.svg'],
      ['hair_20.svg'],
      ['hair_21.svg'],
      ['hair_27.svg'],
      ['hair_28.svg'],
      ['hair_29.svg'],
      ['hair_30.svg'],
      ['hair_31.svg'],
      ['hair_32.svg']
    ],
    bald_short: [
      ['hair_23.svg']
    ],
    male_large: [
      ['hair_29.svg'],
      ['hair_16.svg']
    ],
    male_cut_average_thick: [
      ['hair_4.svg'],
      ['hair_8.svg'],
      ['hair_12.svg'],
      ['hair_18.svg']
    ],
    male_cut_average_average: [
      ['hair_17.svg'],
      ['hair_14.svg'],
      ['hair_25.svg']
    ],
    male_cut_receding: [
      ['hair_4.svg'],
      ['hair_12.svg'],
      ['hair_15.svg'],
      ['hair_24.svg'],
      ['hair_25.svg']
    ],
    male_cut_thick_thick: [
      ['hair_22.svg'],
      ['hair_2.svg']
    ],
    male_cut_thin_thin: [
      ['hair_1.svg'],
      ['hair_10.svg'],
      ['hair_23.svg'],
      ['hair_24.svg']
    ],
    male_cut_wavy: [
      ['hair_22.svg'],
      ['hair_2.svg']
    ],
    default: [
      ['hair_4.svg'],
      ['hair_8.svg'],
      ['hair_12.svg'],
      ['hair_18.svg']
    ]
  }
}

export default svgList
