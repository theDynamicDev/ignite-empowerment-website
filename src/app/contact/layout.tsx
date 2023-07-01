import '../globals.css'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="md:w-screen md:h-screen max-w-7xl flex md:mt-32 justify-center  relative bg-transparent-flame bg-fixed bg-center bg-cover bg-no-repeat">
      {children}
    </div>
  )
}
