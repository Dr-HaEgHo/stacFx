import React from "react";

export interface emailInputProps {
    label: string,
    placeholder: string,
    type: string,
    setValue: Function,
}

export interface emailInputPropsFade {
    id: string
    label: string,
    placeholder: string,
    type: string,
    setValue?: Function,
    value: any,
    error?: string | undefined;
    isDisabled: boolean;
    touched: boolean | undefined;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    blur: React.FocusEventHandler<HTMLInputElement> | undefined
}

export interface pwInputProps {
    id: string
    label: string,
    placeholder: string,
    setValue?: Function,
    value: any,
    error?: string | undefined;
    isDisabled: boolean;
    touched: boolean | undefined;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    blur: React.FocusEventHandler<HTMLInputElement> | undefined
}

export interface searchInputProps{
    placeholder: string;
    type: string;
    setValue: Function
}

export interface dropDownProps {
    label: string,
    placeholder: string,
    type: string,
    data: { 
        id: number,
        name: string,
    }[],
    setValue: Function
}


export interface dropDownPropsFade {
    label: string,
    placeholder: string,
    type: string,
    data: any,
    setValue: Function,
    value: any,
    error?:string
}

export interface sidebarLink {
    id: number,
    title: String,
    route: String,
}

export interface incubateeData{
    name: string,
    LGA: string,
    phoneNumber: number,
    status: string,
    date: string,
    time: string
}

export interface loginDetails{
    request: string,
    access: string
}

export interface fileUploadProps{
    label: string,
    setSelectedImage: Function
}

export interface fetchType {
    method: string,
    url: string,
    // headers?: {}
}

export interface signUpType{
    firstname: string;
    lastname: string
    email: string;
    password: string;
    confirmPassword: string;
}

export interface loginType{
    email: string;
    password: string;
    confirmPassword: string;
}
