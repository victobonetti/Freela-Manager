export default function TextInput({ set, value, name, id, style, label, err }: { set: (value: React.SetStateAction<string>) => void, value?: string, name: string, id: string, style?: string, label?: string, err?: string }) {
    return (
        <>
            <label className="text-xs font-semibold text-slate-400" htmlFor={id}>{label}</label>
            <input value={value} autoComplete="none" onChange={e => set(e.target.value)} className={`${style} mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline`} type="text" name={name} id={id} />
            <span className=" mb-2 text-xs text-red-500">{err}</span>
        </>
    )
}