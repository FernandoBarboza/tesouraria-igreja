package br.com.jfbarboza.tesouraria.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.jfbarboza.tesouraria.entity.Lancamento;
import br.com.jfbarboza.tesouraria.repository.LancamentoRepository;

@Service
public class LancamentoService {
    private final LancamentoRepository repository;

    public LancamentoService(LancamentoRepository repository) {
        this.repository = repository;
    }

    public Lancamento salvar(Lancamento lancamento) {
        return repository.save(lancamento);
    }

    public List<Lancamento> listarTodos() {
        return repository.findAll();
    }
}
