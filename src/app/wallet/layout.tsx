import { Sidebar } from "@/components/Sidebar/wallet-sidebar";


const WalletLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="pt-20 md:pt-24 max-w-screen mx-2">
        <div className="flex gap-x-7">
            <div className="w-64 shrink-0 hidden lg:block">
                    <Sidebar/>
            </div>
            {children}
            </div> 
      </main>
    );
  };
  
  export default WalletLayout;