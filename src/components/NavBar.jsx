import { Router, Route, A } from "@solidjs/router"

export default function NavBar(props) {
    return (
        <div class="navbar-container text-2xl px-2 max-w-screen-xl mx-auto lg:text-2xl sm:px-2">
            <h1>Ognjen Komadina | <span class="italic">ogg</span></h1>

            <div class="routes">
                <a href="/"
                    class="hover:scale-125 duration-200">
                    Home
                </a>

                <a href="/projects"
                    class="hover:scale-125 duration-200">
                    Projects
                </a>

                {/* <a href="/blog"
                    class="hover:scale-125 duration-200">
                    Blog
                </a> */}

                <a href="/about"
                    class="hover:scale-125 duration-200">
                    About
                </a>

            </div>
        </div>
    )
}