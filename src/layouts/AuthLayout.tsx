import { Outlet } from "react-router-dom"
import { Toaster } from 'sonner'

export const AuthLayout = () => {
    return (
        <>
            <div className='bg-slate-800 min-h-screen'>
                <div className='max-w-lg mx-auto pt-10 px-5'>
                    <img src="/logo.svg" alt="logotipo-devtree" />
                    <div className='p-10'>
                        <Outlet />

                    </div>
                </div>

            </div>
            <Toaster position="top-right" />


        </>
    )
}
