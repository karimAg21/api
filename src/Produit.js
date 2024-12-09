
const Products = [
    { id:1,nom: "milk", montant: 4,livreur:{nom:"karim",n:3 }},
    { id:2,nom: "bread", montant: 1,livreur:{nom:"ali",n:2 } },
    { id:3,nom: "soda", montant: 5,livreur:{nom:"ahmed",n:115 } },
    { id:4,nom: "burger", montant: 30,livreur:{nom:"samir",n:23 } },];
// export default function prod() {
//     return (
//         Products.map(function(Prod){
//             return(
//                 <>
//                 <table border={1}>
//                     <tr>
//                         <td>{Prod.id}</td>
//                         <td>{Prod.nom}</td>
//                         <td>{Prod.montant}</td>
//                         <td>{Prod.livreur.nom}</td>
//                         <td>{Prod.livreur.n}</td>
//                         </tr>
//                 </table>
//                 </>
//             )
//         })
//     )
// }
// export default function prod(){
//     return(
//         Products.filter(function(prod){
//             return prod.montant>=5
//         }).map(function(prod){
//             return(
//             <>
//                 <p>{prod.nom }</p>
//                 <p>{prod.montant}</p>
//              </>
//             )
//         })
//     )
// }
// export default function prod(){
//     const res=Products.find(function(prod){
//         return prod.id===2
    
//     })
//     return(
//         <>
//         <p>{res.nom}</p>
//         </>
//     )
// }
// export default function prod(){
//     const res=Products.find(function(prod){
//         return prod.nom==='soda'
    
//     })
//     return(
//         <>
//         <p>{res.id}</p>
//         <p>{res.montant}</p>
//         <p>{res.livreur.nom}</p>
//         <p>{res.livreur.n}</p>
//         </>
//     )
// }
export default function ClientsM() {
    const total=Products.reduce((total,client)=>{
        return total+=client.montant
},0)
return(
    <>
        <p>{total}</p>
    </>
)
}
