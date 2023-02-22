import {exampleDivs} from "./exampleDIV";

export default function StaggeredTextDivs ( props ) {

    const leftSide = {
        marginLeft: 0,
        textAlign: "left",
    }
    const rightSide = {
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