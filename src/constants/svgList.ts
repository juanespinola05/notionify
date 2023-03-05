import { SvgListType } from '../types'

const svgList: SvgListType = {
  emotion: {
    neutral: [
      ['normal_eyes.svg', 'open_mouth.svg'],
      ['normal_eyes.svg', 'normal_smile_1.svg'],
      ['cynic_eyes.svg', 'normal_smile_1.svg']
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
    '': [],
    beard_mustache: [
      ['3_beard.svg', '3_mustache.svg']
    ],
    beard_mustache_sideburns: [
      ['3_beard.svg', '3_mustache.svg', '4_sideburns.svg']
    ],
    beard_short: [
      ['2_head_1.svg'],
      ['2_head_2.svg'],
      ['2_head_3.svg'],
      ['2_head_4.svg'],
      ['2_head_5.svg'],
      ['2_head_6.svg'],
      ['2_head_7.svg'],
      ['2_head_8.svg']
    ],
    beard_sideburns: [
      ['3_beard.svg', '4_sideburns.svg']
    ]
  },
  gender: {
    male: [
      ['1_head_1.svg'],
      ['1_head_2.svg'],
      ['1_head_3.svg'],
      ['1_head_4.svg'],
      ['1_head_5.svg'],
      ['1_head_6.svg'],
      ['1_head_7.svg'],
      ['1_head_8.svg']
    ],
    female: [
      ['1_head_4.svg'],
      ['1_head_5.svg'],
      ['1_head_6.svg']
    ]
  },
  head: {
    bald: [
      []
    ],
    female_large: [
      ['3_hair_3.svg'],
      ['3_hair_6.svg'],
      ['3_hair_9.svg'],
      ['3_hair_19.svg'],
      ['3_hair_20.svg'],
      ['3_hair_21.svg'],
      ['3_hair_27.svg'],
      ['3_hair_28.svg'],
      ['3_hair_29.svg'],
      ['3_hair_30.svg'],
      ['3_hair_31.svg'],
      ['3_hair_32.svg']
    ],
    bald_short: [
      ['3_hair_23.svg']
    ],
    male_large: [
      ['3_hair_29.svg'],
      ['3_hair_16.svg']
    ],
    male_cut_average_thick: [
      ['3_hair_4.svg'],
      ['3_hair_8.svg'],
      ['3_hair_12.svg'],
      ['3_hair_18.svg']
    ],
    male_cut_average_average: [
      ['3_hair_17.svg'],
      ['3_hair_14.svg'],
      ['3_hair_25.svg']
    ],
    male_cut_receding: [
      ['3_hair_4.svg'],
      ['3_hair_12.svg'],
      ['3_hair_15.svg'],
      ['3_hair_24.svg'],
      ['3_hair_25.svg']
    ],
    male_cut_thick_thick: [
      ['3_hair_22.svg'],
      ['3_hair_2.svg']
    ],
    male_cut_thin_thin: [
      ['3_hair_1.svg'],
      ['3_hair_10.svg'],
      ['3_hair_23.svg'],
      ['3_hair_24.svg']
    ],
    male_cut_wavy: [
      ['3_hair_22.svg'],
      ['3_hair_2.svg']
    ],
    default: [
      ['3_hair_4.svg'],
      ['3_hair_8.svg'],
      ['3_hair_12.svg'],
      ['3_hair_18.svg']
    ]
  }
}

export default svgList
