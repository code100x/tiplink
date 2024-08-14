'use client'
import { SidebarItems, SidebarItemsBottom } from '@/components/items'
import { SideButton } from '@/components/sidebar-button'

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-2 h-[750px] justify-between md-1 mx-6 mt-6 pt-4">
      <div>
      {SidebarItems.map((items) => (
        <SideButton
          key={items.label}
          label={items.label}
          href={items.href}
          LucidIcon={items.LucidIcon}
          target={items.target}
        />
      ))}
      </div>
      <div className=''>
      {
        SidebarItemsBottom.map((items)=>(
          <SideButton
          key={items.label}
          label={items.label}
          href={items.href}
          LucidIcon={items.LucidIcon}
          target={items.target}
          />
        ))
      }
      </div>
    </div>
  )
}
