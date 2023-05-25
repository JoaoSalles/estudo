import { DarkModeBtn } from "../button/DarkModeBtn"

export default function Header() {
    return (
    <nav className="flex items-center justify-between h-10 dark:bg-slate-900 bg-slate-50">
        <div></div>
        <div>
            <DarkModeBtn />
        </div>
    </nav>
    )
}