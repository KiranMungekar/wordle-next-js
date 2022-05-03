import type { NextPage } from 'next'
import Head from 'next/head'
import Guess from '../components/Guess'
import Qwerty from '../components/Qwerty'
import PuzzleStore from '../stores/PuzzleStore'
import { observer, useLocalObservable } from 'mobx-react-lite'
import { useEffect } from 'react'


export default observer( function Home(){
  const store = useLocalObservable(() => PuzzleStore)

  useEffect(() => {
    store.init()
    window.addEventListener('keyup', store.handleKeyUp)
    return () => {
      window.removeEventListener('keyup', store.handleKeyUp)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-800">
      <Head>
        <title>Wordle App</title>
      </Head>
      <h1 className='text-6xl mb-5 font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500'>Wordle</h1>
      <main>
        { store.userGuesses.map( (_,i) => (
          <Guess key={i} word={store.word} userGuess={store.userGuesses[i]} isGuessed={i< store.currentGuess} />
        ) ) }
        <div className="flex items-center justify-between pt-4">
          <div className='flex flex-col items-center justify-center text-2lx font-semibold text-white'>
            <h1>WINS</h1>
            <h1>{store.wins}</h1>
          </div>
            <button disabled={!(store.won || store.lost)} className='bg-gray-300 p-3 text-white border rounded font-semibold bg-transparent bg-clip bg-gradient-to-br from-blue-500 to-green-500 disabled:opacity-20' onClick={store.init}> PLAY NEXT </button>
          <div className='flex flex-col items-center justify-center text-2lx font-semibold text-white'>
            <h1>LOST</h1>
            <h1>{store.loss}</h1>
          </div>
        </div>
        {/* <h1>Word: {store.word}</h1> */}
      </main>
    </div>
  )
}) 

