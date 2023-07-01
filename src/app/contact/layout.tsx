import '../globals.css'

export default function Layout({children}: {children: React.ReactNode}) {
  return <div className="container relative bg-cyan-400/60 ">{children}</div>
}
