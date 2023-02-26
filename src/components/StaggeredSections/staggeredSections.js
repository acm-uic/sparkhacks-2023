export default function StaggeredSections ( props ) {
    if (props.sections[0].id === undefined) {
        const leftSideDiv = {
            marginLeft: 0,
            textAlign: "left",
        }
        const rightSideDiv = {
            marginRight: 0,
            textAlign: "right",
        }

        const sectionItems = []
        props.sections.forEach((section, i) => {
        sectionItems.push(
        <section key = {i} style = {(i % 2 === 0) ? leftSideDiv : rightSideDiv}>
            {section}
        </section>
        )})
        return (
        <div>
            {sectionItems}
        </div>
        )
    } else {
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
        <section key = {section.id + "1"} style = {(i % 2 === 0) ? leftSide : rightSide}>
        <h2>
            {section.header}
        </h2>
        <p>
            {section.body}
        </p>
        </section>)
        });
        return (<div>{sectionItems}</div>)
    }

}

