package br.com.gerenciadordeprodutos.api.Supplier.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/meu-nome")
public class MeuNomeController {
    @GetMapping
    public String meuNome() {
        return "Daniel";
    }
}
