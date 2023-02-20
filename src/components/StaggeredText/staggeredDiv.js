

export default function StaggeredTextDivs ( props ) {

    const leftSide = {
        backgroundColor: "red",
        marginLeft: 0,
        textAlign: "left",
    }
    const rightSide = {
        backgroundColor: "blue",
        marginRight: 0,
        textAlign: "right",
    }

    const sectionItems = []
    props.sections.forEach((section, i) => {
        sectionItems.push(
            <section key = {section.id} style = {(i % 2 === 0) ? leftSide : rightSide}>
                {section}
            </section>)
        }
    )
    return (
        <div>
            {sectionItems}
        </div>
    )

}