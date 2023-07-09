import { useEffect } from 'react'

interface Props {
  enterKeyCallback?: () => void
  escapeKeyCallback?: () => void
}

const useKeyListen = ({
  enterKeyCallback, escapeKeyCallback
}: Props): void => {
  useEffect(() => {
    const callBackIsValid: boolean = typeof enterKeyCallback === 'function'
    let listener: (event: { code: string, preventDefault: () => void }) => void
    if (callBackIsValid) {
      listener = (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          event.preventDefault()
          enterKeyCallback?.()
        }
      }

      document.addEventListener('keydown', listener)
    }
    return () => {
      if (callBackIsValid) document.removeEventListener('keydown', listener)
    }
  }, [enterKeyCallback])
}

export default useKeyListen
