import Image from 'next/image'
import Link from 'next/link'
import { Work } from '../data/works'

interface Props {
  work: Work
}

const WorkCard: React.FC<Props> = ({ work }) => {
  return (
    <Link href={`/work/${work.slug}`}>
      <div className="cursor-pointer group relative">
        <Image
          src={work.image}
          alt={work.title}
          width={500}
          height={350}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">
            {work.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default WorkCard
