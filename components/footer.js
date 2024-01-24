'use client'
import { usePathname } from "next/navigation";


export default function Footer() {
    const pathname = usePathname()
    if (pathname !== '/studio/structure') {
        return (

            <div>
              
              Footer</div>
          
            )
    }

}
