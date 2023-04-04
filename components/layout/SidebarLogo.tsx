import {useRouter} from "next/router"

const SidebarLogo = () => {
    const router = useRouter();

  return (
    <div onClick={() => router.push('/')}  className="rounded-full h-14 w-14 p-4 text-blue-300 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition text-xl ">
       <span className="text-red-500 font-semibold">CU</span>nfession
    </div>
  )
}

export default SidebarLogo