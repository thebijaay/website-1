export default function Services() {
    const services = [
        {
            name: 'Web design',
            icon: '/assets/web-icon.png',
            description: 'Crafting responsive, user-friendly websites with a focus on modern design and functionality.',
            link: '#',
        },
        {
            name: 'Mobile App',
            icon: '/assets/mobile-icon.png',
            description: 'Designing intuitive and engaging mobile application interfaces for various platforms.',
            link: '#',
        },
        {
            name: 'UI/UX Design',
            icon: '/assets/ui-icon.png',
            description: 'Creating seamless user experiences through thoughtful interface design and user research.',
            link: '#',
        },
        {
            name: 'Graphics Design',
            icon: '/assets/graphics-icon.png',
            description: 'Visual storytelling through branding, layout design, and creative digital assets.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My Skills & Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Aspiring web developer with a passion for IT, frontend design, and practical digital projects.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="/assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}
