import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import activeUser from "./activeUser";
import companyInfo from "./companyInfo";


const appStore = configureStore({
    reducer:{
        theme:themeSlice,
        activeUser:activeUser,
        company:companyInfo
    }
})

export default appStore