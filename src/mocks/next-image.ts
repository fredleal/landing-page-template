// Mock for next/image - used in saas-components but not needed in Vite
// Returns a simple object that can be imported without errors

interface ImageProps {
  src: string
  alt: string
  [key: string]: unknown
}

export default function Image(props: ImageProps) {
  const { src, alt } = props
  return `<img src="${src}" alt="${alt}" />`
}

export const getImageProps = (props: ImageProps) => ({
  src: props.src,
  alt: props.alt,
})
