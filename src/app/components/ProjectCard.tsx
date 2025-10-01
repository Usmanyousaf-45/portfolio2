import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center">
      <div className="w-40 h-40 relative mb-4">
        <Image
          src={image} 
          alt={title}
          fill   // responsive full fill karega
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 mt-2 text-center">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow hover:scale-105 transition"
      >
        View Project
      </a>
    </div>
  )
}

export default ProjectCard
