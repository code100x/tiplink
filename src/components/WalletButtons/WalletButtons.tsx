
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Box } from '@chakra-ui/react';
import SendMoney from './SendMoney';
import Activity from './Activity';


const WalletButtons = () => { 

    return (
        <div className = 'flex justify-center pb-3'>
            <div className = 'flex-justify-center bg-slate-50 css-0 w-1/2 rounded-lg'>
                <Tabs className = 'p-4' variant="line" aria-orientation="horizontal" colorScheme='blue' size='md'>
                        <TabList>
                            <HStack spacing={10}>
                                <Tab>Tokens</Tab>
                                <Tab>NFTs</Tab> 
                                <Tab>Activity</Tab>
                            </HStack>
                        </TabList>
                        <hr></hr>
                    <TabPanels>
                        <TabPanel>
                            <SendMoney />
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                        <TabPanel>
                            <Activity />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
        
    )
}

export default WalletButtons;