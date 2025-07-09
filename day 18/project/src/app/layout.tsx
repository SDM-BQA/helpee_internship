import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex justify-center items-center min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
