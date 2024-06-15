interface InputProps {
    type: string
    placeholder: string
    value: string
    setValue: (value: string) => void
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, setValue }) => {
    return <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} className="w-full h-[66px] border-[1px] border-[#EAEAEA] rounded-lg p-[24px]" type={type} placeholder={placeholder} />
    </div>
}

export default Input