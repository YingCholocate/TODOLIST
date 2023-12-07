// import { useData } from '@/hooks/useData'
import { RefObject, useState } from 'react'
import FormModal from '../Form/FormModal'
import TodoBox from '../TodoBox/TodoBox'
import styles from './index.module.less'
import { SubmitHandler } from 'react-hook-form'
export interface Itodo {
  key: number
  title: string
  description: string
  tags: string[]
}
interface Iprops {
  isShow: boolean
  setIsShow: (isShow: boolean) => void
  bottomRef: RefObject<HTMLDivElement>
}
export default function TodoList({ isShow, setIsShow, bottomRef }: Iprops) {
  // mockdata
  const [todoLists, setTodoList] = useState<Itodo[]>([
    {
      key: 1,
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      tags: ['p1', 'health']
    },
    {
      key: 2,
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
      tags: ['p1', 'health']
    },
    {
      key: 3,
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
      tags: ['p1', 'health']
    },
    {
      key: 4,
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
      tags: ['p1', 'health']
    }
  ])

  // fetch from api
  // const todoLists: Itodo[] == useData(`/api/search`)

  const updateData: SubmitHandler<Itodo> = (data) => {
    setTodoList([...todoLists, data])
  }

  return (
    <div
      className={`${styles.conatiner} ${isShow ? styles.masked : ''}`}
      style={!isShow ? { marginBottom: '224px' } : {}}>
      {todoLists &&
        todoLists.map((todo, index) => (
          <div className={styles.boxContainer} key={index}>
            <TodoBox {...todo} />
          </div>
        ))}

      <FormModal isShow={isShow} setIsShow={setIsShow} update={updateData} />
      <div ref={bottomRef}></div>
    </div>
  )
}
