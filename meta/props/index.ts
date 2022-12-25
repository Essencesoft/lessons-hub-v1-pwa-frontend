import {IUser} from "../auth";
import {LangDirection} from "../lang";

export interface MainLayoutProps extends IUser {
    langDirection: LangDirection
    locale: string
    children: any
}