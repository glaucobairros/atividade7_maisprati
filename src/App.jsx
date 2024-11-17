import './css/App.css'
import { useState } from 'react'
import Counter from './components/Counter'
import ColorChanger from './components/ColorChanger'
import TodoList from './components/TodoList'
import Timer from './components/Timer'
import NameFilter from './components/NameFilter'
import RegistrationForm from './components/RegistrationForm'
import PostList from './components/PostList'
import ImageGallery from './components/ImageGallery.jsx'
import CountdownTimer from './components/CountdownTimer.jsx'
import Tabs from './components/Tabs.jsx'

function App() {

  const [activeComponent, setActiveComponent] = useState('menu')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Counter':
        return <Counter />
      case 'ColorChanger':
        return <ColorChanger />
      case 'TodoList':
        return <TodoList />
      case 'Timer':
        return <Timer />
      case 'NameFilter':
        return <NameFilter />
      case 'RegistrationForm':
        return <RegistrationForm />
      case 'PostList':
        return <PostList />
      case 'ImageGallery':
        return <ImageGallery />
      case 'CountdownTimer':
        return <CountdownTimer />
      case 'Tabs':
        return <Tabs />
      default:
        
        return <p className="menu-message">Selecione uma das atividades do Menu</p>

    }
  }

  return (
    <>
      <div className='menu'>
        <h1 className='menu-title'>Menu</h1>
        <nav className='navigation'>
          <button onClick={() => setActiveComponent('Counter')}>Contador Simples</button>
          <button onClick={() => setActiveComponent('ColorChanger')}>Alteração de Cor de Fundo</button>
          <button onClick={() => setActiveComponent('TodoList')}>Lista de Tarefas</button>
          <button onClick={() => setActiveComponent('Timer')}>Temporizador</button>
          <button onClick={() => setActiveComponent('NameFilter')}>Filtro de Lista de Nomes</button>
          <button onClick={() => setActiveComponent('RegistrationForm')}>Formulário de Registro</button>
          <button onClick={() => setActiveComponent('PostList')}>Lista de Posts</button>
          <button onClick={() => setActiveComponent('ImageGallery')}>Galeria de Imagens</button>
          <button onClick={() => setActiveComponent('CountdownTimer')}>Timer de Contagem Regressiva</button>
          <button onClick={() => setActiveComponent('Tabs')}>Tabs Navegáveis</button>
        </nav>

        <div>
          {renderComponent()}
        </div>
      </div>
    </>
  )
}

export default App
