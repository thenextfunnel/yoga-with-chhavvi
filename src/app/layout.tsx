import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Yoga With Chhavvi",
  description: "Find your balance and harmony through yoga with Chhavvi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {/* ✅ Global Header (fixed across all pages) */}
        <Header />

        {/* ✅ Main content area */}
        <main className="pt-[100px]"> 
          {/* Add top padding equal to header height so content doesn’t hide under it */}
          {children}
        </main>
      </body>
    </html>
  );
}
