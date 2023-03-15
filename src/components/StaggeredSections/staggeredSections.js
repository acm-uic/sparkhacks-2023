import {useState, useEffect} from "react"

export default function StaggeredSections ( props ) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720)
  const PADDING = 30

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  if (props.sections[0].id === undefined) {
    const leftSideDiv = {
      marginLeft: 0,
      padding: PADDING,
      textAlign: "left",
    }
    const rightSideDiv = {
      marginRight: 0,
      padding: PADDING,
      textAlign: "right",
    }
    const mobileDiv = {
      margin: "0 auto",
      padding: PADDING,
      textAlign: "center"
    }

    const sectionItems = []
    if (isMobile) {
      props.sections.forEach((section, i) => {
        sectionItems.push(
          <section key = {i} style = {mobileDiv}>
          {section}
          </section>
        )})

    }else{
      props.sections.forEach((section, i) => {
        sectionItems.push(
          <section key = {i} style = {(i % 2 === 0) ? leftSideDiv : rightSideDiv}>
          {section}
          </section>
        )})
    }
    return (
      <div>
      {sectionItems}
      </div>
    )
  } else {
    const leftSide = {
      padding: PADDING,
      textAlign: "left",
    }
    const rightSide = {
      padding: PADDING,
      textAlign: "right",
    }
    const mobile = {
      margin: "0 auto",
      padding: PADDING,
      textAlign: "center"
    }

    const sectionItems = []
    if (isMobile) {
      props.sections.forEach((section) => {
        sectionItems.push(
          <section key = {section.id + "1"} style = {mobile}>
          <h2>
          {section.header}
          </h2>
          <p>
          {section.body}
          </p>
          </section>)
      });
    }else{
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
    }
    return (<div>{sectionItems}</div>)
  }

}

