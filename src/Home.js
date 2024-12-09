import "./index.css"
export default function Home() {
    const clients = [ 
        { nom: "Rami", montant: 4500 }, 
        { nom: "Karimi", montant: 2300 }, 
        { nom: "Chaouki", montant: 5500 }, 
        { nom: "Ramoun", montant: 7700 }, 
        ];
    return (
        clients.map(function (client){

            return (
                <>
                    <p>{client.nom}</p>
                    <p>{client.montant}</p>
                </>
            )
        })
    )
    
}
