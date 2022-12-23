export interface IUserSession {
    userLoggedIn: boolean
    token?: string
}

export interface IUser {
    user: {
        session: IUserSession
    }
}