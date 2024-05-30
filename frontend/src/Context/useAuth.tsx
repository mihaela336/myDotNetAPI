import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser:(email:string, username: string, password: string)=>void;
    loginUser:(username: string, password:string)=>void;
    logout:()=>void;
    isLoggedIn: ()=>boolean;
};

type Props = {children: React.ReactNode};

const UserContext = createContext<UserContextType>({}as UserContextType);

export const UserProvider = ({children}: Props)=>{
    const navigate= useNavigate(); //navigate to other pages of the app after login
    const [token, setToken]= useState<string|null>(null);
    const [user, setUser]= useState<UserProfile | null>(null);
    const [isReady, setIsReady]= useState(false);

    //get token everytime user loggs in
    useEffect(()=>{
        const user= localStorage.getItem("user"); //token stored in local storage (a  specific location on your device, depending on the browser and operating system you are using.)
        const token=localStorage.getItem("token");
        //check if values are set in local storage
        if(user&&token){
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"]="Bearer "+token;
        }
        setIsReady(true);
    },[]);

    //actual register function @_@
    const registerUser = async (email: string, username: string, password: string)=>{
        //reach into API endpoint
        await registerAPI (email, username, password).then((res)=>{
            if (res){
                localStorage.setItem("token", res.data.token);
                //create userObject to store in localStorage
                const userObj ={
                    userName: res?.data.username,
                    email: res?.data.email,
                }
                //set user object to localStorage (user will be stored as json)
                localStorage.setItem("user", JSON.stringify(userObj));

                setToken(res?.data.token!);
                setUser(userObj!);
                // if all goes through
                toast.success("login successfull!");
                navigate("/search"); //or home or whatever
            }
        }).catch((e)=>toast.warning("Server error occured)"));

    };

        //actual login function @_@
        const loginUser = async (username: string, password: string)=>{
            //reach into API endpoint

        //TODO:replace username with email
            await loginAPI (username, password).then((res)=>{
                if (res){
                    localStorage.setItem("token", res.data.token);
                    //create userObject to store in localStorage
                    const userObj ={
                        userName: res?.data.username,
                        email: res?.data.email,
                    }
                    //set user object to localStorage (user will be stored as json)
                    localStorage.setItem("user", JSON.stringify(userObj));
    
                    setToken(res?.data.token!);
                    setUser(userObj!);
                    // if all goes through
                    toast.success("login successfull!");
                    navigate("/search"); //or home or whatever
                }
            }).catch((e)=>toast.warning("Server error occured)"));
    
        };

        //check if user is logged in
        const isLoggedIn = ()=>{
            return !!user;
        };

        const logout = ()=>{
            //clear data from local storage on logout
            localStorage.storage.reomveItem("token");
            localStorage.storage.reomveItem("user");
            setUser(null);
            setToken("");
            navigate("/");
        }

        return(
            //used isReady because there is a lot of async code
            <UserContext.Provider value={{loginUser, user, token, logout, isLoggedIn, registerUser}}
            >

                {isReady? children:null}
                </UserContext.Provider>
        )
};

export const useAuth=()=>React.useContext(UserContext);