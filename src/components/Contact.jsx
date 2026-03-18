import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending....");

        const formData = new FormData(event.target);

        try {
            const res = await fetch("https://formspree.io/f/xojwnbga", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            const data = await res.json();

            if (res.ok) {
                setResult("Message sent successfully");
                event.target.reset();
            } else {
                setResult(data?.error || "Something went wrong");
            }
        } catch (error) {
            setResult("Submission failed. Please try again.");
        }
    };

    return (
        <div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Connect with me
            </h4>
            <h2 className="text-center text-5xl font-Ovo">
                Get in touch
            </h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I&apos;d love to hear from you! If you have any questions,
                comments or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <input
                    type="hidden"
                    name="subject"
                    value="Kiran Pokhrel - New form Submission"
                />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                        name="name"
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                        name="email"
                    />
                </div>

                <textarea
                    rows="6"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
                    required
                    name="message"
                ></textarea>

                <button
                    type="submit"
                    className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mx-auto hover:scale-105 duration-500 dark:bg-none dark:border dark:border-white/30 dark:hover:bg-purple-800"
                >
                    Submit now
                    <img
                        src="/assets/right-arrow-white.png"
                        alt=""
                        className="w-4"
                    />
                </button>

                <p className="mt-4 text-center">{result}</p>
            </form>
        </div>
    );
}
