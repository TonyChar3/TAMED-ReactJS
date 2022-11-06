
function About(){
    return(
        <div className="menu__about">
            <div className="container">
                <h3>À propos</h3>
                <p>Notre objectif est d'aider tous les athlètes à repousser les limites de
                    ce qui est considéré impossible.
                Pour accomplir cette mission, nous avons besoin de toi, qui porte à coeur
                l'envie de te dépasser, de défier et d'apprivoiser la bête en toi.
                </p>
                <span>#TAMED-THE-BEAST</span>
                <div className="icons-container">
                    <a href="/" target="_blank"><i className="bi bi-instagram"></i></a>
                    <i className="bi bi-tiktok"></i>
                    <i className="bi bi-snapchat"></i>
                </div>
            </div>
        </div>  
    );
}

export default About;