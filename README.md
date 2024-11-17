# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Atividade 7 - Praticando conceitos essenciais do ReactJS

Este projeto reúne 10 atividades práticas desenvolvidas em ReactJS para exercitar conceitos fundamentais da biblioteca, como **useState**, **useEffect**, manipulação de eventos e organização de componentes.

---

## 🚀 **Atividades Implementadas**

### **1. Contador Simples**
- Componente que exibe um número na tela e possui botões para **incrementar** e **decrementar** o valor.
- **Desafio:** Impedir que o contador seja decrementado para valores negativos.

### **2. Alteração de Cor de Fundo**
- Componente que altera a cor de fundo da página ao clicar em um botão.
- **Desafio:** Gerar cores aleatórias a cada clique.

### **3. Lista de Tarefas**
- Aplicativo de lista de tarefas onde o usuário pode adicionar, remover e marcar tarefas como concluídas.
- **Desafio:** Filtrar tarefas concluídas e pendentes.

### **4. Temporizador com useEffect**
- Temporizador que conta o tempo em segundos.
- **Desafio:** Adicionar botões para pausar e reiniciar o temporizador.

### **5. Filtro de Lista**
- Componente que renderiza uma lista de nomes com um campo de entrada para filtrar itens.
- **Desafio:** Filtrar a lista sem diferenciar maiúsculas de minúsculas.

### **6. Formulário de Registro Simples**
- Formulário com campos de nome, e-mail e senha que exibe uma mensagem de boas-vindas ao ser enviado.
- **Desafio:** Validar os campos para garantir que todos estejam preenchidos.

### **7. Aplicação de Requisição de Dados Simples**
- Componente que exibe uma lista de posts obtidos da API pública **JSONPlaceholder**.
- **Desafio:** Adicionar um botão para recarregar os dados e um indicador de carregamento.

### **8. Galeria de Imagens com Visualização Detalhada**
- Galeria de imagens onde, ao clicar em uma imagem, ela é exibida em um modal ampliado.
- **Desafio:** Adicionar navegação entre imagens e um botão para fechar o modal.

### **9. Timer com Intervalo e Alerta**
- Timer onde o usuário define o tempo da contagem regressiva.
- **Desafio:** Mostrar um alerta ao término do tempo e adicionar botões para pausar e reiniciar.

### **10. Componentes com Tabs Navegáveis**
- Interface de navegação por abas que exibe conteúdos diferentes ao clicar em cada aba.
- **Desafio:** Destacar visualmente a aba ativa.

---

## 🗂 **Estrutura do Projeto**

A estrutura segue uma organização modular para facilitar a navegação e manutenção do código:

atividade7_maisprati/
├── src/
│   ├── components/      
│   │   ├── Counter.jsx
│   │   ├── ColorChanger.jsx
│   │   ├── TodoList.jsx
│   │   ├── Timer.jsx
│   │   ├── NameFilter.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── PostList.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── CountdownTimer.jsx
│   │   └── Tabs.jsx
│   ├── css/             
│   │   ├── App.css
│   │   ├── Counter.css
│   │   ├── ColorChanger.css
│   │   ├── TodoList.css
│   │   ├── Timer.css
│   │   ├── NameFilter.css
│   │   ├── RegistrationForm.css
│   │   ├── PostList.css
│   │   ├── ImageGallery.css
│   │   ├── CountdownTimer.css
│   │   └── Tabs.css
│   ├── assets/          
│   │   └── img/         
│   │       ├── image1.jpg
│   │       ├── image2.jpg
│   │       ├── image3.jpg
│   │       └── image4.jpg
│   ├── App.js           
│   └── index.html       
├── README.md            
├── package.json         
├── package-lock.json    
└── .gitignore           

---

## 🖥 **Como Executar o Projeto**

1. Clone este repositório:
   ```bash
   git clone https://github.com/glaucobairros/atividade7_maisprati.git

2. Navegue até o diretório do projeto:
   ```bash
   cd Atividade 7

3. Instale as dependências
   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev

5. Abra seu navegador e acesse:
   ```bash
   http://localhost:5173
