'use client'
import { ContentSidebarItems, ContentSidebarItemsBottom } from '@/components/items'
import { DataCard } from '@/components/sidebar-button'

export const ContentSidebar = () => {
  return (
    <div className="flex flex-col gap-y-2 lg:w-[300px] h-[750px] justify-between w-[450px] md-1 mx-6 mt-6 pt-4 bg-zinc-900 rounded-2xl mb-6">
      <div>
        {ContentSidebarItems.map((items) => (
          <DataCard
            key={items.label}
            label={items.label}
            href={items.href}
            LucidIcon={items.LucidIcon}
            target={items.target}
          />
        ))}
      </div>
      <div className="">
        {ContentSidebarItemsBottom.map((items) => (
          <DataCard
            key={items.label}
            label={items.label}
            href={items.href}
            LucidIcon={items.LucidIcon}
            target={items.target}
          />
        ))}
      </div>
    </div>
  )
}
