type PillProps = {
    text: string;
}

export default function Pill({text}: PillProps){
    return <span className="text-xs px-2 py-1 rounded-full bg-green-900 dark:bg-green-700 opacity-70 text-white shadow-sm">{text}</span>
}