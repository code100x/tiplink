'use client';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import ReactWrapBalancer from 'react-wrap-balancer';
import { GoogleIcon } from '../ui/googleicon';

export function Hero() {
    return (
        <section>
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pt-24 md:pt-52">
                    {/* Hero content */}
                    <div className="container mx-auto text-center">
                        <div className="mb-6" data-aos="fade-down">
                            <div className="relative inline-flex before:absolute before:inset-0">
                                <Link
                                    className="group relative inline-flex w-full items-center justify-center rounded-full border border-transparent px-3 py-1 text-sm font-medium text-zinc-900 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.primary.900),_theme(colors.primary.900))_padding-box,_conic-gradient(theme(colors.primary.400),_theme(colors.primary.700)_25%,_theme(colors.primary.700)_75%,_theme(colors.primary.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[#f0eded]"
                                    href="https://github.com/code100x/tiplink/"
                                    target="_blank"
                                >
                                    <span className="relative inline-flex items-center px-2">
                                        STAR US ON GITHUB{' '}
                                        <span className="text-primary-500 mb-1 ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                                            &gt;
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <h1
                            className="bg-gradient-to-r from-zinc-900/60 via-zinc-900 to-zinc-600/60 bg-clip-text pb-4 text-5xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-8xl"
                            data-aos="fade-down"
                        >
                            <ReactWrapBalancer>
                                The crypto of tomorrow,{' '}
                                <span className="text-[#006399]">today</span>
                            </ReactWrapBalancer>
                        </h1>
                        <p
                            className="mb-8 text-lg text-zinc-900"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            Create a frictionless wallet with just a Google
                            Account.
                        </p>
                        <div
                            className="mx-auto flex w-1/5 max-w-xs flex-col items-center gap-4 sm:inline-flex sm:max-w-none sm:flex-row sm:justify-center"
                            data-aos="fade-down"
                            data-aos-delay="400"
                        >
                            <Link
                                className="flex items-center justify-center whitespace-nowrap rounded bg-[#006399] px-4 py-1.5 font-medium text-zinc-100 transition duration-200 ease-in-out hover:bg-[#185273]"
                                href="/create-post"
                            >
                                <Button
                                    onClick={async () => await signIn('google')}
                                    className="text-lg font-medium"
                                >
                                    <GoogleIcon />
                                    Login with Google
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
