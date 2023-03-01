import { ReactElement, useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { uploadImage } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'
import SvgCanvas from './SvgCanvas'
import { mapDetailsToSvg } from '../utils/mapDetailsToSvg'

export default function Dropper (): ReactElement {
  const { detection, setDetection } = useDetection()
  const [svgList, setSvgList] = useState<string[]>([])

  function handleDrop (droppedFile: any): void {
    uploadImage(droppedFile[0])
      .then((response) => setDetection(response))
      .then(() => {
        console.log('🚀 ~ file: Dropper.tsx:16 ~ .then ~ response:', detection)
        const foo = mapDetailsToSvg(detection)
        setSvgList(foo)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const foo = '{"asset_id":"d1fbe91bdf06d0c739577292d57a289d","public_id":"kzq4w6pwgzz5s04sxg7p","version":1677701978,"version_id":"fcce5717552902aca18b0473fc46ac80","signature":"66c6a04a3e9e302912de90347d7fbf2711656a76","width":527,"height":360,"format":"jpg","resource_type":"image","created_at":"2023-03-01T20:19:38Z","tags":["forehead","smile","chin","muscle","dress shirt","jaw","flash photography","neck","sleeve","beard","gesture","collar","happy","facial hair","eyelash","white-collar worker"],"bytes":55054,"type":"upload","etag":"454f7246ce7081756175fcf113cc71d1","placeholder":false,"url":"http://res.cloudinary.com/juanespinola/image/upload/v1677701978/kzq4w6pwgzz5s04sxg7p.jpg","secure_url":"https://res.cloudinary.com/juanespinola/image/upload/v1677701978/kzq4w6pwgzz5s04sxg7p.jpg","folder":"","access_mode":"public","info":{"detection":{"adv_face":{"status":"complete","data":[{"bounding_box":{"top":80.0,"left":203.0,"width":121.0,"height":121.0},"attributes":{"smile":1.0,"head_pose":{"pitch":-10.6,"roll":-0.5,"yaw":-4.0},"gender":"male","age":27.0,"facial_hair":{"moustache":0.6,"beard":0.4,"sideburns":0.4},"glasses":"NoGlasses","emotion":{"anger":0.0,"contempt":0.0,"disgust":0.0,"fear":0.0,"happiness":1.0,"neutral":0.0,"sadness":0.0,"surprise":0.0},"blur":{"blurLevel":"low","value":0.0},"exposure":{"exposureLevel":"overExposure","value":0.77},"noise":{"noiseLevel":"low","value":0.0},"makeup":{"eyeMakeup":true,"lipMakeup":true},"accessories":[],"occlusion":{"foreheadOccluded":false,"eyeOccluded":false,"mouthOccluded":false},"hair":{"bald":0.1,"invisible":false,"hairColor":[{"color":"brown","confidence":1.0},{"color":"red","confidence":0.89},{"color":"blond","confidence":0.32},{"color":"black","confidence":0.07},{"color":"other","confidence":0.04},{"color":"gray","confidence":0.03},{"color":"white","confidence":0.0}]}},"facial_landmarks":{"mouth":{"left":{"x":236.5,"y":166.1},"right":{"x":293.6,"y":165.0},"under_lip":{"bottom":{"x":263.6,"y":184.6},"top":{"x":263.0,"y":177.2}},"upper_lip":{"bottom":{"x":263.2,"y":168.4},"top":{"x":263.4,"y":163.6}}},"eyebrow":{"left_outer":{"x":211.5,"y":107.9},"left_inner":{"x":245.1,"y":102.2},"right_inner":{"x":276.5,"y":103.2},"right_outer":{"x":316.7,"y":108.3}},"eye":{"left_outer":{"x":227.3,"y":115.5},"left_top":{"x":235.9,"y":110.9},"left_bottom":{"x":235.3,"y":119.3},"left_inner":{"x":244.0,"y":116.3},"right_inner":{"x":281.8,"y":115.5},"right_top":{"x":290.7,"y":110.6},"right_bottom":{"x":291.7,"y":117.7},"right_outer":{"x":301.0,"y":114.0},"left_pupil":{"x":236.4,"y":114.4},"right_pupil":{"x":292.7,"y":113.4}},"nose":{"tip":{"x":259.3,"y":150.3},"root_left":{"x":254.1,"y":118.0},"root_right":{"x":270.7,"y":117.8},"left_alar_top":{"x":250.0,"y":139.3},"right_alar_top":{"x":273.8,"y":138.8},"left_alar_out_tip":{"x":243.2,"y":147.6},"right_alar_out_tip":{"x":281.0,"y":147.3}}}}]}},"categorization":{"google_tagging":{"status":"complete","data":[{"tag":"Forehead","confidence":0.9847},{"tag":"Smile","confidence":0.9835},{"tag":"Chin","confidence":0.9668},{"tag":"Muscle","confidence":0.9137},{"tag":"Dress shirt","confidence":0.9065},{"tag":"Jaw","confidence":0.8821},{"tag":"Flash photography","confidence":0.8798},{"tag":"Neck","confidence":0.8749},{"tag":"Sleeve","confidence":0.8724},{"tag":"Beard","confidence":0.8675},{"tag":"Gesture","confidence":0.8526},{"tag":"Collar","confidence":0.8378},{"tag":"Happy","confidence":0.834},{"tag":"Facial hair","confidence":0.7694},{"tag":"Eyelash","confidence":0.7409},{"tag":"White-collar worker","confidence":0.7288},{"tag":"Sitting","confidence":0.6892},{"tag":"Moustache","confidence":0.6878},{"tag":"Elbow","confidence":0.611},{"tag":"Portrait photography","confidence":0.6102},{"tag":"Fun","confidence":0.6068},{"tag":"Laugh","confidence":0.5757},{"tag":"Portrait","confidence":0.5676},{"tag":"Wrist","confidence":0.5514}]}}},"original_filename":"persona"}'
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
