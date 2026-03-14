

export default function Footer() {

    return(
        <footer className="bg-[#333] text-white">
            <p className="text-sm py-10 text-center capitalize text-[#41dbd2]">
                &copy; copyright {new Date().getFullYear()} all right reserved
            </p>
        </footer>
    )
}