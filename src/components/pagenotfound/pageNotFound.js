import './notfound.css'

function Pagenotfound(){
    return(
        <div className="page-not-found__container">
            <h1>404 <span id="error__span">[erreur]</span></h1>
            <h3>Désolé! Cette page n'existe pas</h3>
            <h3>Si c'est un lien cliqué qui vous amène ici, veuillez nous informer avec l'addresse founrni si-dessous !</h3>
        </div>
    );
}

export default Pagenotfound;