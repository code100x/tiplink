import { ActionType } from '../actions'

export interface TokenSwapProps {
  setCurrent: (action: ActionType | null) => void
}

export const Top = ({ setCurrent }: TokenSwapProps) => {
  return (
    <div className="flex justify-between items-center">
      <button
        className="text-sm font-medium text-gray-500 dark:text-gray-200"
        onClick={() => setCurrent(null)}
      >
        ← Back
      </button>
      <h2 className="text-2xl font-bold">Swap Tokens</h2>
      <div className="w-10" />
    </div>
  )
}
