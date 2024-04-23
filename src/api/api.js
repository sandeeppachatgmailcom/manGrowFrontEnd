

export const userApi = {
    signUp:'/auth/create',
    login:'/auth/login',
    getlogin:'/auth/getlogin',
    validateOtp:'/auth/validateOtp',
    resetPasswordwithOtp:'/auth/resetPassword',
    saveBasicProfile:'/auth/saveBasicInfo',
    forgotPassword:'/auth/forgotPassword'
}

export const publicApi = {
    getPincode:'https://api.postalpincode.in/pincode/'
}

export const adminApis={
    listAllstaffpendingApprovals:'/admin/listpendingStaff',
    approveStaff:'/admin/approveStaff'
}

export const utilityApis ={
    listAllBatches:'/utils/listBatches',
    
}