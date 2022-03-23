import CryptoJS from 'crypto-js'

export const createToken = (text) => {
    const pass = "pass@w0rd@12_3"
    if(typeof text === "object"){
        text = JSON.stringify(text)
    }
    return CryptoJS.AES.encrypt(text, pass).toString()
}

export const verifyToken = (ciphertext) => {
    const pass = "pass@w0rd@12_3"
    const bytes = CryptoJS.AES.decrypt(ciphertext, pass)
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    return originalText
}