import Link from 'next/link'
import { useAppProvider } from '../../context-providers/AppProvider';

interface SidebarLinkProps {
  children: React.ReactNode
  href: string
  active:boolean;
}

export default function SidebarLink({
  children,
  href,
  active
}: SidebarLinkProps) {
  const { setSidebarOpen } = useAppProvider()  
  
  return (
    <Link className={`block text-gray-800 dark:text-gray-100 transition truncate ${active ? 'group-[.is-link-group]:text-indigo-500' : 'hover:text-gray-900 dark:hover:text-white group-[.is-link-group]:text-gray-500/90 dark:group-[.is-link-group]:text-gray-400 hover:group-[.is-link-group]:text-gray-700 dark:hover:group-[.is-link-group]:text-gray-200'}`} href={href} onClick={() => setSidebarOpen(false)}>
      {children}
    </Link>
  )
}
