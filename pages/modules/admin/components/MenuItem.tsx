import { FC } from "react"
import { IMenuItem } from "../admin_interfaces"

type MenuItemProps = {
    data: IMenuItem
}

const MenuItem: FC<MenuItemProps> = ({data}) => {
    return (
        <div className="py-4 px-4">
            <text className="text-red-300">{data.title}</text>
        </div>
    )
}

export default MenuItem