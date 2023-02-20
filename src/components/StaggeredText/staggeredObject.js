

export default function StaggeredTextObjs ( props ) {

    const leftSide = {
        marginLeft: 0,
        paddingLeft: 15,
        paddingBottom:10,
        textAlign: "left",
    }
    const rightSide = {
        marginRight: 0,
        paddingRight: 15,
        paddingBottom: 10,
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