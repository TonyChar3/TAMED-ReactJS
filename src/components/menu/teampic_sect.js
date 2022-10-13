import team from '../../img/pexels-cottonbro-5044962.jpg';

function TeamPic(){
    return(
        <div className="menu__team-pic">
            <div className="container">
                <img src={team} alt="TAMED team"  id="team-pic"/>
            </div>
            <div className="container"></div>
        </div> 
    );
}

export default TeamPic;