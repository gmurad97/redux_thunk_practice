import Section from "../components/common/Section/Section.jsx";
import TodoList from "../components/TodoList/TodoList.jsx";

const App = () => {
    return (
        <div className="app">
            <Section title="Todo List">
                <TodoList />
            </Section>
        </div>
    );
}

export default App;