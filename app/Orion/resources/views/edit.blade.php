<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Orion - Editar Produto</title>
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous"
    >
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
        <form action="{{route('produtos.update'), $produto}}">
            @csrf
            @method('PUT')
            <div class="mb-3">
                <label for="" class="form-label">Nome do Produto</label>
                <input type="text" value="{{@$produto->nome_produto}}" class="form-control" id="nome_produto" name="nome_produto" required maxlength="100">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Descrição do Produto</label>
                <input type="multiline" value="{{@$produto->descricao}}" class="form-control" id="descricao" name="descricao" required maxlength="350">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Quantidade no Estoque</label>
                <input type="number" value="{{@$produto->estoque}}" class="form-control" id="estoque" name="estoque" min="0" required maxlength="5">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Preço do Produto</label>
                <input type="text" value="{{@$produto->preco}}" class="form-control" id="preco" name="preco" required maxlength="15">
            </div>
            <button type="submit">ATUALIZAR</button>
        </form>
    </main>

    <footer></footer>
</body>
</html>