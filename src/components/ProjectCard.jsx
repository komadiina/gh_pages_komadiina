import { mergeProps } from "solid-js";

export default function ProjectCard(props) {
    const baseProp = mergeProps({
        banner: "",
        title: "untitled",
        link: "https://github.com/komadiina",
        keywords: [],
        desc: "description",
    }, props);

    return (
        <div class="card-container">
            <div class="project-banner">
                <img src={baseProp.banner} alt="" />
            </div>

            <div class="title-container">
                <h1>
                    {baseProp.title}
                </h1>
            </div>

            <div class="project-description">
                <p>{baseProp.desc}</p>
            </div>

            <div class="project-keywords">
                <For each={baseProp.keywords}>
                    {
                        (keyword) => (
                            <div class="inline-block project-tag-container">
                                <p class="project-tag-element">{keyword}</p>
                            </div>
                        )
                    }
                </For>
            </div>

            <a href={baseProp.link}>
                <div class="repo-link">
                    <p>
                        View repository
                    </p>
                </div>
            </a>
        </div>
    );
}
