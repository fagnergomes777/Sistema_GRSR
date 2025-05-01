import CriarTabela from './src/config/criar_tabela.js';
import prompt from 'prompt-sync';
import ColaboradoresView from'./src/modules/colaboradores/views/index.js';
import ReservasView from './src/modules/reservas/views/index.js'
import SalasView from './src/modules/salas/views/index.js'

const input = prompt();

async function criarTabelas() {
    try {
        await CriarTabela.colaboradores();
        await CriarTabela.reservas();
        await CriarTabela.salas();
        console.log('Tabelas criadas com sucesso!');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    }
}

async function menu() {
    await criarTabelas();

    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n===== MENU PRINCIPAL =====
            1 - Gerenciar Colaboradores
            2 - Gerenciar Reservas
            3 - Gerenciar Salas
            0 - Sair`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await menuColaboradores();
                break;
            case '2':
                await menuReservas();
                break;
            case '3':
                await menuSalas();
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuColaboradores() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Colaboradores ---
                1 - Cadastrar novo colaborador
                2 - Buascar por email
                3 - Atualizar colaborador
                4 - Deletar colaborador
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await ColaboradoresView.cadastrar();
                break;
            case '2':
                await ColaboradoresView.listarPorEmail();
                break;
            case '3':
                await ColaboradoresView.atualizarColaborador();
                break;
            case '4':
                await AlunoView.deletarColaborador();
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuReservas() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Reservas ---
                1 - Criar reserva nova
                2 - Listar reservas por colaborador ou sala
                3 - Filtrar por status ou por data
                4 - Evitar sobreposição de horários na mesma sala
                5 - Contar numero de reservas por horário
                6 - Atualizar status da reserva
                7 - Cancelar reserva
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await ReservasView.criarReserva();
                break;
            case '2':
                await ReservasView.listarReservas();
                break;
            case '3':
                await ReservasView.filtrarReservas();
                break;
            case '4':
                await ReservasView.evitarSobreposicao();
                break;
            case '5':
                await ProfessorView.contarReservas();
            case '6':
                await ReservasView.atualizarStatus();
            case '7':
                await ReservasView.cancelarReserva();    
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuSalas() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Sala ---
                1 - Criar nova sala
                2 - Listar salas
                3 - Atualizar sala
                4 - Deletar sala
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await SalasView.criar();
                break;
            case '2':
                await SalasView.listar();
                break;
            case '3':
                await SalasView.atualizar();
                break;
            case '4':
                await SalasView.deletar();
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

menu();