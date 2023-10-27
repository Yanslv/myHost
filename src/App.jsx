import './App.css'
import { TextCustom } from './componentes/TextCustom/TextCustom'

function App() {
  return (
    <div className='bg-gradient-to-b from-emerald-500 to-teal-700 px-80 h-screen py-8'>
      <div className='flex flex-row justify-between py-1 border-b-2 border-b-cyan-400'>
         <TextCustom text={'Sobre mim'} />
          <div className='grid grid-cols-3 gap-2'>
            <TextCustom text={'Notion'} />
            <TextCustom text={'GitHub'} />
            <TextCustom text={'Instagram'} />
          </div>
      </div>
      <div className='py-4 flex justify-between'>
        <div className='bg-slate-300 w-64 h-64 rounded-md items-center justify-center flex'>
          <a href='https://appetize.io/app/vpyfawpjtkdrjphueamczqlaku?device=pixel7&osVersion=13.0&record=true' target='_blank'>
              Logo
          </a>
        </div>
        <div className='bg-slate-300 w-64 h-64 rounded-md items-center justify-center flex'>
          <a href='https://appetize.io/app/vpyfawpjtkdrjphueamczqlaku?device=pixel7&osVersion=13.0&record=true' target='_blank'>
              Logo
          </a>
        </div>
        <div className='bg-slate-300 w-64 h-64 rounded-md items-center justify-center flex'>
          <a href='https://appetize.io/app/vpyfawpjtkdrjphueamczqlaku?device=pixel7&osVersion=13.0&record=true' target='_blank'>
              Logo
          </a>
        </div>
        <div className='bg-slate-300 w-64 h-64 rounded-md items-center justify-center flex'>
          <a href='https://appetize.io/app/vpyfawpjtkdrjphueamczqlaku?device=pixel7&osVersion=13.0&record=true' target='_blank'>
              Logo
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
