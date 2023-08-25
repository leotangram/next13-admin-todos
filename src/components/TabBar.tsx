'use client'

import { FC, useState } from 'react'

interface TabBarProps {
  currentTab?: number
  tabOptions?: number[]
}

export const TabBar: FC<TabBarProps> = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4]
}) => {
  const [selected, setSelected] = useState(currentTab)

  const onTabSelected = (selectedTab: number) => {
    setSelected(selectedTab)
  }

  return (
    <div
      className={`grid grid-cols-${tabOptions.length} w-full space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabOptions.map(tab => (
        <div key={tab}>
          <input
            checked={selected === tab}
            type="radio"
            id={tab.toString()}
            className="peer hidden"
            onChange={() => {}}
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  )
}
