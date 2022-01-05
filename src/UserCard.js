function UserCard( props ){
    console.log("props: ", props)  //


    return(<div>

        -------------------
        <br/><br/>

            <h3>{props.userProp.name}</h3>

            <p>This person loves Woobly: 🤖 {props.userProp.name}</p>

            <img src={props.userProp.image_url} alt={`This is an imhiage of ${props.userProp.name}`} />

        <br/><br/>
        -------------------

        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>


    </div>)



}
export default UserCard