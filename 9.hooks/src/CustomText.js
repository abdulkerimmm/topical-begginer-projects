import React, { memo } from 'react';

const CustomText=()=>{
    console.log('custom is working')
    return(
          <div>
            merhaba
          </div>
    )
}

export default  memo(CustomText);  