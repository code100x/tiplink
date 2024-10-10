import { Button } from "@/components/ui/button";


interface Bottom {
    fetchingQuote: boolean;
    receiveAmount: string
}
export const Bottom = ({fetchingQuote,receiveAmount}:Bottom) =>{
    return  <div className="space-y-2">
    <Button className="w-full" disabled={fetchingQuote || !receiveAmount}>
      {fetchingQuote ? "Fetching Price..." : "Confirm & Swap"}
    </Button>
  </div>
}