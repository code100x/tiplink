import Link from 'next/link';

export function Footer() {
    return (
        <footer className="flex w-full justify-center bg-gray-300 p-6 md:py-12">
            <div className="container grid max-w-7xl grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:grid-cols-5">
                <div className="grid gap-1">
                    <h3 className="font-semibold">Company</h3>
                    <Link href="#" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" prefetch={false}>
                        Team
                    </Link>
                    <Link href="#" prefetch={false}>
                        Careers
                    </Link>
                    <Link href="#" prefetch={false}>
                        News
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Product</h3>
                    <Link href="#" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" prefetch={false}>
                        Integrations
                    </Link>
                    <Link href="#" prefetch={false}>
                        API
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Resources</h3>
                    <Link href="#" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="#" prefetch={false}>
                        Documentation
                    </Link>
                    <Link href="#" prefetch={false}>
                        Help Center
                    </Link>
                    <Link href="#" prefetch={false}>
                        Community
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <Link href="#" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" prefetch={false}>
                        Cookie Policy
                    </Link>
                    <Link href="#" prefetch={false}>
                        Security
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Contact</h3>
                    <Link href="#" prefetch={false}>
                        Sales
                    </Link>
                    <Link href="#" prefetch={false}>
                        Support
                    </Link>
                    <Link href="#" prefetch={false}>
                        Partnerships
                    </Link>
                    <Link href="#" prefetch={false}>
                        Press
                    </Link>
                </div>
            </div>
        </footer>
    );
}
