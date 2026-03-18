export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#top">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:contact@kiran-pokhrel.com.np"> contact@kiran-pokhrel.com.np </a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://kiran-pokhrel.com.np" target="_blank" rel="noopener noreferrer">Kiran Pokhrel</a> • All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/pokhrelkiran321-commits" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/kiranpokhrel" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com/kiranpokhrel" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}
