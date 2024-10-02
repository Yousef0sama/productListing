// imports

// interfaces

import { setState } from "@/interfaces/interfaces"

interface PaginatI {
  curr: number
  val : number,
  setCurr: setState<number>
}

export default function Paginat ({val, curr, setCurr} : PaginatI) {

  let className = `px-4 py-2 mx-1 text-black ${ curr === val && "border-[2px] border-solid border-main"}`

  return (
    <button
      type="button"
      className={className}
      onClick={() => setCurr(val)}
    >
      {val}
    </button>
  )
}