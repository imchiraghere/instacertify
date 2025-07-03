import { LOGO_ITEMS } from "@/utills/const";
import Link from "next/link";

const Logos = () => {
    return (
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">
                {LOGO_ITEMS.map((logo, index) => (
                    <Link
                        key={index}
                        href="/"
                        className={`transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] ${logo.extraClass || ""}`}
                    >
                        <img src={logo.src} alt={logo.alt} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Logos;
