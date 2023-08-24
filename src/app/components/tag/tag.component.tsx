export type TagProps = {
    title: string
    mode?: "warn"
}

export default function Tag({ title, mode }: TagProps) {
    return (
        mode === "warn"
            ? <div className="mx-1 my-1 md:my-0 px-3 rounded-full border border-red-600 cursor-default text-red-600">{title}</div>
            : <div className="mx-1 my-1 md:my-0 px-3 rounded-full border border-black cursor-default">{title}</div>
        
    )
}