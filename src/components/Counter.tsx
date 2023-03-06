import { useCountdown } from '../hooks/useCountdown'

const INITIAL_COUNTDOWN_DATE = new Date(2023, 2, 7, 14, 0, 0, 0)
const INTERVAL_COUNTDOWN = 60

export default function Counter () {
  const { days, hours, minutes, seconds } = useCountdown(INITIAL_COUNTDOWN_DATE, INTERVAL_COUNTDOWN)

  return (
    <div className='grid grid-flow-col gap-5 text-center auto-cols-max'>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': days }} />
        </span>
        days
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': hours }} />
        </span>
        hours
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': minutes }} />
        </span>
        min
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': seconds }} />
        </span>
        sec
      </div>
    </div>
  )
}
