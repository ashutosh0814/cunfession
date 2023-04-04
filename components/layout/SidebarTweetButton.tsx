import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router"
import { useCallback } from "react";
import {FiNavigation} from 'react-icons/fi'

const SidebarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    },[]);

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full flex items-center justify-center bg-sky-500 h-14 w-14 p-4 hover:bg-opacity-80 cursor-pointer ">
         <FiNavigation size={24} color="white"/>
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-70 cursor-pointer transition">
         <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
            Cunfess
         </p>
      </div>
    </div>
  )
}

export default SidebarTweetButton