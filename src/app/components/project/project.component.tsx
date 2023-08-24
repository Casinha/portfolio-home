import Tag, { TagProps } from "../tag/tag.component"

export type ProjectProps = {
    title: string
    codeURL: string
    demoURL?: string
    description: string
    tags: TagProps[]
}

export default function project({ title, codeURL, demoURL, description, tags }: ProjectProps) {
    const tagElements: JSX.Element[] = []

    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        tagElements.push(<Tag key={`tag-T${i}`} {...tag}></Tag>)
    }

    const demo = demoURL ? ( <a href={demoURL} target="_blank">Demo</a>) : null
    const titleElement = demo 
        ? <h2 className="text-xl md:text-2xl">{title} - <a href={codeURL} target="_blank">Code</a> / {demo}</h2>
        : <h2 className="text-xl md:text-2xl">{title} - <a href={codeURL} target="_blank">Code</a></h2>

    return (
        <div className="min-w-full my-10">
            {titleElement}
            <p className="my-10">{description}</p>
            <div className="flex flex-wrap">
                {tagElements}
            </div>
        </div>
    )
}