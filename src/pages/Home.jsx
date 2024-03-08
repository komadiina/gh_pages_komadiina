import { onMount } from "solid-js";
import BackToTop from '../components/BackToTop';

export default function Home(props) {
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-element');
                } else {
                    entry.target.classList.remove('show-element');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden-element');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    return (
        <div class="main-container fade-animation container px-4 mx-auto scroll-px-4 sm:px-4">

            <div class="text-group">
                {/* <div class="inline-block">
                    <h1 class="text-3xl">Home</h1> <br />
                </div> */}
                <div class="home-text-block hidden-element">
                    <center>
                        <p class="text-6xl">Hi.</p>
                    </center>
                </div>

                <div class="home-text-block hidden-element">
                    <center>
                        <p class="text-6xl">Where did you wonder from?</p>
                    </center>
                </div>

                <div class="home-text-block hidden-element">
                    <center>
                        <p class="text-6xl">There's something for everybody.</p>
                    </center>
                </div>

                <div class="home-text-block hidden-element">
                    <center>
                        <p class="text-6xl">
                            Who am I?
                        </p>
                    </center>
                </div>

                <div class="home-text-block hidden-element">
                    <center>
                        <div class="code-block bg-opacity-5 bg-slate-700">
                            <center class='italic text-sm py-2 text-slate-500'>about.json <br /></center>
                            <p> <v1>{"{"}</v1> <br />
                                <t><v2>"who"</v2>: <val>"Ognjen Komadina"</val>,</t> <br />
                                <t><v2>"when"</v2>: <val>"15 July 2001"</val>, <br /></t>
                                <t><v2>"where"</v2>: <val>"Banja Luka"</val>, <br /></t>
                                <t><v2>"what"</v2>: <val>"Electrical Engineering"</val> <br /> </t>
                                <v1>{"}"}</v1>
                            </p>
                        </div>
                    </center>
                </div>

                <div class="home-text-block hidden-element">
                    <BackToTop />
                </div>

            </div >
        </div >
    )
}