import "./Section.css";

const Section = ({ title, children }) => {
    return (
        <section className="section">
            <div className="section__heading">
                <h1 className="section__heading-title">
                    {title}
                </h1>
            </div>
            {children}
        </section>
    );
}

export default Section;