import '../globals.css'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="max-w-7xl flex overflow-y-scroll -mt-32 bg-cyan-400/60 mx-auto">{children}</div>
  )
}
