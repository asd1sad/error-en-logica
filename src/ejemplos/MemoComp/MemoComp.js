import React from 'react'


export const MemoComp = React.memo(() => {

    // console.log('Me renderice')

    return (
        <div>
            <h4>Soy un Memo {':D'}</h4>
        </div>
    )
})