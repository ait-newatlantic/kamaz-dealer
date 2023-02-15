import { IconFacebook } from 'components/icons/components/IconFacebook';
import { IconTiktok } from 'components/icons/components/IconTiktok';
import { IconYoutube } from 'components/icons/components/IconYoutube';
import { IconZalo } from 'components/icons/components/IconZalo';

export function ContactBar() {
    return (
        <div className="bg-blue-700 flex flex-col lg:flex-row justify-between items-center px-10">
            <div className="lg:flex lg:space-x-2 text-center">
                <p className="text-white text-sm font-semibold">
                    HOTLINE: {process.env.NEXT_PUBLIC_PHONE_NUMBER} (Mr.{' '}
                    {process.env.NEXT_PUBLIC_USER_NAME})
                </p>
                <p className="text-white text-sm font-semibold">
                    EMAIL: {process.env.NEXT_PUBLIC_USER_EMAIL}
                </p>
            </div>
            <div className="flex item-center space-x-4 text-sm text-white h-10">
                <a
                    href={process.env.NEXT_PUBLIC_ZALO}
                    target="_blank"
                    className="flex items-center hover:bg-slate-300 hover:text-blue-800 cursor-pointer space-x-1"
                    rel="noreferrer"
                >
                    <IconZalo className="h-6 w-6" />
                    <span>Zalo</span>
                </a>
                <a
                    href={process.env.NEXT_PUBLIC_FACEBOOK}
                    target="_blank"
                    className="flex items-center hover:bg-slate-300 hover:text-blue-800 cursor-pointer space-x-1"
                    rel="noreferrer"
                >
                    <IconFacebook className="h-6 w-6" />
                    <span>Facebook</span>
                </a>
                <a
                    href={process.env.NEXT_PUBLIC_YOUTUBE}
                    target="_blank"
                    className="flex items-center hover:bg-slate-300 hover:text-blue-800 cursor-pointer space-x-1"
                    rel="noreferrer"
                >
                    <IconYoutube className="h-6 bg-white w-6" />
                    <span>Youtube</span>
                </a>
                <a
                    href={process.env.NEXT_PUBLIC_TIKTOK}
                    target="_blank"
                    className="flex items-center hover:bg-slate-300 hover:text-blue-800 cursor-pointer space-x-1"
                    rel="noreferrer"
                >
                    <IconTiktok className="h-6 w-6" />
                    <span>Tiktok</span>
                </a>
            </div>
        </div>
    );
}
