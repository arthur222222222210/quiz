const perguntas = [
    {
      categoria: 'Geografia',
      pergunta: 'Qual o país com maior PIB do mundo?',
      resposta: 'Estados Unidos — US$ 14,13 trilhões.'
    },
    {
      categoria: 'Esporte',
      pergunta: 'Quais são os esportes mais assistidos do mundo?',
      resposta: 'O futebol é o esporte mais popular, seguido pelo rugby e pelo basquete'
    },
    {
      categoria: 'Politica',
      pergunta: 'Qual partido com maior numero de prefeitos?',
      resposta: 'PSD foi o partido que mais elegeu prefeitos no 1º turno das eleições.'
    },
    {
      categoria: 'Politica',
      pergunta: 'Maior bandido da historia politica brasileira?',
      resposta: 'Luiz Inácio Lula da Silva.'
    },
    {
      categoria: 'Programação',
      pergunta: 'Qual foi a primeira linguagem de programação de alto nível ?',
      resposta: 'IBM Mathematical FORmula TRANslation System (FORTRAN)'
    },
    {
      categoria: 'Programação',
      pergunta: 'A IDE do Arduino usa qual linguagem de programação ?',
      resposta: 'C++'
    }
  ];
  
  perguntas.forEach(({ categoria, pergunta, resposta }) => criaCartao(categoria, pergunta, resposta));