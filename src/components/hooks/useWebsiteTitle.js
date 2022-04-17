import React, { useEffect } from 'react';

const useWebsiteTitle=(title) => {
    useEffect( ()=> { 
        document.title = title;
    },[title]);
   
}
 
export default useWebsiteTitle;