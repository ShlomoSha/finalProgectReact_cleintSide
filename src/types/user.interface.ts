export interface Weapon {
    name: string
    amount: number
    intercepts?: string[]
    speed?: number
}

export interface Action {
    id: string
    rocket: string
    status: string
}

interface IUser {
    username: string
    password: string
    organization: string
    location?: string
    ammo: Weapon[]
    action?: Action[]    
}

export default IUser