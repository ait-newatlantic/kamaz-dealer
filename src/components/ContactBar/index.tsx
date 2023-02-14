import { IconFacebook } from 'components/icons/components/IconFacebook';
import { IconTiktok } from 'components/icons/components/IconTiktok';
import { IconYoutube } from 'components/icons/components/IconYoutube';
import { IconZalo } from 'components/icons/components/IconZalo';
import { data } from 'data';

export function ContactBar() {
    return (
        <div className="bg-blue-700 flex justify-between items-center h-10 px-10">
            <p className="text-white text-sm font-semibold">
                HOTLINE: {data.phone_number} (Mr. {data.name})
            </p>
            <div className="flex item-center space-x-4 text-sm text-white h-10">
                <a
                    href={data.zalo}
                    target="_blank"
                    className="flex items-center hover:bg-slate-300 hover:text-blue-800 cursor-pointer space-x-1"
                    rel="noreferrer"
                >
                    <IconZalo className="h-6 w-6" />
                    <span>Zalo</span>
                </a>
                <a
                    href={data.facebook}
                    target="_blank"
                    className="flex items-center hover:bg-slate-300 hover:text-blue-800 cursor-pointer space-x-1"
                    rel="noreferrer"
                >
                    <IconFacebook className="h-6 w-6" />
                    <span>Facebook</span>
                </a>
                <a
                    href={data.youtube}
                    target="_blank"
                    className="flex items-center hover:bg-slate-300 hover:text-blue-800 cursor-pointer space-x-1"
                    rel="noreferrer"
                >
                    <IconYoutube className="h-6 bg-white w-6" />
                    <span>Youtube</span>
                </a>
                <a
                    href={data.tiktok}
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
