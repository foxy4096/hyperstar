import { AbsoluteCenter } from '@chakra-ui/react'
import { TailSpin } from 'react-loader-spinner'

function Loading() {
  return (
    <AbsoluteCenter>
        <TailSpin color='gray'/>
    </AbsoluteCenter>
  )
}

export default Loading