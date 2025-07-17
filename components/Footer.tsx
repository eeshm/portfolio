import Link from 'next/link';
export default function Footer(){
    return(
        <footer className="w-full h-56 text-black dark:text-white py-4 mt-8 opacity: 1; filter: blur(0px); will-change: auto; transform: translateY(-6px)">
            <div className="max-w-2xl mx-auto text-center space-y-3  ">
                <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'><hr /></div>
                <p className="text-xl mt-2 mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">say hi on <Link href={"https://x.com/eeshmidha1"} className='text-blue-500 hover:underline'>𝕏</Link></p>
            </div>
        </footer>
    )
}