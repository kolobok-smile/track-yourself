import React, { ReactNode } from 'react'
type Props = {
    children: ReactNode
}
function TimerHeader({ children }: Props) {
  return (
    <div className='mt-10'>
      {children}
    </div>
  )
}

export default TimerHeader