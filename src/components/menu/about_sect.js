
function About(){
    return(
        <>
            <div className="menu__about">
                <div className="icon__border">
                    <div className="icons-container">
                        <h3>Viens nous suivre</h3>
                        <div className="icons">
                            <a href="https://www.instagram.com/tamed_store" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                            <i className="bi bi-tiktok"></i>
                            <i className="bi bi-snapchat"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom__container">
                <div className="container">
                    <div className="text__border">
                        <span>#TAMED-THE-BEAST</span>
                        <p>Notre objectif est d'aider tous les athlètes à repousser les limites de
                            ce qui est considéré impossible.
                        Pour accomplir cette mission, nous avons besoin de toi, qui porte à coeur
                        l'envie de te dépasser, de défier et d'apprivoiser la bête en toi.
                        </p>
                    </div>
                </div>
                <div className="teamImg__container"></div>
            </div>
        </>

    );
}

export default About;