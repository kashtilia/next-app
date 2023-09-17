export {default} from "next-auth/middleware";

export const config = {
    // * - zero or more parameters
    // + - one or more parameters
    // ? - zero or one parameters
    // {n} - exactly n parameters
    // {n,} - at least n parameters
    // {n,m} - between n and m parameters
    // {n,m}? - between n and m parameters
    // {n,m}+ - at least n and at most m parameters
    // {n,m}?+ - at least n and at most m parameters
    // {n,m}* - at least n and at most m parameters
    // {n,m}+* - at least n and at most m parameters
    // {n,m}?? - at least n and at most m parameters
    // {n,m}+?? - at least n and at most m parameters
    // {n,m}*?? - at least n and at most m parameters
    matcher: [
        '/dashboard/:path*'
    ]
}