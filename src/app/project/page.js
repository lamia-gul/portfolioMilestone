import ProjectCard from '../../components/ProjectCard';
export default function Project() {
    return (
        <main>
            <h1>My Portfolio</h1>
            <div className="Project-grid">
                <ProjectCard title="Hello World App" description="This app is the simplest program you can create when learning a new programming language or framework. It serves as a foundational exercise to demonstrate the setup and functionality of an environment without involving complex logic or additional features."/>
                <ProjectCard title="Calculator" description=""/>
                <ProjectCard title="todo list" description=""/>

            </div>
        </main>
    );
}