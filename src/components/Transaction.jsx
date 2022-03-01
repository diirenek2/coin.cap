export const Transaction = ({transacrtion}) => {
  return (
    <div className=" text-slate-300 bg-slate-800 p-4 m-1 rounded flex">
      <img src={transacrtion.coin.image} alt="" className="flex-shrink-0 h-5 w-5 rounded-full" />
      <span className="text-sm font-medium ml-3 w-1/6">{transacrtion.coin.name}</span>
      <span className="text-sm font-medium ml-3 w-1/6 uppercase text-slate-400">{transacrtion.type}</span>
      <span className="text-sm font-medium ml-3 w-1/6 uppercase text-slate-400">{transacrtion.type}</span>
    </div>
  )
}
