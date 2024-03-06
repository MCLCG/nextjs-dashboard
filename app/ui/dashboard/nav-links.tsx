'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  // 注意usePathname只是工作在客户端,
  // 所以要加上use client
  const pathname = usePathname();

  console.log(pathname);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // a 和Link的区别a会每次导航刷新整个页面,
          // link是客户端导航,不会刷新整个页面
          // 所以如果某个页面抛出错误，应用程序的其余部分仍将正常工作。
          // 组件出现在浏览器的视口中时
          //Next.js 都会在后台自动预取链接路由的代码。
          //当用户单击链接时，目标页面的代码已经在后台加载，
          // 这就是使页面转换近乎即时的原因！
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
