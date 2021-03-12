export const validatePhoneNumber = (phoneNumberString) => {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!phoneNumberString) {
        return null
    } else if (phoneNumberString.match(phoneno)) {
        return phoneNumberString
    }
    return null
}

export const validateEmail = (email) => {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!email) return null
    const check = re.test(String(email).toLowerCase())

    if (check) {
        return email
    } else {
        return null
    }
}