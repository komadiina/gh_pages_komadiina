import { createSignal } from "solid-js";

export default function BackToTop(props) {
    const [visible, setVisible] = createSignal(false);

    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
            setVisible(true);
        else setVisible(false);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button onClick={scrollToTop}
            style={`display: ${visible() ? 'block' : 'none'}`}>
            <i class='fa-solid fa-arrow-up text-4xl py-10' />
            <p class="text-5xl"> Back to top </p>
        </button>
    )
}