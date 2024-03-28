import { createSlice } from "@reduxjs/toolkit";


const company = createSlice({
    name:'company',
    initialState:{
        info:{companyName:"manGrow",
                Email:'info@mangrow.in',
                phone:'7907 441 232'}
    }
})


export default company.reducer