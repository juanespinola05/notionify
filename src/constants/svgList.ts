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
    beard_siderburs_moustache: [
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
      ['head_6.svg'],
      ['head_7.svg'],
      ['head_8.svg']
    ]
  },
  head: {
    female_bald: [
      [],
      ['hair_23.svg']
    ],
    female_cap: [
      []
    ],
    female_large: [
      ['hair_6.svg'],
      ['hair_19.svg'],
      ['hair_20.svg'],
      ['hair_28.svg'],
      ['hair_29.svg'],
      ['hair_30.svg']
    ],
    female_medium: [
      ['hair_11.svg'],
      ['hair_31.svg'],
      ['hair_21.svg'],
      ['hair_32.svg'],
      ['hair_6.svg'],
      ['hair_9.svg']
    ],
    male_bald: [
      [],
      ['hair_23.svg']
    ],
    male_bald_cap: [
      ['hair_23.svg', 'cap.svg'],
      ['cap.svg']
    ],
    male_cut: [
      ['hair_1.svg'],
      ['hair_23.svg'],
      ['hair_24.svg'],
      ['hair_26.svg']
    ],
    male_cut_cap: [
      ['cap.svg', 'hair_23.svg']
    ],
    male_large: [
      ['hair_5.svg'],
      ['hair_7.svg'],
      ['hair_16.svg']
    ],
    male_large_cap: [
      ['hair_5.svg', 'cap.svg']
    ],
    male_medium: [
      ['hair_2.svg'],
      ['hair_4.svg'],
      ['hair_8.svg'],
      ['hair_10.svg'],
      ['hair_12.svg'],
      ['hair_14.svg'],
      ['hair_15.svg'],
      ['hair_17.svg'],
      ['hair_18.svg'],
      ['hair_22.svg'],
      ['hair_25.svg']

    ],
    male_medium_cap: [
      ['hair_10.svg', 'cap.svg']
    ]
  }
}

export default svgList
