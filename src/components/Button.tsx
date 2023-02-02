import { Children } from "react"

export const Button = ({ onClick, children }: any) => {
  return (
    <button className='px-4 py-2 bg-sky-600 mx-1 border-solid rounded border-gray-400 text-white' onClick={onClick}>{ children }</button>
  )
}
