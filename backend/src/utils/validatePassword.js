const validatePassword = (password) => {
    if (password.length < 8) {
        return "Password must contains atleast 8 characters"
    }
    if (!/[A-Z]/.test(password)) {
        return "Password must contain atleast one uppercase letter"
    }
    if (!/[a-z]/.test(password)) {
        return "Password must contains atleast one lowercase letter"
    }
    if (!/[0-9]/.test(password)) {
        return "Password must contains atleast one number"
    }
    if (!/[!@#$%^&*]/.test(password)) {
        return "Password must contains atleast one special character"
    }
    return null;
}

module.exports = validatePassword;