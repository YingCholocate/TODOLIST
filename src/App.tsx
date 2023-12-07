import { useRef, useState } from 'react'
import './App.css'
import TodoList from '@/components/TodoList/TodoList'

function App() {
  const [isShow, setIsShow] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  return (
    <div className="flex-col items-center justify-center">
      <p className="pTitle text-center">Daily Todo</p>
      <TodoList isShow={isShow} setIsShow={setIsShow} bottomRef={bottomRef} />
      <div className={isShow ? 'hiddenBottomMask' : 'bottomMask'}>
        <svg
          className="svgIcon"
          onClick={() => {
            setIsShow(!isShow)
            // 滚动到底部
            bottomRef.current && bottomRef.current.scrollIntoView({ behavior: 'smooth' })
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none">
          <path
            d="M20 14V26M26 20H14M38 20C38 22.3638 37.5344 24.7044 36.6298 26.8883C35.7252 29.0722 34.3994 31.0565 32.7279 32.7279C31.0565 34.3994 29.0722 35.7252 26.8883 36.6298C24.7044 37.5344 22.3638 38 20 38C17.6362 38 15.2956 37.5344 13.1117 36.6298C10.9278 35.7252 8.94353 34.3994 7.27208 32.7279C5.60062 31.0565 4.27475 29.0722 3.37017 26.8883C2.46558 24.7044 2 22.3638 2 20C2 15.2261 3.89642 10.6477 7.27208 7.27208C10.6477 3.89642 15.2261 2 20 2C24.7739 2 29.3523 3.89642 32.7279 7.27208C36.1036 10.6477 38 15.2261 38 20Z"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default App
