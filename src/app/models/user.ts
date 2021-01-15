import { post } from "./post";

export interface user{
    uid:string,
    email:string,
    name:string,
    posts:post[]
}