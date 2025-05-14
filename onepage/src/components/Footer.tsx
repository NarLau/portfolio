
export const Footer = () => {

     let githubLink = 'https://github.com/NarLau';
     let linkedinLink = 'https://www.linkedin.com/in/michelle-s%C3%B6derstrand-7240b7337/';

    return(
        <div className="fot">
        <a href={githubLink} target="_blank"><div className="icon github" aria-label="Github Icon" role="img" /></a>
        <a href={linkedinLink} target="_blank"><div className="icon linkedIn" aria-label="LinkedIn Icon" role="img" /></a>
      </div>
    )
}