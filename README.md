# SOLID Principles in TypeScript

Este projeto demonstra como aplicar os princípios SOLID em TypeScript através de um exemplo simples. Os princípios SOLID ajudam a criar um código mais limpo, modular e fácil de manter.

## Princípios SOLID

### 1. Single Responsibility Principle (SRP)

**Princípio da Responsabilidade Única**: Uma classe deve ter uma, e apenas uma, razão para mudar. Isso significa que cada classe deve ser responsável por uma única parte da funcionalidade do software.

**Exemplo no Projeto**:

- A classe `User` é responsável apenas por representar os dados de um usuário.
- A classe `Validator` é responsável por validar os dados, como a verificação de e-mails.

### 2. Open/Closed Principle (OCP)

**Princípio do Aberto/Fechado**: O código deve estar aberto para extensão, mas fechado para modificação. Ou seja, você deve poder adicionar novas funcionalidades através da extensão de classes ou métodos existentes, sem modificar o código existente.

**Exemplo no Projeto**:

- A classe `EmailSender` pode ser estendida para criar novas maneiras de enviar emails sem modificar o código existente.

### 3. Liskov Substitution Principle (LSP)

**Princípio da Substituição de Liskov**: Objetos de uma superclasse devem ser substituíveis por objetos de suas subclasses sem quebrar a aplicação. Este princípio garante que as subclasses possam ser usadas no lugar das superclasses.

**Exemplo no Projeto**:

- A classe `AdvancedEmailSender` estende `EmailSender` e pode ser usada no lugar dela sem causar problemas no código.

### 4. Interface Segregation Principle (ISP)

**Princípio da Segregação de Interface**: Muitas interfaces específicas são melhores que uma interface única e geral. Em vez de criar uma interface monolítica que força as classes a implementar métodos que não usam, crie interfaces mais granulares e específicas.

**Exemplo no Projeto**:

- A interface `IEmailSender` define claramente os métodos relacionados ao envio de e-mails, sem misturar responsabilidades de outras funcionalidades, como notificações.

### 5. Dependency Inversion Principle (DIP)

**Princípio da Inversão de Dependência**: Dependa de abstrações, não de implementações concretas. Este princípio promove a inversão de dependências, onde os módulos de alto nível não devem depender de módulos de baixo nível, mas ambos devem depender de abstrações (interfaces).

**Exemplo no Projeto**:

- A classe `NotificationService` depende da interface `IEmailSender`, não de uma implementação concreta. Isso permite trocar a implementação de envio de e-mails sem modificar a lógica de notificação.

## Estrutura do Projeto

```
solid-example
├── README.md
├── main.ts
└── src
├── entities
│ └── User.ts
├── interfaces
│ └── IEmailSender.ts
├── services
│ ├── AdvancedEmailSender.ts
│ ├── EmailSender.ts
│ ├── NotificationService.ts
│ └── UserService.ts
└── utils
└── Validator.ts
```

## Como Executar o Projeto

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Execute o código**:
   ```bash
   npm start
   ```

## Conclusão

Este projeto foi criado para demonstrar a aplicação dos princípios SOLID em um código TypeScript. Cada princípio é importante para a criação de software escalável e de fácil manutenção. Ao seguir esses princípios, você pode melhorar a qualidade e a robustez do seu código.
