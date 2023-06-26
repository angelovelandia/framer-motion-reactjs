import { motion } from 'framer-motion'
import { useState } from 'react'

import './App.css'

const varianst = {
  odd: {
    backgroundColor: '#333',
    color: "#999"
  },
  event: {
    backgroundColor: '#999',
    color: "#000",
    scale: 0.8
  }
}

function App() {

    const [counter, setCounter] = useState(0);

    return (
        <div className='app'>
            <div>
                <motion.div className='box'
                    animate={counter % 2 === 0 ? 'event': 'odd'}
                    variants={varianst}
                >
                    {counter}
                </motion.div>
            </div>
            <button onClick={() => setCounter(c => c + 1)}>
                Count
            </button>
            <div>
                <motion.div className='box' 
                    transition={{ duration: 5 }}
                    animate={{ 
                    scale: [1, 2 , 3 , 1, 0.5],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%","50%","50%","20%"]
                    }}>
                </motion.div>
            </div>
            <div>
                <motion.div className='box' 
                    transition={{ duration: 5 }}
                    initial={{ backgroundColor: '#fff', scale: 0.1, rotate: 45 }} 
                    animate={{ scale: 1, rotate: 96 }}>
                </motion.div>
            </div>
            <div>
                <motion.h1 
                    initial={{ color: '#FFFFFF' }}
                    transition={{ duration: 5 }}
                    animate={{ 
                    y: 100,
                    color: "#000" 
                    }}
                >Hola Mundo</motion.h1>
            </div>
        </div>
    )
}

export default App
