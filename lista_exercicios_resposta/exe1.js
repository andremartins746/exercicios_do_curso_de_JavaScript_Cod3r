let endereco ={
    rua: 'rua dos pinheiros',
    numero: 1293,
    bairro: 'centro',
    cidade: 'são paulo',
    uf: 'SP'
}

function usuario(){
    console.log(`o usuario mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero}`)
}

usuario()