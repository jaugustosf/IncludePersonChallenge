function trocarConteudo(numero) {
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const body = document.body;

    // Remove qualquer classe de imagem de fundo existente
    body.classList.remove('luffy', 'zoro', 'nami', 'sanji');

    switch (numero) {
        case 1:
            h1.textContent = 'Monkey D. Luffy';
            p.textContent = 'É um pirata destemido e alegre, conhecido por sua personalidade impulsiva e pelo sonho de se tornar o Rei dos Piratas. Com sua tripulação, os Chapéu de Palha, Luffy navega pelos mares perigosos do mundo, em busca do tesouro lendário conhecido como o "One Piece". Possui uma força sobre-humana graças ao poder da Fruta do Diabo Gomu Gomu, que lhe concedeu a capacidade de esticar seu corpo como borracha, e é um mestre na arte do Haki. Luffy é extremamente leal aos seus amigos, e sua coragem inabalável o leva a enfrentar qualquer desafio, por mais assustador que seja, enquanto mantém um senso de justiça inquebrável.';
            body.classList.add('luffy');
            break;
        case 2:
            h1.textContent = 'Roronoa Zoro';
            p.textContent = 'Roronoa Zoro é o espadachim habilidoso e o primeiro membro recrutado na tripulação dos Chapéu de Palha. Conhecido por sua determinação feroz e sua ambição de se tornar o maior espadachim do mundo, ele carrega três espadas e luta com uma força e habilidade impressionantes. Zoro possui uma personalidade séria e centrada, muitas vezes exibindo uma aura de calma e lealdade inabalável a Luffy. Apesar de sua aparência intimidante, ele tem um coração generoso e se preocupa profundamente com seus companheiros de tripulação.';
            body.classList.add('zoro');
            break;
        case 3:
            h1.textContent = 'Nami';
            p.textContent = 'Nami, a navegadora dos Chapéu de Palha, é uma mulher inteligente, astuta e talentosa em cartografia e meteorologia. Seu grande sonho é desenhar um mapa completo do mundo. Inicialmente introduzida como uma cartógrafa egoísta e manipuladora, ela se torna uma parte essencial da tripulação, com um forte senso de responsabilidade e afeto por seus amigos. Nami tem um temperamento forte e é extremamente dedicada a sua missão de criar mapas precisos, sendo valiosa não apenas por suas habilidades de navegação, mas também por sua determinação e amor pelos seus colegas.';
            body.classList.add('nami');
            break;
        case 4:
            h1.textContent = 'Sanji';
            p.textContent = 'Sanji, o cozinheiro dos Chapéu de Palha, é um cavalheiro e mestre da culinária com um talento excepcional para a luta usando artes marciais baseadas em pernas. Ele é conhecido por sua elegância, cavalheirismo e dedicação à cozinha e às mulheres. Sanji é apaixonado por comida e luta em nome da justiça e de seus amigos, mantendo-se fiel ao seu código de honra. Apesar de suas diferenças com Zoro, há um profundo respeito mútuo entre eles, ambos sendo pilares vitais na tripulação de Luffy.';
            body.classList.add('sanji');
            break;
        default:
            break;
        }
    }