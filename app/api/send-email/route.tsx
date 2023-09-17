import {Resend} from "resend";
import {NextRequest, NextResponse} from "next/server";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

// Нужно создать экземпляр класса Resend для отправки
// И использовать API ключ отправки
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    // await resend.emails.send({
    //     from: '...',
    //     to: 'kashtilia@gmail.com',
    //     subject: '...',
    //     react: <WelcomeTemplate name="Ilia" />
    // });

    return NextResponse.json({});
}