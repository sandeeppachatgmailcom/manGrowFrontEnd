import { createSlice } from "@reduxjs/toolkit";

const activeUser = createSlice({
    name: 'activeUser',
    initialState: {
        user: {
            name: 'Sandeep Pachat',
            houseName: 'Pachat',
            streetName: 'Thekkum Kaimeethal ',
            city: 'Kottooli',
            pincode: '673016',
            mob: '+91 7907 441 232',
            email: 'sandeeppachat@gmail.com',
            web: 'sandeeppachat.in',
            profileImage: 'public/image/banner_6.jpg',
            academics:[{
                Type:'SSLC',
                year:2005,
                mark:70,
                institute:'GVHSS Calicut'
            },{
                Type:'+2',
                year:2005,
                mark:70,
                institute:'GVHSS Calicut'
            }]
        }   
    },
    reducers: {
        logout: (state) => {
            state.user = {}
        },
        login: (state) => {
            state.user = {
                name: 'Sandeep Pachat',
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
        saveUser:(state,actions)=>{
            state.user= actions.payload
        }
    }
})

export const  {login,logout,saveUser} = activeUser.actions
export default activeUser.reducer
