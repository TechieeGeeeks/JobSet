import React from 'react'

const NotFound = () => {
    return (
        <div>
            <div className='pb-32 h-screen flex flex-col items-center justify-center '><div className='font-extrabold text-[6rem] md:text-[10.5rem] text-lightPrimary'>Oops!</div>
                <div className='font-bold text-lg'>
                    404 - PAGE NOT FOUND
                </div>
                <div className='md:max-w-lg max-w-sm text-center text-sm mt-3 font-medium'>
                    The page you are looking for might have been removed had it's name changed or temporarily unavailable
                </div>
                <div>
                </div>
            </div>

        </div>
    )
}

export default NotFound