import React from "react"
import Spinner from "./Spinner"
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const { loading, data, error } = useQuery(GET_PROJECTS)

  if (loading) return <Spinner />

  if (error) return <p>Something Went Wrong</p>

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  )
}

export default Projects
