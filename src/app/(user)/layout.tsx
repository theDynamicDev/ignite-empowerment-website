import '../globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">{children}</body>
    </html>
  )
}
