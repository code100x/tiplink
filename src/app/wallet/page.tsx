import { ContentSidebar } from "@/components/Wallet-content/ContentSidebar"
import { DetailsCard } from "@/components/Wallet-content/Wallet-details-card"


const page = () => {
  return (
    <div className="max-h-screen lg:grid lg:grid-cols-6 w-full border-2 border-zinc-300">
      <div className="col-span-1 lg:col-span-4 flex items-center justify-center mt-2" >
        <DetailsCard/>
      </div>
      <div className="flex items-center justify-center lg:col-span-2">
        <ContentSidebar/>
      </div>
     </div>
  )
}

export default page
