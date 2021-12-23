 import { getToken } from "next-auth/jwt"
 import { NextResponse, NextRequest } from "next/server"
 import { toast } from 'react-toastify';
// import { NextApiRequest, NextApiResponse } from 'next'

export async function middleware(req:NextRequest) {

    //console.log("dddddddddd------------ddddddddddddddddd Middle Ware", req);
    //return NextResponse.redirect("/api/auth/signin");
//   if (req.nextUrl.pathname === "/middleware-protected") {
//     const session = await getToken({
//       req,
//       secret: process.env.SECRET,
//       secureCookie:
//         process.env.NEXTAUTH_URL?.startsWith("https://") ??
//         !!process.env.VERCEL_URL,
//     })
//     // You could also check for any property on the session object,
//     // like role === "admin" or name === "John Doe", etc.
//     if (!session) return NextResponse.redirect("/api/auth/signin")

//     // If user is authenticated, continue.
//   }
}