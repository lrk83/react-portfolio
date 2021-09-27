import React, {useState} from "react";
import {Container, Card, Button, Row, Col} from "react-bootstrap";

function Portfolio(){

    const [work] = useState([
        {
            name: 'Gopher 2.0',
            id: 'GopherTwo-Img-Element',
            description: 'Node.js, SQL, Handlebars, Express, Dcrypt, Dotenv',
            link: 'https://github.com/lrk83/Gopher-2.0',
        },
        {
            name: "Tech Blog",
            id: "TechBlog-Img-Element",
            description: "Node.js, SQL, Hanldebars, Express, Bcrypt, Dotenv",
            link: "https://github.com/lrk83/Tech-Blog"
        },
        {
            name: 'Gopher',
            id: 'Gopher-Img-Element',
            description: 'JS, HTML, CSS, Server Side APIs',
            link: 'https://github.com/lrk83',
        },
        {
            name: "Weather Dashboard",
            id: "WeatherDash-Img-Element",
            description: "JS, HTML, CSS, Server Side APIs",
            link: 'https://lrk83.github.io/Weather-Dashboard/'
        },
        {   
            name: "Workday Scheduler",
            id: "WorkDay-Img-Element",
            description: "HTRML, Bootstrap, JQuery",
            link: "https://lrk83.github.io/Work-Day-Scheduler/"
        },
        {
            name: "Code Quiz",
            id: "CodeQuiz-Img-Element",
            description: "HTML, Bootstrap, JS",
            link: "https://lrk83.github.io/Code-Quiz/"
        },
        {
            name: "Run Buddy",
            id: "RunBuddy-Img-Element",
            description: "HTML, CSS",
            link:"https://lrk83.github.io/run-buddy/"
        },
    ])

    return(
        <div className="portfolio-div">
            {work.map((example, i)=>(
                <Card key={example.name} id={example.id} className="WorkCard">
                    <Col className="img-col">
                        <div className="img-class" ></div>
                    </Col>
                    <Card.Body>
                        <Col>
                            <Card.Text>
                                {example.description}
                            </Card.Text>
                        </Col>
                        <Button variant="primary" href={example.link}>{example.name}</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Portfolio;