function UserCard( props ){
    console.log("props: ", props)  //


    return(<div>

        -------------------
        <br/><br/>

            <h3>{props.userProp.name}</h3>

            <img src={props.userProp.image_url} alt={`This is an image of ${props.userProp.name}`} />

        <br/><br/>
        -------------------

        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>


    </div>)



}
export default UserCard