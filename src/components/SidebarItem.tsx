'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiBookmarkCheck } from 'react-icons/ci'

interface SidebarItemProps {
  icon: React.ReactNode
  path: string
  title: string
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  path,
  title
}) => {
  const pathName = usePathname()

  {
    /* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */
  }
  return (
    <li>
      <Link
        href={path}
        className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
        ${
          path === pathName
            ? ' text-white bg-gradient-to-r from-sky-600 to-cyan-400'
            : ''
        }`}
      >
        {icon}
        <span className="group-hover:text-white-700">{title}</span>
      </Link>
    </li>
  )
}
