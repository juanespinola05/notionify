import { SvgListType } from '../types'

const svgList: SvgListType = {
  emotion: {
    neutral: [
      ['normal_eyes.svg', 'normal_smile_1.svg']
    ],
    happiness: [
      ['thin_eyes.svg', 'open_mouth.svg']
    ],
    sad: [
      ['sad_eyes.svg', 'sad_mouth.svg']
    ],
    angry: [],
    glad: [],
    normal: []
  },
  cap: {
    cap: [
      ['male_hair_style_23.svg', 'cap.svg']
    ],
    nocap: [
      ['male_hair_style_1.svg']
    ]
  },
  glasses: {
    glasses: [
      ['glasses.svg'],
      ['stylish_glasses.svg'],
      ['rounded_glasses.svg']
    ],
    noglasses: []
  },
  facialHair: {
    mousthace: ['mousthace_1.svg'],
    beard: ['beard_3.svg'],
    sideburns: [],
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
  }
}

export default svgList
