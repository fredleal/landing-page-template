// Mock for next/image - used in saas-components but not needed in Vite
// Returns a simple object that can be imported without errors

export default function Image(props: any) {
  const { src, alt, ...rest } = props
  return `<img src="${src}" alt="${alt}" />`
}

export const getImageProps = (props: any) => ({
  src: props.src,
  alt: props.alt,
})
