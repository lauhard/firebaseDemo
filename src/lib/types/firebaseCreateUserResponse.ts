export interface FirebaseCreateUserResponse {
    uid:string | null,
    errorInfo: string | null,
    created:boolean,
    customToken?:string | null,
}