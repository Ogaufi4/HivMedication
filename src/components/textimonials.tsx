export default () => {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Dr. Sarah Johnson",
            title: "HIV Specialist",
            quote: "With proper treatment and care, people living with HIV can lead long, healthy lives. The key is early diagnosis and consistent adherence to medication."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Michael Rodriguez",
            title: "HIV Advocate",
            quote: "Being diagnosed with HIV was life-changing, but it's not the end. Through support groups and proper treatment, I've found strength and purpose in helping others."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Dr. James Chen",
            title: "Research Scientist",
            quote: "The progress we've made in HIV treatment is remarkable. Today's medications are more effective and have fewer side effects than ever before."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Stories of Hope and Progress
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Hear from healthcare professionals, advocates, and individuals who are making a difference in the fight against HIV. Their experiences and insights help shape a better future for everyone affected by HIV.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}