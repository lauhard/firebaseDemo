export interface UserRecord {
    uid:string | null,
    errorInfo: string | null,
    created:boolean,
    customToken?:string | null,
}