import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
function TimerContent({ children }: Props) {
  return (
    <div className="mt-10">
      { children }
    </div>
  )
}

export default TimerContent