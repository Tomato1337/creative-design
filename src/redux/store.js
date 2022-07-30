import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        counter: {
            reducer: (state = 0, action) => {
                if (action.type === 'counter/increment') {
                    return state + 1
                }
                return state
            },
        },
    },
})
