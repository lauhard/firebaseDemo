export const getCredentialsFromFormData = (formData: FormData) => {
    return {
        email: formData.get("email")?.toString() || "",
        password: formData.get("password")?.toString() || "",
    }
}

export const getDisplayNameFromFormData = (formData: FormData) => {
    return `${formData.get("firstname")} ${formData.get("lastname")}`;
}