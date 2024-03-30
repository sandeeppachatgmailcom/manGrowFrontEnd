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
                startYear:2002,
                endYear:2003,
                mark:55,
                institute:'GVHSS Calicut'
            },{
                Type:'+2',
                startYear:2003,
                endYear:2005,
                mark:70,
                institute:'GVHSS Calicut'
            },{
                Type:'Diploma in computer Science',
                startYear:2005,
                endYear:2009,
                mark:60,
                institute:'Institute electronics and telecommunication engineers- New delhi '
            }],
            experiance:[{
                jobId:'00001',
                organaisation:'SoftwareAssociates',
                startYear:2005,
                endYear:2010,
                role:'Junior Developer '
            },{
                jobId:'00002',
                organaisation:'TIME4Education',
                startYear:2009,
                endYear:2011,
                role:'Admin Executive  '
            },{
                jobId:'00001',
                organaisation:'SoftwareAssociates',
                startYear:2005,
                endYear:2010,
                role:'Junior Developer '
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
                houseName: 'Pachat',
                streetName: 'Thekkum Kaimeethal ',
                city: 'Kottooli',
                pincode: '673016',
                mob: '+91 7907 441 232',
                email: 'sandeeppachat@gmail.com',
                web: 'sandeeppachat.in',
                profileImage: 'public/image/banner_6.jpg',
                academics:[{
                    courseId:'00001',
                    Type:'SSLC',
                    startYear:2002,
                    endYear:2003,
                    mark:55,
                    institute:'GVHSS Calicut'
                },{
                    courseId:'00002',
                    Type:'+2',
                    startYear:2003,
                    endYear:2005,
                    mark:70,
                    institute:'GVHSS Calicut'
                },{
                    courseId:'00003',
                    Type:'Diploma in computer Science',
                    startYear:2005,
                    endYear:2009,
                    mark:60,
                    institute:'Institute electronics and telecommunication engineers- New delhi '
                }],
                experiance:[{
                    jobId:'00001',
                    organaisation:'SoftwareAssociates',
                    startYear:2005,
                    endYear:2010,
                    role:'Junior Developer '
                },{
                    jobId:'00002',
                    organaisation:'TIME4Education',
                    startYear:2009,
                    endYear:2011,
                    role:'Admin Executive  '
                },{
                    jobId:'00001',
                    organaisation:'SoftwareAssociates',
                    startYear:2005,
                    endYear:2010,
                    role:'Junior Developer '
                }]
     
            }   
        },
        saveUser:(state,actions)=>{
            state.user= actions.payload
        }
    }
})

export const  {login,logout,saveUser} = activeUser.actions
export default activeUser.reducer
