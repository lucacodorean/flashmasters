import "react";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col scroll-smooth">

            <header className="bg-purple-900 text-white py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-2xl font-light">flashMasters</h1>
                    <nav className="space-x-4">
                        <a href="#features" className="hover:text-gray-300">Ofertă</a>
                        <a href="#about" className="hover:text-gray-300">Despre noi</a>
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                    </nav>
                </div>
            </header>

            <section className="flex-1 bg-gray-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-purple-900 mb-4">
                        Bine ai venit la flashMasters!
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Ești pregătit pentru a începe o nouă aventură?
                    </p>
                    <button className="bg-purple-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-950"
                            onClick={() => window.location.href = "/login"}>
                        Înregistrează-te
                    </button>
                </div>
            </section>

            <section id="features" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
                        Ce oferim?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-purple-800 mb-4">Calitatea informației</h3>
                            <p className="text-gray-600">Produsele noastre sunt de cea mai înaltă calitate, astfel că sursele
                            din care ne inspirăm pentru crearea materialelor sunt veridice.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-purple-800 mb-4">
                                Echipă de profesioniști
                            </h3>
                            <p className="text-gray-600">
                                Echipa noastră oferă asistență 24/7 utilizatorilor platformei.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold text-purple-800 mb-4">
                                Raport calitate-preț
                            </h3>
                            <p className="text-gray-600">
                                Produsele noastre oferă conținut educațional de înaltă calitate la un preț accesibil, asigurând un echilibru perfect între cost și valoare.
                                <br/><br/>
                                După finalizarea plății, ai acces instantaneu la toate materialele cumpărate, economisind timp și efort.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-purple-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Cine suntem noi?</h2>
                    <p className="text-lg justify-center text-left">
                        flashMasters este o platformă web dedicată studenților, dar și elevilor, cu precădere celor
                        care doresc să devină studenți. Este o platformă educațională, care dorește să ajute
                        persoanele în cauză în a se pregăti pentru diferite examene, pe bază de flashcard-uri.
                    </p>
                </div>
            </section>


            <footer id="contact" className="bg-gray-800 text-gray-400 py-6">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 Flashmasters. Toate drepturile rezervate.</p>
                    <p>
                        <a href="mailto:support@myapp.com" className="text-purple-500">
                            support@flashamsters.com
                        </a>
                    </p>
                    <a href="/terms-and-conditions" className="text-white mt-2">Termenii și condițiile</a>
                    <div className="flex justify-center mt-4 space-x-6">
                        <a className="lg:leading-18 lg:hover:text-bleu-hover2 m-4 block py-1 text-xs leading-4 text-white lg:m-0 lg:text-sm"
                           href="https://anpc.ro/ce-este-sal/"
                           title=""
                           target="_blank"
                           rel="noopener noreferrer">
                            <img style={{width: "250px"}}
                                 src="https://lcdn.altex.ro/render/static/altex/images/footer-banners/anpc-sal.png"
                                 alt=""
                            />
                        </a>
                        <a className="lg:leading-18 lg:hover:text-bleu-hover2 m-4 block py-1 text-xs leading-4 text-white lg:m-0 lg:text-sm"
                           href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                           title=""
                           target="_blank"
                           rel="noopener noreferrer">
                            <img style={{width: "250px"}}
                                 src="https://lcdn.altex.ro/render/static/altex/images/footer-banners/anpc-sol.png"
                                 alt=""
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
