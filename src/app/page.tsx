import Project, { ProjectProps } from './components/project/project.component'
import { join } from "path"
import { readFileSync } from "fs"

const projects: ProjectProps[] = JSON.parse(readFileSync(join(process.cwd(), "./data/projects.json"), "utf-8"))

export default function Home() {
  const projectElements: JSX.Element[] = []
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i]

    projectElements.push(<Project key={`project-T${i}`} {...project}></Project>)
  }

  return (
    <main className="min-h-screen flex justify-center items-start">
      <img className="fixed opacity-20 -z-10 -inset-x-40 md:-inset-x-96" src="./dodo.png"></img>
      <div className="flex flex-col items-center justify-between p-10 max-w-sm md:p-24 md:max-w-screen-md typewriter">
        <h1 className="text-2xl md:text-4xl">Wyn&apos;s Portfolio</h1>
        <p className="my-10">Welcome to the home page of my portfolio. Here I list links and descriptions of my portfolio projects for easy access and understanding, most of which are available on <a href="https://github.com/Casinha" target="_blank">Github</a>. <br /><br /> This site - which I have built with a simple, almost minimalist aesthetic reminiscent of typewritten documents or restaurant menus in mind - was built using Next.JS, with some input from copilot.<br/><br/>If you are interested, feel free to get in touch with me via <a href="mailto: wyndb@hotmail.com">email</a>.</p>
        {projectElements}
      </div>
    </main>
  )
}
