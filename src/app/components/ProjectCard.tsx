import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center transform hover:-translate-y-2 duration-300">
      {/* Image */}
      <div className="w-40 h-40 relative mb-4 rounded-xl overflow-hidden">
        <Image
          src={image} 
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 40vw, 20vw"
        />
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-center">{title}</h3>
      <p className="text-gray-600 mt-2 text-center">{description}</p>

      {/* Link Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-2 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        View Project
      </a>
    </div>
  )
}

export default ProjectCard
