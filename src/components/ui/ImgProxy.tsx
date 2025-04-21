

import { LogOutIcon } from 'lucide-react'
import { useState } from 'react'
import { LoaderIcon } from 'react-hot-toast'
interface ImgProxyProps {
  src?: string
  css?: string
  alt?: string
}

const ImgProxy: React.FC<ImgProxyProps> = ({ src, css, alt }) => {
  const [isError, setIsError] = useState(false)

  if (!src) return <LogOutIcon />

  if (src.includes('undefined')) return <LogOutIcon/>

  return isError ? (
    <LogOutIcon />
  ) : (
    <img
      src={import.meta.env.VITE_API_URL+`/api/proxy-image?url=${encodeURIComponent(src)}`}
      alt={alt}
      className={css + ' rounded-full object-cover'}
      onErrorCapture={() => setIsError(true)}
      onLoad={() => <LoaderIcon className={css} />}
    />
  )
}

export default ImgProxy