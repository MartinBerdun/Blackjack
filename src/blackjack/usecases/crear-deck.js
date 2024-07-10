import _ from 'underscore'

//DOCUMENTACION DE FUNCIONES Y PARAMETROS
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales 
 * @returns {array<String>} retorna un nuevo deck de cartas
 */

//exportacion individual de algun elemento, se importan con llaves en el otro archivo

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta) throw new Error('Tiposdecarta es obligatorio');
    if(tiposDeCarta.length === 0) throw new Error ('Tiene que ser un arreglo')

    if(!tiposEspeciales) throw new Error('Tiposdecarta es obligatorio');
    if(tiposEspeciales.length === 0) throw new Error ('Tiene que ser un arreglo')



    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

