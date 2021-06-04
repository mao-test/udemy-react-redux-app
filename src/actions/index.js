export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//Action Creater (Actionを返す)
//returnは省略
export const increment = () => ({
        type: 'INCREMENT'
    })

export const decrement = () => ({
        type: 'DECREMENT'
    })
