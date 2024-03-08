import { For, Show, createResource } from "solid-js"
import ProjectCard from "../components/ProjectCard"

const fetchProjects = async () => {
    const res = await fetch('http://localhost:3001/projects')
    return res.json();
}

export default function Projects(props) {
    const [projects] = createResource(fetchProjects)

    return (
        <div class="fade-animation">
            <div class="inline-block p-4">
                <h1 class="text-3xl">Projects</h1>
            </div>

            <Show when={projects()} fallback={<p class="loading-text">Loading...</p>}>
                <div class="project-cards-group">
                    <For each={projects()}>
                        {
                            (project) => (
                                <ProjectCard
                                    banner={project.banner}
                                    title={project.title}
                                    link={project.link}
                                    desc={project.desc}
                                    keywords={project.keywords}
                                />
                            )
                        }
                    </For>
                </div>
            </Show>
        </div>
    )
}