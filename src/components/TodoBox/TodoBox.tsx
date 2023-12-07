import { Itodo } from '../TodoList/TodoList'
import styles from './index.module.less'

export default function TodoBox(props: Itodo) {
  const tododata = { ...props }
  // mockColor can add it in tododata
  const colorArr = [
    { color: 'var(--tailwind-rose-600, #E11D48)', background: 'var(--tailwind-red-50, #FEF2F2)' },
    { color: 'var(--tailwind-green-600, #16A34A)', background: 'var(--tailwind-green-50, #F0FDF4)' }
  ]
  return (
    <>
      <div className={`"text-2xl" ${styles.title}`}>{tododata.title}</div>

      <p className={styles.description} id="description">
        {tododata.description}
      </p>
      <div className={styles.tag}>
        {tododata.tags &&
          tododata.tags.map((tag, index) => (
            <div key={tag} style={{ background: `${colorArr[index % 2].background}` }}>
              <p style={{ color: `${colorArr[index % 2].color}` }}>{tag}</p>
            </div>
          ))}
      </div>
    </>
  )
}
