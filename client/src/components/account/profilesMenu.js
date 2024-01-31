import { LuLogOut } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";

import ListButton from '../common/ListButton'
import { fetchLogout } from "../../fetch/google-oauth";
import { useMemo } from "react";

export default function ProfilesMenu() {
    const list = useMemo(() => {
        return (
            [
                {
                    icon: () => <LuUser2 size="22" />,
                    name: "프로필 수정"
                },
                {
                    icon: () => <LuLogOut size="22" />,
                    name: "로그아웃",
                    handler: fetchLogout
                }
            ]
        )
    }, [])

    return (
        <div className="relative flex flex-col w-full rounded-3xl bg-violet-50 overflow-hidden ">
            {list.map((idx) =>
                <ListButton key={idx.name}
                    handler={idx.handler}
                    componentImg={idx.icon}
                    name={idx.name}
                    containerStyles="h-12 border-b-4 border-blue-200 shadow-inner"
                    btnStyles="px-4"/>
            )}
        </div>
    )
}