import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed mx-auto max-w-8xl w-full px-7.5 top-6 left-0 right-0 z-50 flex flex-col gap-6">
            <div className=" overflow-hidden ">
                <svg width="1381" height="18" viewBox="0 0 1381 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0L0.500002 18" stroke="#90A1B9" />
                    <path d="M8.52344 0L8.52344 18" stroke="#90A1B9" />
                    <path d="M16.5469 0L16.5469 18" stroke="#90A1B9" />
                    <path d="M24.5693 0L24.5693 18" stroke="#90A1B9" />
                    <path d="M32.5928 0L32.5928 18" stroke="#90A1B9" />
                    <path d="M40.6162 0L40.6162 18" stroke="#90A1B9" />
                    <path d="M48.6396 0L48.6397 18" stroke="#90A1B9" />
                    <path d="M56.6631 0L56.6631 18" stroke="#90A1B9" />
                    <path d="M64.6865 0L64.6865 18" stroke="#90A1B9" />
                    <path d="M72.709 0L72.709 18" stroke="#90A1B9" />
                    <path d="M80.7324 0L80.7324 18" stroke="#90A1B9" />
                    <path d="M88.7559 0L88.7559 18" stroke="#90A1B9" />
                    <path d="M96.7793 0L96.7793 18" stroke="#90A1B9" />
                    <path d="M104.803 0L104.803 18" stroke="#90A1B9" />
                    <path d="M112.825 0L112.825 18" stroke="#90A1B9" />
                    <path d="M120.849 0L120.849 18" stroke="#90A1B9" />
                    <path d="M128.872 0L128.872 18" stroke="#90A1B9" />
                    <path d="M136.896 0L136.896 18" stroke="#90A1B9" />
                    <path d="M144.919 0L144.919 18" stroke="#90A1B9" />
                    <path d="M152.941 0L152.941 18" stroke="#90A1B9" />
                    <path d="M160.965 0L160.965 18" stroke="#90A1B9" />
                    <path d="M168.988 0L168.988 18" stroke="#90A1B9" />
                    <path d="M177.012 0L177.012 18" stroke="#90A1B9" />
                    <path d="M185.035 0L185.035 18" stroke="#90A1B9" />
                    <path d="M193.059 0L193.059 18" stroke="#90A1B9" />
                    <path d="M201.081 0L201.081 18" stroke="#90A1B9" />
                    <path d="M209.104 0L209.104 18" stroke="#90A1B9" />
                    <path d="M217.128 0L217.128 18" stroke="#90A1B9" />
                    <path d="M225.151 0L225.151 18" stroke="#90A1B9" />
                    <path d="M233.175 0L233.175 18" stroke="#90A1B9" />
                    <path d="M241.197 0L241.197 18" stroke="#90A1B9" />
                    <path d="M249.221 0L249.221 18" stroke="#90A1B9" />
                    <path d="M257.244 0L257.244 18" stroke="#90A1B9" />
                    <path d="M265.268 0L265.268 18" stroke="#90A1B9" />
                    <path d="M273.291 0L273.291 18" stroke="#E2E8F0" />
                    <path d="M281.313 0L281.313 18" stroke="#E2E8F0" />
                    <path d="M289.337 0L289.337 18" stroke="#E2E8F0" />
                    <path d="M297.36 0L297.36 18" stroke="#E2E8F0" />
                    <path d="M305.384 0L305.384 18" stroke="#E2E8F0" />
                    <path d="M313.407 0L313.407 18" stroke="#E2E8F0" />
                    <path d="M321.431 0L321.431 18" stroke="#E2E8F0" />
                    <path d="M329.453 0L329.453 18" stroke="#E2E8F0" />
                    <path d="M337.477 0L337.477 18" stroke="#E2E8F0" />
                    <path d="M345.5 0L345.5 18" stroke="#E2E8F0" />
                    <path d="M353.523 0L353.523 18" stroke="#E2E8F0" />
                    <path d="M361.547 0L361.547 18" stroke="#E2E8F0" />
                    <path d="M369.569 0L369.569 18" stroke="#E2E8F0" />
                    <path d="M377.593 0L377.593 18" stroke="#E2E8F0" />
                    <path d="M385.616 0L385.616 18" stroke="#E2E8F0" />
                    <path d="M393.64 0L393.64 18" stroke="#E2E8F0" />
                    <path d="M401.663 0L401.663 18" stroke="#E2E8F0" />
                    <path d="M409.686 0L409.686 18" stroke="#E2E8F0" />
                    <path d="M417.709 0L417.709 18" stroke="#E2E8F0" />
                    <path d="M425.732 0L425.732 18" stroke="#E2E8F0" />
                    <path d="M433.756 0L433.756 18" stroke="#E2E8F0" />
                    <path d="M441.779 0L441.779 18" stroke="#E2E8F0" />
                    <path d="M449.803 0L449.803 18" stroke="#E2E8F0" />
                    <path d="M457.825 0L457.825 18" stroke="#E2E8F0" />
                    <path d="M465.849 0L465.849 18" stroke="#E2E8F0" />
                    <path d="M473.872 0L473.872 18" stroke="#E2E8F0" />
                    <path d="M481.896 0L481.896 18" stroke="#E2E8F0" />
                    <path d="M489.919 0L489.919 18" stroke="#E2E8F0" />
                    <path d="M497.941 0L497.941 18" stroke="#E2E8F0" />
                    <path d="M505.965 0L505.965 18" stroke="#E2E8F0" />
                    <path d="M513.988 0L513.988 18" stroke="#E2E8F0" />
                    <path d="M522.012 0L522.012 18" stroke="#E2E8F0" />
                    <path d="M530.035 0L530.035 18" stroke="#E2E8F0" />
                    <path d="M538.059 0L538.059 18" stroke="#E2E8F0" />
                    <path d="M546.081 0L546.081 18" stroke="#E2E8F0" />
                    <path d="M554.104 0L554.104 18" stroke="#E2E8F0" />
                    <path d="M562.128 0L562.128 18" stroke="#E2E8F0" />
                    <path d="M570.151 0L570.151 18" stroke="#E2E8F0" />
                    <path d="M578.175 0L578.175 18" stroke="#E2E8F0" />
                    <path d="M586.197 0L586.197 18" stroke="#E2E8F0" />
                    <path d="M594.221 0L594.221 18" stroke="#E2E8F0" />
                    <path d="M602.244 0L602.244 18" stroke="#E2E8F0" />
                    <path d="M610.268 0L610.268 18" stroke="#E2E8F0" />
                    <path d="M618.291 0L618.291 18" stroke="#E2E8F0" />
                    <path d="M626.313 0L626.313 18" stroke="#E2E8F0" />
                    <path d="M634.337 0L634.337 18" stroke="#E2E8F0" />
                    <path d="M642.36 0L642.36 18" stroke="#E2E8F0" />
                    <path d="M650.384 0L650.384 18" stroke="#E2E8F0" />
                    <path d="M658.407 0L658.407 18" stroke="#E2E8F0" />
                    <path d="M666.43 0L666.43 18" stroke="#E2E8F0" />
                    <path d="M674.453 0L674.453 18" stroke="#E2E8F0" />
                    <path d="M682.477 0L682.477 18" stroke="#E2E8F0" />
                    <path d="M690.5 0L690.5 18" stroke="#E2E8F0" />
                    <path d="M698.523 0L698.523 18" stroke="#E2E8F0" />
                    <path d="M706.547 0L706.547 18" stroke="#E2E8F0" />
                    <path d="M714.569 0L714.569 18" stroke="#E2E8F0" />
                    <path d="M722.593 0L722.593 18" stroke="#E2E8F0" />
                    <path d="M730.616 0L730.616 18" stroke="#E2E8F0" />
                    <path d="M738.64 0L738.64 18" stroke="#E2E8F0" />
                    <path d="M746.663 0L746.663 18" stroke="#E2E8F0" />
                    <path d="M754.686 0L754.686 18" stroke="#E2E8F0" />
                    <path d="M762.709 0L762.709 18" stroke="#E2E8F0" />
                    <path d="M770.732 0L770.732 18" stroke="#E2E8F0" />
                    <path d="M778.756 0L778.756 18" stroke="#E2E8F0" />
                    <path d="M786.779 0L786.779 18" stroke="#E2E8F0" />
                    <path d="M794.803 0L794.803 18" stroke="#E2E8F0" />
                    <path d="M802.825 0L802.825 18" stroke="#E2E8F0" />
                    <path d="M810.849 0L810.849 18" stroke="#E2E8F0" />
                    <path d="M818.872 0L818.872 18" stroke="#E2E8F0" />
                    <path d="M826.896 0L826.896 18" stroke="#E2E8F0" />
                    <path d="M834.919 0L834.919 18" stroke="#E2E8F0" />
                    <path d="M842.941 0L842.941 18" stroke="#E2E8F0" />
                    <path d="M850.965 0L850.965 18" stroke="#E2E8F0" />
                    <path d="M858.988 0L858.988 18" stroke="#E2E8F0" />
                    <path d="M867.012 0L867.012 18" stroke="#E2E8F0" />
                    <path d="M875.035 0L875.035 18" stroke="#E2E8F0" />
                    <path d="M883.058 0L883.058 18" stroke="#E2E8F0" />
                    <path d="M891.081 0L891.081 18" stroke="#E2E8F0" />
                    <path d="M899.104 0L899.104 18" stroke="#E2E8F0" />
                    <path d="M907.128 0L907.128 18" stroke="#E2E8F0" />
                    <path d="M915.151 0L915.151 18" stroke="#E2E8F0" />
                    <path d="M923.174 0L923.174 18" stroke="#E2E8F0" />
                    <path d="M931.197 0L931.197 18" stroke="#E2E8F0" />
                    <path d="M939.221 0L939.221 18" stroke="#E2E8F0" />
                    <path d="M947.244 0L947.244 18" stroke="#E2E8F0" />
                    <path d="M955.268 0L955.268 18" stroke="#E2E8F0" />
                    <path d="M963.291 0L963.291 18" stroke="#E2E8F0" />
                    <path d="M971.313 0L971.313 18" stroke="#E2E8F0" />
                    <path d="M979.337 0L979.337 18" stroke="#E2E8F0" />
                    <path d="M987.36 0L987.36 18" stroke="#E2E8F0" />
                    <path d="M995.384 0L995.384 18" stroke="#E2E8F0" />
                    <path d="M1003.41 0L1003.41 18" stroke="#E2E8F0" />
                    <path d="M1011.43 0L1011.43 18" stroke="#E2E8F0" />
                    <path d="M1019.45 0L1019.45 18" stroke="#E2E8F0" />
                    <path d="M1027.48 0L1027.48 18" stroke="#E2E8F0" />
                    <path d="M1035.5 0L1035.5 18" stroke="#E2E8F0" />
                    <path d="M1043.52 0L1043.52 18" stroke="#E2E8F0" />
                    <path d="M1051.55 0L1051.55 18" stroke="#E2E8F0" />
                    <path d="M1059.57 0L1059.57 18" stroke="#E2E8F0" />
                    <path d="M1067.59 0L1067.59 18" stroke="#E2E8F0" />
                    <path d="M1075.62 0L1075.62 18" stroke="#E2E8F0" />
                    <path d="M1083.64 0L1083.64 18" stroke="#E2E8F0" />
                    <path d="M1091.66 0L1091.66 18" stroke="#E2E8F0" />
                    <path d="M1099.69 0L1099.69 18" stroke="#E2E8F0" />
                    <path d="M1107.71 0L1107.71 18" stroke="#E2E8F0" />
                    <path d="M1115.73 0L1115.73 18" stroke="#E2E8F0" />
                    <path d="M1123.76 0L1123.76 18" stroke="#E2E8F0" />
                    <path d="M1131.78 0L1131.78 18" stroke="#E2E8F0" />
                    <path d="M1139.8 0L1139.8 18" stroke="#E2E8F0" />
                    <path d="M1147.83 0L1147.83 18" stroke="#E2E8F0" />
                    <path d="M1155.85 0L1155.85 18" stroke="#E2E8F0" />
                    <path d="M1163.87 0L1163.87 18" stroke="#E2E8F0" />
                    <path d="M1171.9 0L1171.9 18" stroke="#E2E8F0" />
                    <path d="M1179.92 0L1179.92 18" stroke="#E2E8F0" />
                    <path d="M1187.94 0L1187.94 18" stroke="#E2E8F0" />
                    <path d="M1195.97 0L1195.97 18" stroke="#E2E8F0" />
                    <path d="M1203.99 0L1203.99 18" stroke="#E2E8F0" />
                    <path d="M1212.01 0L1212.01 18" stroke="#E2E8F0" />
                    <path d="M1220.04 0L1220.04 18" stroke="#E2E8F0" />
                    <path d="M1228.06 0L1228.06 18" stroke="#E2E8F0" />
                    <path d="M1236.08 0L1236.08 18" stroke="#E2E8F0" />
                    <path d="M1244.11 0L1244.11 18" stroke="#E2E8F0" />
                    <path d="M1252.13 0L1252.13 18" stroke="#E2E8F0" />
                    <path d="M1260.15 0L1260.15 18" stroke="#E2E8F0" />
                    <path d="M1268.18 0L1268.18 18" stroke="#E2E8F0" />
                    <path d="M1276.2 0L1276.2 18" stroke="#E2E8F0" />
                    <path d="M1284.22 0L1284.22 18" stroke="#E2E8F0" />
                    <path d="M1292.25 0L1292.25 18" stroke="#E2E8F0" />
                    <path d="M1300.27 0L1300.27 18" stroke="#E2E8F0" />
                    <path d="M1308.29 0L1308.29 18" stroke="#E2E8F0" />
                    <path d="M1316.32 0L1316.32 18" stroke="#E2E8F0" />
                    <path d="M1324.34 0L1324.34 18" stroke="#E2E8F0" />
                    <path d="M1332.36 0L1332.36 18" stroke="#E2E8F0" />
                    <path d="M1340.39 0L1340.39 18" stroke="#E2E8F0" />
                    <path d="M1348.41 0L1348.41 18" stroke="#E2E8F0" />
                    <path d="M1356.43 0L1356.43 18" stroke="#E2E8F0" />
                    <path d="M1364.46 0L1364.46 18" stroke="#E2E8F0" />
                    <path d="M1372.48 0L1372.48 18" stroke="#E2E8F0" />
                    <path d="M1380.5 0L1380.5 18" stroke="#E2E8F0" />
                </svg>
            </div>
            <div className="font-medium h-9.5 flex items-center justify-between">
                <div className="flex justify-between items-center gap-4 w-full max-w-150">
                    <Link href="/" className="bg-slate-200">
                        <div className="bg-slate-100 rounded-sm px-2.5 py-2 text-lg">
                            Steámject
                        </div>
                    </Link>
                    <div className="relative flex items-center gap-2">
                        <Image src="/union-nav.svg" alt="Union" fill />
                        <Link href="#" className="relative px-2.5 py-2">
                            Tech
                        </Link>
                        <Link href="#" className="relative px-2.5 py-2">
                            About Us
                        </Link>
                        <Link href="#" className="relative px-2.5 py-2">
                            Journal
                        </Link>
                    </div>
                </div>
                <Link href="#" className="relative flex gap-2">
                    <Image src="/union-nav-cta.svg" alt="Union" fill />
                    <div className="relative px-2.5 py-2">
                        Contact Us
                    </div>
                    <div className="relative px-2.5 py-2 flex items-center justify-center">
                        <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} />
                    </div>
                </Link>
            </div>
        </nav>
    )
}