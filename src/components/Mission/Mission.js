import './Mission.css';

function Mission(){
    return(
        <div className="mission__backgrnd">
            <div className="mission__container">
                <div className="color__brder">
                    <h3>Qui sommes-nous ?</h3>
                    <p>Nous sommes Tamed. Nous fabriquons les meilleurs équipements
                    d'exercice sur le marché. Nous croyons aux défis, pas aux limites. Ne 
                    faites pas de compromis, prenez des risques contre votre bête intérieur.
                    Nous croyons que chacun a le pouvoir de s'améliorer.
                    </p>
                    <p>
                    Il s'agit de ce que vous pouvez réaliser en repoussant vos limites
                    </p>
                    <p>
                    Tamed est bien plus qu'une marque d'accessoire de sport, c'est une famille
                    de personne qui poursuivent un rêve et un principe commun, celui de ne jamais
                    abandonner.
                    </p>
                    <p>
                    Conçu pour les rares qui osent imaginer, attaquer et conquérir.
                    Tamed vise à devenir la première marque mondiale d'article de sport.
                    </p>
                </div>
            </div>
            <div className="desktop__wrapper">
                <div className="seb__container">
                    <div className="profile__container">
                        <img src="/TAMED_img/seb-s.jpg" alt="seb" />
                    </div>
                    <div className="descrip__container">
                        <h3>Sébastien Therrien</h3>
                        <h4>Entrepreneur</h4>
                    </div>
                </div>
                <div className="jl__container">
                    <div className="descrip__container">
                        <h3>Jean-Luc Kouassi</h3>
                        <h4>Entrepreneur</h4>
                    </div>
                    <div className="profile__container">
                        <img src="/TAMED_img/jl-s.jpg" alt="jeanLuc" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Mission;