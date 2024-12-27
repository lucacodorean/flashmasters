import  'react';
import {useNavigate} from "react-router-dom";

const TermsAndConditions = () => {

    const navigate= useNavigate();

    return (
        <div className="bg-purple-900 h-64 text-white"
             style={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>

            <div className="relative">
                <div className="absolute left-4 top-4">
                    <button className="text-white text-2xl" onClick={() => navigate(-1)}>&#8249;</button>
                </div>
                <div className="flex flex-col items-center pt-12">
                    <h1 className="mt-4 text-xl font-semibold">Termeni si condiții</h1>
                </div>
                <br/>
            </div>

            <div className="bg-white text-black p-6 rounded-t-3xl shadow-lg mt-6 mx-6">
                <h2 className="text-xl font-semibold mb-4">1. Introducere</h2>
                <p className="text-gray-700 mb-6">
                    Acest document stabilește termenii și condițiile utilizării platformei noastre, destinată pregătirii
                    pentru examene, prin grile și flashcarduri. Prin utilizarea platformei, utilizatorul acceptă
                    integral termenii și condițiile descrise mai jos.
                </p>

                <h2 className="text-xl font-semibold mb-4">2. Definiții</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6">
                    <li><strong>2.1. Platformă:</strong> Website-ul destinat pregătirii pentru diferite examene, prin
                        grile și flashcarduri.
                    </li>
                    <li><strong>2.2. Utilizator:</strong> Orice persoană care creează un cont și/sau accesează
                        materialele disponibile pe platformă.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">3. Servicii oferite</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6">
                    <li>
                        <strong>3.1. Acces și produse:</strong> Platforma oferă acces la grile și flashcarduri exclusiv
                        pe baza plății făcute de către utilizator. Produsele sunt descrise detaliat pe site.
                    </li>
                    <li>
                        <strong>3.2. Restricții de utilizare:</strong> Este interzisă utilizarea unui cont de către mai
                        multe persoane. Conținutul platformei este protejat de drepturi de autor.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">4. Plăți și politici comerciale</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6">
                    <li>
                        <strong>4.1. Metode de plată:</strong> Plățile se efectuează exclusiv prin card bancar,
                        utilizând procesatori de plăți autorizați. Prețurile produselor pot fi modificate fără
                        notificare prealabilă.
                    </li>
                    <li>
                        <strong>4.2. Politica de rambursare:</strong> Rambursările sunt posibile în termen de 3 zile
                        calendaristice de la achiziție, pentru abonamente care depășesc 30 de zile. Solicitarile se fac
                        la <a href="mailto:support@flashmasters.com"
                              className="text-purple-500 underline">support@flashmasters.com</a>.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">5. Drepturi de proprietate intelectuală</h2>
                <p className="text-gray-700 mb-6">
                    Materialele de pe platformă (grile, flashcarduri, design etc.) sunt protejate de legislația privind
                    drepturile de autor și aparțin exclusiv platformei. Este interzisă utilizarea acestora în scopuri
                    comerciale fără permisiune scrisă.
                </p>

                <h2 className="text-xl font-semibold mb-4">6. Colectarea și utilizarea datelor personale</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6">
                    <li><strong>6.1. Date colectate:</strong> Nume, email și informații bancare pentru procesarea
                        plăților. Datele bancare nu sunt stocate.
                    </li>
                    <li><strong>6.2. Partajarea datelor:</strong> Datele sunt partajate doar cu procesatorii de plăți
                        autorizați.
                    </li>
                    <li><strong>6.3. Respectarea GDPR:</strong> Platforma respectă Regulamentul General privind
                        Protecția Datelor (GDPR). Pentru detalii, consultați Politica noastră de Confidențialitate.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">7. Limitarea răspunderii</h2>
                <p className="text-gray-700 mb-6">
                    Platforma oferă materiale educaționale „ca atare” și nu garantează succesul utilizatorilor la
                    examene. Nu ne asumăm răspunderea pentru eventualele erori sau disfuncționalități ale platformei.
                </p>

                <h2 className="text-xl font-semibold mb-4">8. Suspendarea sau închiderea contului</h2>
                <p className="text-gray-700 mb-6">
                    Ne rezervăm dreptul de a suspenda sau închide contul utilizatorilor care încalcă termenii și
                    condițiile, inclusiv utilizarea unui cont de către mai multe persoane.
                </p>

                <h2 className="text-xl font-semibold mb-4">9. Modificări ale termenilor și condițiilor</h2>
                <p className="text-gray-700 mb-6">
                    Acești termeni pot fi modificați periodic. Utilizarea continuă a platformei implică acceptarea
                    modificărilor.
                </p>

                <h2 className="text-xl font-semibold mb-4">10. Legislația aplicabilă</h2>
                <p className="text-gray-700 mb-6">
                    Acești termeni sunt guvernați de legislația din România. Orice litigiu va fi soluționat de
                    instanțele competente din România.
                </p>

                <h2 className="text-xl font-semibold mb-4">11. Date firmă</h2>
                <ul className="list-none pl-0 text-gray-700">
                    <li><strong>Nume firmă:</strong> Codorean Luca-Andrei PERSOANA FIZICA AUTORIZATA</li>
                    <li><strong>Sediu:</strong> Dej, str. Fragilor nr.5, bl. C4, ap. 13</li>
                    <li><strong>Email:</strong> <a href="mailto:codoreanluca@gmail.com"
                                                   className="text-purple-500 underline">codoreanluca@gmail.com</a></li>
                    <li><strong>Telefon:</strong> +40761818887</li>
                </ul>
            </div>
        </div>
    );
};

export default TermsAndConditions;
