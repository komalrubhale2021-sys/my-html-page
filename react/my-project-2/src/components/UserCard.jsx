export function UsrCard({name,email}){
    const trainer={
        name:"komal",
        email:"komal21@gmail.com"
    }
    return (
        <>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <img src={imageUrl} alt="nature"/>        </>
    );
}

