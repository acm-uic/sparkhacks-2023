
export default function Description(){
    return (
    <div class='Description'>
        <h1 class='header'>
            style={{
                color: "#000000",
                fontWeight: 'bold',
                fontSize: 38
            }}
            Description
            {"\n"}
        </h1>
        <Text numberOfLines={3}>
            style={{
                color:"#D9D9D9"
            }}
            Flourish! is an annually held conference intendedc to introduce both CS and 
            non-CS, technical and non-technical majors to the world of open source through 
            speakers, demos, workshops, sponsors, job opportunities, and other events! We show off hardware, 
            software, business, entrepreneurship, finance, and more aspects of open source. We want to make 
            this project bigger and bigger year over year and bring in new students. Our previous conferences
            focused on a small number of students in a technical software direction, but we are looking to change that!
        </Text>
    </div>
    );
}