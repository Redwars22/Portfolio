<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Orion - Gerenciamento de Produtos</title>
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous"
    >
    <style>
        img {
            margin: 10px;
        }

        main {
            margin: 30px;
        }
    </style>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
            <div class="container-fluid">
                <img src="https://cdn4.iconfinder.com/data/icons/SUNNYDAY/accounting/png/256/send_box.png" width="50px" height="50px">
                <a class="navbar-brand" href="{{route('produtos.index')}}">Project Orion</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{{route('produtos.index')}}">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('produtos.add')}}">Adicionar Produto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://redwars22.github.io/Portfolio/">Outros Projetos</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>

    <main class="container">
        <table class="table table-success table-striped">
            <thead>
                <tr>
                <th>ID</th>
                <th scope="col">NOME</th>
                <th scope="col">QUANTIDADE</th>
                <th scope="col">PREÇO</th>
                <th scope="col">AÇÕES</th>
                </tr>
            </thead>
            <tbody>
                @forelse($produtos as $produto)
                <tr>
                    <td>{{$produto->id}}</td>
                    <td>{{$produto -> nome_produto}}</td>
                    <td>{{$produto -> estoque}}</td>
                    <td>{{$produto -> preco}}</td>
                    <td>
                        <a 
                            href="{{route('produtos.destroy', $produto)}}" 
                            class="btn btn-danger"
                        >
                            DELETAR
                        </a>
                    </td>
                </tr>
                @empty
                <script>alert("⚠️ ERRO, NÃO HÁ NENHUM PRODUTO CADASTRADO NO SISTEMA" +
                " OU HÁ UM PROBLEMA NA CONEXÃO COM O BANDCO DE DADOS!")</script>
                @endforelse
            </tbody>
        </table>

        <a
            href="{{route('produtos.add')}}"
            class="btn btn-success"
        >
            CADASTRAR PRODUTO
        </a>
    </main>

    <footer></footer>
</body>
</html>