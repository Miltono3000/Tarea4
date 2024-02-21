function primertercercuadrante(coordenadas){
    let resultado = [];
    for(let i = 0; i < coordenadas.length; i++){
        let[x, y] = coordenadas[i];
        if((x < 0 && y < 0) || (x > 0 && y > 0)){
            resultado.push([x, y])
        }
    }
    return resultado;
}
let coords = [[5, -6], [1, 2], [4, -5], [-3, -2], [0, 0]];
let result = primertercercuadrante(coords);
console.log(result);