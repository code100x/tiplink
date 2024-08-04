'use client'

import { AppProgressBar as ProgressBar} from "next-nprogress-bar"

export default function TopProgressBar() {
  return <ProgressBar
    height="4px"
    color="#006399"
    options={{ showSpinner: false }}
    shallowRouting
  />
}
