import "../../styles/Section.css"

export const About = () => {
    let YHLink = `https://medieinstitutet.se/utbildningar/fullstack-developer/?_gl=1*goda4a*_up*MQ..*_ga*NDM1MzY1NTQ0LjE3NDcwNDc3ODA.*_ga_Z1PFJ3S4H8*czE3NDcwNDc3ODAkbzEkZzEkdDE3NDcwNDc3ODYkajAkbDAkaDI1MzgxMjk3Mw..*_ga_1GR3EKMT4F*czE3NDcwNDc3ODMkbzEkZzEkdDE3NDcwNDc3ODYkajAkbDAkaDA`

    return(
        <div className="container">
            <div className="aboutImg"></div>
            <div className="information">
                <h2>Michelle, the Structured one</h2>
                <p>Hi,i am a Fullstack developer student from <a href={YHLink} target="_blank">Medieinstitutet</a></p>
                <p>PHP, Node.js, Javascript, Typescipt, React, Css and SaaS</p>
                <p>Problemsolving, Structure, Willingness to lern</p>
                <p>I enjoy puzzles, music and a nice walk.</p>
            </div>
        </div>
    )
}