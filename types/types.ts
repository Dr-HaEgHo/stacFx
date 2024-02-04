
export interface emailInputProps {
    label: string,
    placeholder: string,
    type: string,
    setValue: Function,
}

export interface emailInputPropsFade {
    label: string,
    placeholder: string,
    type: string,
    setValue: Function,
    isDisabled: boolean
}

export interface searchInputProps {
    placeholder: string,
    type: string,
    setValue: Function,
}

export interface pwInputProps {
    label: string,
    placeholder: string,
    setValue: Function,
}

export interface dropDownProps {
    label: string,
    placeholder: string,
    type: string,
    data: {
        id: number,
        name: string,
    }[]
}

export interface sidebarLink {
    id: number,
    title: String,
    route: String,
}

export interface incubateeData {
    name: string,
    LGA: string,
    phoneNumber: number,
    status: string,
    date: string,
    time: string
}

export interface loginDetails {
    request: string,
    access: string
}