import {NavLink} from "react-router-dom";


const NavBar=()=>{
    return(
        <div>
            <NavLink to="/"
                     style={(params) => {
                         return params.isActive ? {backgroundColor: "red"} : undefined
                     }}
            >
                Anasayfa
            </NavLink> <br/>


            <NavLink
                style={(params) => {
                    return params.isActive ? {backgroundColor: "red"} : undefined
                }}
                to="/kullanici">Kullanıcı Sayfası
            </NavLink><br/>
            
            <NavLink
                className={(params) => {
                    return params.isActive ? 'active' : ''
                }}
                to="/parametre/baba-yadigari-anadol-marka-otomobili-satisa-14783201-haberi">
                Paramtere Sayfası
            </NavLink><br/>

            <NavLink to={
                `/queryparametre?a5_max=2020&a5_min=2015&price_min
                =100000&address_town=67&address_town=68&address_town=58&address_city=6
                `
            }>Query Params Sayfası
            </NavLink><br/>
            
            <NavLink to="/haberler">Haberler</NavLink> <br/>
            <NavLink to="/haberler/sporhaberleri">Spor Haberler</NavLink> <br/>
            <NavLink to="/haberler/ekonomi-haberleri">Ekonomi Haberler</NavLink> <br/>

        </div>
    )
}
export default NavBar