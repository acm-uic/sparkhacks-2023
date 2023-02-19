

export default function StaggeredText ( props ) {

    const leftSide = {
        // float: "left",
        backgroundColor: "red",
        marginLeft: 0,
        paddingLeft: 5,
        textAlign: "left",
    }
    const rightSide = {
        // float: "right",
        backgroundColor: "blue",
        marginRight: 0,
        paddingRight: 5,
        textAlign: "right",
    }

    const sectionItems = props.sections.map(section => {
        console.log(section.id)
        return (
            <section key = {section.id} style = {(section.id % 2 === 0) ? leftSide : rightSide}>
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