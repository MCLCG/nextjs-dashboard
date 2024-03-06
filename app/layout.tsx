import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// 根布局是必须的,被所有页面共享
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 通过添加到元素中，字体将应用于整个应用程序。 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
