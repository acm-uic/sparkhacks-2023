

export default function StaggeredTextObjs ( props ) {

    const leftSide = {
        backgroundColor: "red",
        marginLeft: 0,
        paddingLeft: 15,
        textAlign: "left",
    }
    const rightSide = {
        backgroundColor: "blue",
        marginRight: 0,
        paddingRight: 15,
        textAlign: "right",
    }

    const sectionItems = []
    props.sections.forEach((section, i) => {
        sectionItems.push(
            <section key = {section.id} style = {(i % 2 === 0) ? leftSide : rightSide}>
            <h1>
                {section.header}
            </h1>
                <p>
                    {section.body}
                </p>
            </section>)
    }


    );
    return (
        <div>
            {sectionItems}
        </div>
    )

}