import '../globals.css'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative mask bg-transparent-flame bg-cover bg-center ">
      <div className="flex flex-col items-center justify-center z-30">{children}</div>
    </div>
  )
}
