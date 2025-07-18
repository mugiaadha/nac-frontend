import Link from "next/link";

const Volunteer = () => {
    return (
        <section className="py-28 bg-volunteer-bg bg-no-repeat bg-cover">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <div className="text-center">
                    <h2 className="text-30 font-medium text-white mb-6">
                        Bergabung Bersama NAC Tax Center
                    </h2>
                    <p className="text-16 text-white lg:max-w-60% mx-auto mb-6">
                        Jadilah bagian dari platform e-learning pajak Indonesia. Bersama NAC Tax Center, Anda dapat berkontribusi dalam edukasi perpajakan nasional, memperluas wawasan, dan membantu masyarakat memahami pajak dengan lebih baik.
                    </p>
                    <div className="flex justify-center ">
                        <Link href="#" className="text-white bg-gradient-to-r from-error to-warning px-7 py-5 hover:from-transparent hover:to-transparent border border-transparent hover:border-error hover:text-error rounded">
                            Daftar Volunteer
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Volunteer;