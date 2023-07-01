import '../globals.css'

export default function Layout({children}: {children: React.ReactNode}) {
  return <div className="max-w-full bg-cyan-400/60 my-auto mx-auto">{children}</div>
}
