import React from 'react';
import SideNav from '../ui/dashboard/sidenav';

// 在Next.js中使用Layout的一个好处是，在导航时，
// 只有页面组件会更新，而布局不会重新呈现。这称为部分渲染：
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
