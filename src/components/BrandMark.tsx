import brandMark from '../assets/brand-mark.svg'

type BrandMarkProps = {
  alt: string
}

export function BrandMark({ alt }: BrandMarkProps) {
  return <img className="brand-mark" src={brandMark} alt={alt} width="44" height="44" />
}
