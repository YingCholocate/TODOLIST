interface NumProps {
  num: number
}

const NumBox: React.FC<NumProps> = ({ num }) => {
  return (
    <div className="mt-2 border-2 border-slate-100 px-5 py-2 text-gray-400 hover:border-sky-200">
      <p>{num}</p>
    </div>
  )
}

export default NumBox
