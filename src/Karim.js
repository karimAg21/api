const clients = [ 
    { nom: "Rami", montant: 4500 }, 
    { nom: "Karimi", montant: 2300 }, 
    { nom: "Chaouki", montant: 5500 }, 
    { nom: "Ramoun", montant: 7700 },
    ];

function Collection (){
    return(
        clients.map(function (client) {
            return(
                <>
                <table border={1}>
                    <thead>
                        <td>{client.nom}</td>
                        <td>{client.montant}</td>
                    </thead>
                </table>
            </>
            )
            
        })
    )
};
export default Collection
