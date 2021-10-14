<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;

class OrionController extends Controller
{
    public function index()
    {
        $produtos = Produto::get();
        return view('index', [
            'produtos' => $produtos
        ]);
    }

    public function add()
    {
        return view('add');
    }

    public function save(Request $request)
    {
        $dados = $request -> except('_token');
        Produto::create($dados);
        return redirect()->route('produtos.index');
    }

    public function edit(int $id)
    {
        $produto = Produto::findOrFail($id);
        return view('edit', [
            'produto' => $produto
        ]);
    }

    public function update(int $id, Request $request)
    {
        $produto = Produto::findOrFail($id);
        $dados = $request->except(['_token', '_method']);
        return redirect()->route('produtos.index');
        $produto->update($dados);
    }

    public function destroy(int $id)
    {
        $produto = Produto::findOrFail($id);
        $produto->delete();
        return redirect()->route('produtos.index');
    }
}

?>