import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from '../app/store'
import { StoredQuotesType } from '../types/types';

//#region  dummy  starting quotes
const quotes: StoredQuotesType[] = [
    // {
    //     quote: "Per fare arte, bisogna voltare le spalle alla vita.",
    //     title: "Follia",
    //     author: "Patrick McGrath"
    // },
    // {
    //     quote: "A lie can travel halfway around the world while the truth is putting on its shoes",
    //     title: "Unknown",
    //     author: "Mark Twain"
    // },
    // {
    //     quote: "If you have a garden and a library, you have everything you need",
    //     title: "sherhesrher",
    //     author: "Marcus Tullius Cicero"
    // },
    // {
    //     quote: "Truth comes out in wine",
    //     title: "Unknown",
    //     author: "Pliny the Elder"
    // },
]
//#endregion
const InitialQuoteState: StoredQuotesType[] = quotes;

export const mainSlice = createSlice({
    name: 'Quotes',
    initialState: InitialQuoteState,
    reducers: {
        addQuote: (state, action: PayloadAction<StoredQuotesType>) => {
            console.log(action.payload)
            return [...state, action.payload]
        }
    },
})

export const { addQuote } = mainSlice.actions
export default mainSlice.reducer