import { createSlice } from "@reduxjs/toolkit";

const activeUser = createSlice({
    name: 'activeUser',
    initialState: {
        user: {
            name: 'Sandeep',
            HouseName:'Pachat',
            streetName:'Thekkum Kaimeethal ',
            city :'Kottooli',
            pincode:'673016',
            mob:'+91 7907 441 232',
            email:'sandeeppachat@gmail.com',
            web:'sandeeppachat.in',
            profileImage:'public/image/banner_6.jpg'

        }   
    },
    reducers: {
        logout: (state) => {
            state.user = {}
        },
        login: (state) => {
            state.user = {
                name: 'Sandeep',
                HouseName:'Pachat',
                streetName:'Thekkum Kaimeethal ',
                city :'Kottooli',
                pincode:'673016',
                mob:'+91 7907 441 232',
                email:'sandeeppachat@gmail.com',
                web:'sandeeppachat.in',
                profileImage:'public/image/banner_6.jpg'
            }   
        }
    }
})

export const  {login,logout} = activeUser.actions
export default activeUser.reducer
