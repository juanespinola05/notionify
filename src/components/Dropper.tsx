import { ReactElement, useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { uploadImage } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'
import SvgCanvas from './SvgCanvas'
import { mapDetailsToSvg } from '../utils/svg'

export default function Dropper (): ReactElement {
  const { detection, setDetection } = useDetection()
  const [svgList, setSvgList] = useState<string[]>([])

  function handleDrop (droppedFile: any): void {
    uploadImage(droppedFile[0])
      .then((response) => setDetection(response))
      .then(() => {
        const foo = mapDetailsToSvg(detection)
        setSvgList(foo)
      })
      .catch(err => console.log(err))
  }
  // TODO: replace foo text to avoid calling API every time
  useEffect(() => {
    const foo = '{"asset_id":"e6ed78076a5a9df4c1c0fc307be66545","public_id":"c9qbdstlwxpyqwnkcoak","version":1677634541,"version_id":"23f8051bc44b9d476ec599d0cf15c0e2","signature":"fb3e18daca27417cf9e40fb1febe711241a4a47c","width":700,"height":933,"format":"jpg","resource_type":"image","created_at":"2023-03-01T01:35:41Z","tags":["forehead","chin","eyebrow","beard","neck","jaw","eyelash","facial hair","black hair","long hair","moustache"],"bytes":86525,"type":"upload","etag":"8b695abb783dced0e2aa383e1d9d7151","placeholder":false,"url":"http://res.cloudinary.com/juanespinola/image/upload/v1677634541/c9qbdstlwxpyqwnkcoak.jpg","secure_url":"https://res.cloudinary.com/juanespinola/image/upload/v1677634541/c9qbdstlwxpyqwnkcoak.jpg","folder":"","access_mode":"public","info":{"detection":{"adv_face":{"status":"complete","data":[{"bounding_box":{"top":226.33333333333334,"left":319.6666666666667,"width":204.16666666666669,"height":204.16666666666669},"attributes":{"smile":0.0,"head_pose":{"pitch":1.0,"roll":-8.6,"yaw":-30.4},"gender":"male","age":29.0,"facial_hair":{"moustache":0.6,"beard":0.9,"sideburns":0.6},"glasses":"NoGlasses","emotion":{"anger":0.0,"contempt":0.0,"disgust":0.0,"fear":0.0,"happiness":0.0,"neutral":0.995,"sadness":0.004,"surprise":0.0},"blur":{"blurLevel":"low","value":0.07},"exposure":{"exposureLevel":"goodExposure","value":0.43},"noise":{"noiseLevel":"low","value":0.0},"makeup":{"eyeMakeup":false,"lipMakeup":false},"accessories":[],"occlusion":{"foreheadOccluded":false,"eyeOccluded":false,"mouthOccluded":false},"hair":{"bald":0.01,"invisible":false,"hairColor":[{"color":"brown","confidence":1.0},{"color":"black","confidence":0.92},{"color":"gray","confidence":0.32},{"color":"red","confidence":0.07},{"color":"blond","confidence":0.06},{"color":"other","confidence":0.03},{"color":"white","confidence":0.0}]}},"facial_landmarks":{"mouth":{"left":{"x":392.46666666666664,"y":383.25},"right":{"x":462.81666666666666,"y":378.70000000000005},"under_lip":{"bottom":{"x":420.23333333333335,"y":396.20000000000005},"top":{"x":419.3,"y":381.5}},"upper_lip":{"bottom":{"x":421.28333333333336,"y":378.23333333333335},"top":{"x":421.1666666666667,"y":367.96666666666664}}},"eyebrow":{"left_outer":{"x":339.3833333333333,"y":270.31666666666666},"left_inner":{"x":394.8,"y":266.81666666666666},"right_inner":{"x":424.08333333333337,"y":263.55},"right_outer":{"x":504.9333333333334,"y":252.93333333333337}},"eye":{"left_outer":{"x":364.11666666666673,"y":288.05},"left_top":{"x":378.70000000000005,"y":283.03333333333336},"left_bottom":{"x":378.46666666666664,"y":292.3666666666667},"left_inner":{"x":392.35,"y":287.7},"right_inner":{"x":448.81666666666666,"y":276.85},"right_top":{"x":465.73333333333335,"y":268.33333333333337},"right_bottom":{"x":466.4333333333334,"y":278.83333333333337},"right_outer":{"x":481.83333333333337,"y":273.1166666666667},"left_pupil":{"x":379.5166666666667,"y":287.1166666666667},"right_pupil":{"x":465.96666666666664,"y":273.23333333333335}},"nose":{"tip":{"x":412.3,"y":330.5166666666667},"root_left":{"x":402.73333333333335,"y":288.1666666666667},"root_right":{"x":426.53333333333336,"y":284.6666666666667},"left_alar_top":{"x":398.4166666666667,"y":318.73333333333335},"right_alar_top":{"x":434.81666666666666,"y":314.18333333333334},"left_alar_out_tip":{"x":393.98333333333335,"y":336.23333333333335},"right_alar_out_tip":{"x":447.8833333333333,"y":332.96666666666664}}}}]}},"categorization":{"google_tagging":{"status":"complete","data":[{"tag":"Forehead","confidence":0.9847},{"tag":"Chin","confidence":0.9663},{"tag":"Eyebrow","confidence":0.9385},{"tag":"Beard","confidence":0.9153},{"tag":"Neck","confidence":0.8837},{"tag":"Jaw","confidence":0.8816},{"tag":"Eyelash","confidence":0.8186},{"tag":"Facial hair","confidence":0.7816},{"tag":"Black hair","confidence":0.7808},{"tag":"Long hair","confidence":0.7517},{"tag":"Moustache","confidence":0.7333},{"tag":"Event","confidence":0.6689},{"tag":"No expression","confidence":0.6459},{"tag":"Visual arts","confidence":0.6367},{"tag":"Art","confidence":0.6005},{"tag":"Natural material","confidence":0.5916},{"tag":"Flesh","confidence":0.56},{"tag":"Hair care","confidence":0.5524},{"tag":"Room","confidence":0.5198},{"tag":"Portrait","confidence":0.513}]}}},"original_filename":"asd"}'
    setDetection(JSON.parse(foo))
    setSvgList(mapDetailsToSvg(detection))
  }, [])

  return (
    <div className='bg-slate-300 border-sky-100 border-solid grid gap-10'>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <SvgCanvas svgList={svgList} />
      <button onClick={() => setSvgList(mapDetailsToSvg(detection))}>
        Regenerar
      </button>
    </div>
  )
}
