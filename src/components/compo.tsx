interface BookProps {
    name: string;
    image: string;
    cypher: (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number) => void;
    index: number;
    
    
}


function Compo({name,image,cypher,index}: BookProps) {
    return (
        <table id='table' onClick={(event) => cypher(event,index)}>
                    <tr>
                      <th>Skin: {name}</th>
                    </tr>
                    <tr id='containerPaiImagem' >
                      <td>
                        <img
                          id='imagem'
                          src={image}
                          alt="shaco-skin"                  
                        />               
                      </td>
                    </tr>
                  </table>
    ) 
}

export default Compo;