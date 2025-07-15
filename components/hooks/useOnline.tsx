import { useState, useEffect } from "react";

function useOnline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);



    useEffect(()=>{
   const handleonline = () => setIsOnline(true)
   const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleonline)
    window.addEventListener('offline', handleOffline)

  return () => {
    window.removeEventListener('online', handleonline)
    window.removeEventListener('offline', handleOffline)
   }

    }, [])

    return isOnline;
  
}

export default useOnline;