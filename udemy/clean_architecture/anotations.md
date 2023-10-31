# Introdução e fundamentos

- Código x Design x Arquitetura:
    - Não são as mesmas coisas;
    - Resolver problemas de codificação não geram impactos arquiteturais;
    - Arquitetura impacta Design que impacta no código;

- O que é arquitetura?
    - Robert C. Martin, é a estrutura fundamental do software, que envolve a organização dos componentes e a interação entre eles. Ela define a forma como o software é dividido em módulos, como esses módulos se comunicam e como as decisões de design e implementação são tomadas. A arquitetura de software é responsável por garantir que o sistema seja flexível, extensível, testável e de fácil manutenção.
    - O objetivo da arquitetura de software é minimizar os recursos humanos necessários para construir e manter um determinado sistema.

- Programação não estruturada (GoTo):
    - A programação não estruturada é um estilo de programação que não segue as regras da programação estruturada. O uso de instruções GOTO é um exemplo de programação não estruturada. Aqui estão alguns tópicos que podem ajudar a entender melhor a programação não estruturada:
    1. O que é programação não estruturada? 
        -  A programação não estruturada é um estilo de programação que não segue as regras da programação estruturada. Em vez disso, ele usa instruções GOTO para controlar o fluxo do programa.
    2. O que são instruções GOTO? 
        - As instruções GOTO são usadas para transferir o controle do programa para uma linha específica de código. Isso pode tornar o código difícil de ler e manter.
    3. Por que o uso de instruções GOTO é considerado ruim? 
        - O uso de instruções GOTO é considerado ruim porque pode tornar o código difícil de ler e manter. Além disso, o uso excessivo de instruções GOTO pode levar a loops infinitos e outros problemas.

- Programação estruturada:
    - A programação estruturada é um paradigma de programação que tem como objetivo melhorar a clareza, qualidade e diminuir o tempo de desenvolvimento de um programa de computador. Ela utiliza sub-rotinas e três estruturas básicas: sequência, seleção (if e switch) e iteração (laços for e while).
    1. O que é a programação estruturada? 
        - A programação estruturada é um paradigma de programação que tem como objetivo melhorar a clareza, qualidade e diminuir o tempo de desenvolvimento de um programa de computador, utilizando sub-rotinas e três estruturas básicas: sequência, seleção (if e switch) e iteração (laços for e while).
    2. Quais são as vantagens da programação estruturada? 
        - Entre as vantagens da programação estruturada em relação ao modelo anterior, vale a pena citar as seguintes: os programas são mais fáceis de entender, podem ser lidos de forma sequencial e não há necessidade de localizar saltos de execução nas linhas dentro dos blocos de código para tentar entender a lógica interna. A estrutura do programa é clara, já que as instruções estão mais conectadas ou relacionadas entre si. O esforço necessário nas fases de testes e depuração é minimizado. A localização das falhas e erros do programa, e, com isso, sua detecção e correção, são facilitadas enormemente. Os custos de manutenção são reduzidos. Assim como na depuração, modificar ou estender programas fica mais fácil na fase de manutenção. Os programas são mais simples e rápidos de criar. O rendimento dos programadores também é otimizado.

- Programação orientada a objetos:
    - A programação orientada a objetos é um paradigma de programação que permite a criação de objetos que possuem atributos e métodos. Os principais tópicos sobre programação orientada a objetos são:
    1. Encapsulamento: 
        - Garantir que alterar os valores dos atributos de um objeto seja responsabilidade exclusiva do próprio objeto.
    2. Herança: 
        - Criar uma nova classe de objetos a partir de outra que já existe.
        - Reutilizar atributos e métodos de uma classe existente.
    3. Polimorfismo: 
        - Todas as classes de objetos derivados de uma mesma classe possuem métodos de mesma assinatura, mas com comportamentos distintos.
        - Transferência indireta de controle.
    4. Abstração: 
        - Extrair entidades do mundo real para dentro do código seguindo a fio suas responsabilidades.

    - Esses tópicos são fundamentais para o desenvolvimento de aplicações orientadas a objetos. Eles permitem que o código seja organizado, reutilizável e fácil de manter.

- Programação funcional:
    - A programação funcional é um paradigma de programação que se concentra em funções e dados imutáveis. Em vez de alterar o estado de um objeto, a programação funcional cria novos objetos com base em objetos existentes. A programação funcional é baseada em três conceitos principais: funções puras, imutabilidade e composição de funções:
    1. Funções puras:
        - As funções puras são aquelas que não têm efeitos colaterais e produzem o mesmo resultado sempre que são chamadas com os mesmos argumentos.
    2. Imutabilidade:
        - A imutabilidade significa que os dados não podem ser alterados após a criação.
    3. Composição de funções:
        -  A composição de funções é a criação de uma nova função a partir de outras funções, realizando mais de uma atribuição em uma única chamada.

- Padrão Camadas:
    - O padrão de camadas é uma arquitetura de software que organiza o sistema em três camadas distintas, cada uma com uma função específica. Essas camadas são:

    1. Model: 
        - camada responsável pela manipulação dos dados.
    2. View: 
        - camada responsável pela interação do usuário.
    3. Controller: 
        - camada responsável pelo controle entre Model e View.