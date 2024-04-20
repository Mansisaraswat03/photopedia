import Image from "next/image";

export default function AuthLayout({ children }) {
    return (
      <main>
      <header className="w-full sticky top-0 h-18 shadow z-40 bg-white">
             <Image 
               src={'/assets/1.png'}
               width={190}
               height={64}
               alt='logo'
               className="mx-auto flex justify-center items-center h-full"
             />
        </header>
        {children}
      </main>
    );
  }