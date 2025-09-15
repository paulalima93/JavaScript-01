- Preparar um array vazio para armazenar tarefas.

### 2. Menu principal
- Exibir opções:
  1. Adicionar tarefa
  2. Listar tarefas
  3. Marcar tarefa como concluída
  4. Remover tarefa
  5. Sair

### 3. Ler opção do usuário

### 4. Verificar opção
- **1: Adicionar tarefa**
  - Pedir nome da tarefa
  - Adicionar ao array como `{ nome, concluida: false }`
  - Voltar ao menu
- **2: Listar tarefas**
  - Se o array estiver vazio, informar
  - Caso contrário, exibir todas as tarefas com status e numeração
- **3: Marcar tarefa como concluída**
  - Mostrar lista de tarefas
  - Pedir número da tarefa
  - Alterar `concluida` para `true`
  - Voltar ao menu
- **4: Remover tarefa**
  - Mostrar lista de tarefas
  - Pedir número da tarefa
  - Remover do array
  - Voltar ao menu
- **5: Sair**
  - Encerrar programa
- **Opção inválida**
  - Mostrar mensagem de erro
  - Voltar ao menu

### 5. Repetir o menu enquanto a opção for diferente de 5

### 6. Fim do programa

---

## 🔧 Lógica para funções

### Função `adicionarTarefa(nome)`
1. Receber nome da tarefa
2. Validar se não está vazio
3. Criar objeto `{ nome, concluida: false }`
4. Adicionar ao array
5. Mostrar confirmação

### Função `listarTarefas()`
1. Verificar se o array está vazio
2. Para cada tarefa:
   - Definir status `[Pendente]` ou `[Concluída]`
   - Mostrar índice, status e nome

### Função `marcarConcluida(indice)`
1. Receber índice da tarefa
2. Validar índice
3. Alterar `concluida` para `true`
4. Mostrar confirmação

### Função `removerTarefa(indice)`
1. Receber índice da tarefa
2. Validar índice
3. Remover do array
4. Mostrar confirmação

---

## 💡 Dicas gerais
- Valide sempre os dados antes de alterar o array
- Cada função deve ter **uma única responsabilidade**
- Use `console.log` para feedback do usuário
- O menu principal apenas **chama as funções** conforme a opção

